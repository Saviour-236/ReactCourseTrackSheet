import PlayerTemplate from './ReusableComponents/PlayerTemplate'
import './App.css'
import { useState } from "react";
import GameBoard from "./ReusableComponents/GameBoard";

function App() {
  const [boxes,setBoxex] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])
  const shiftPlayerTurn = (sign:string,row:any,col:any) => {
    setBoxex((prevBox:any)=>{
      let newbox = [...prevBox]
      console.log(newbox)
      newbox[row][col] = sign;
      return newbox
    })
   if(sign=="X"){
      setActivePlayerSign('0')
      return
   }
    setActivePlayerSign('X')
  }
  const [activePlayerSign,setActivePlayerSign] = useState('X')
  return (
    <>
      <main className=" min-w-fit relative bg-center bg-contain rounded-2xl w-[80vw] m-auto mt-[3rem] bg-[#eeeeee30] p-[3rem] " >
          <div className="flex justify-around ">
              <PlayerTemplate playerName="suresh" playerSign="0" />
              <PlayerTemplate playerName="suresh" playerSign="X" />
          </div>
          <article className="flex justify-center ">
                <GameBoard boxes={boxes} shiftPlayerTurn={shiftPlayerTurn} activePlayerSign = {activePlayerSign} />
          </article> 
      </main>
    </>
  );
}
export default App
