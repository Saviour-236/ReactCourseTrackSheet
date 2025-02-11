import PlayerTemplate from './ReusableComponents/PlayerTemplate'
import './App.css'
import { useEffect, useState } from "react";
import GameBoard from "./ReusableComponents/GameBoard";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [boxes,setBoxex] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])
  const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]], // Top row
    [[1, 0], [1, 1], [1, 2]], // Middle row
    [[2, 0], [2, 1], [2, 2]], // Bottom row
    [[0, 0], [1, 0], [2, 0]], // Left column
    [[0, 1], [1, 1], [2, 1]], // Middle column
    [[0, 2], [1, 2], [2, 2]], // Right column
    [[0, 0], [1, 1], [2, 2]], // Diagonal (top-left to bottom-right)
    [[0, 2], [1, 1], [2, 0]], // Diagonal (top-right to bottom-left)
  ];
  const [colNo,setColNo] = useState(0)
  const [winner,setWinner] = useState<string|null>(null)
  const [activePlayerSign,setActivePlayerSign] = useState("X")
  const shiftPlayerTurn = (sign:string,row:any,col:any) => {
    if(boxes[row][col] !== null){
      toast("Already filled")
      return
    }
    setBoxex((prevBox:any)=>{
      let newbox = prevBox.map((preRow:any)=> [...preRow]); // Deep copy
      newbox[row][col] = sign;
      return newbox;
   })
    setActivePlayerSign(sign === "X" ? "O" : "X");
  }
  const handleReset = () => {
    setBoxex([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ])
    setWinner(null);
    setColNo(0)
    setActivePlayerSign("X")
  }
  useEffect(()=>{
    if(colNo === 9 && winner === null){
      setWinner("Draw")
      return
    }
    winningCombinations.forEach((combination)=>{
      let [a,b,c] = combination;
      if(boxes[a[0]][a[1]]  === boxes[b[0]][b[1]] && boxes[b[0]][b[1]]  ===  boxes[c[0]][c[1]]  &&  boxes[c[0]][c[1]] !== null){
      setWinner(boxes[c[0]][c[1]]);
      return;
       } 
      })
      setColNo((colNo)=>colNo+1)
  },[boxes])
  return (
    <>
    <ToastContainer/>
      <main className=" min-w-fit relative bg-center bg-contain rounded-2xl w-[80vw] m-auto mt-[3rem] bg-[#eeeeee30] p-[3rem] " >
          <div className="flex justify-around ">
              <PlayerTemplate playerName="suresh" playerSign="0" />
              <PlayerTemplate playerName="suresh" playerSign="X" />
          </div>
          <article className="flex justify-center ">
                <GameBoard boxes={boxes} shiftPlayerTurn={shiftPlayerTurn} activePlayerSign = {activePlayerSign} winner={winner} />
          </article> 
      <button className="bg-[#b8bdc7] float-right hover:cursor-pointer text-[#1e2446e3] rounded-2xl p-[0.5rem]"
      onClick={handleReset}
      >
        Reset
      </button>
      </main>
    </>
  );
}
export default App
