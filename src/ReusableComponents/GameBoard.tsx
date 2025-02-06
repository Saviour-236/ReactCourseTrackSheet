import X from '../assets/letter-x.png'
import O from '../assets/letter-o.png'
export default function GameBoard({ boxes ,shiftPlayerTurn ,activePlayerSign,}: { boxes: any,shiftPlayerTurn:any,activePlayerSign :any }) {
console.log(activePlayerSign)
    return (
        <ul className="border w-fit p-[1rem]  rounded-xl mt-[2.2rem] space-y-[2rem] bg-[#000000]">
            {
                boxes.map((row:any, rowIndex:any) => {
                   return <li key={rowIndex} className="flex space-x-[2rem] "> {/* Important: Add a key when mapping */}
                        {row.map((col:any, colIndex:any) => {
                            console.log(row,col)
                            return <button 
                            onClick={()=>shiftPlayerTurn(activePlayerSign,rowIndex,colIndex)}
                            key={colIndex} 
                            className="border rounded-2xl min-h-[6rem] min-w-[6rem] cursor-pointer bg-[#96717147] flex justify-center items-center p-[1rem]"> {/* Important: Add a key when mapping */}
                               {col && <img src={activePlayerSign === "X" ? X : O }  className='h-[5rem]' alt="Plyaer X sign " /> }
                               {/* */}
                            </button>
                        })}
                    </li>
})
            }
        </ul>
    );
}