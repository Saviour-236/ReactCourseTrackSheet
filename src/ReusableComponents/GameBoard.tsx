import X from '../assets/letter-x.png'
import O from '../assets/letter-o.png'
export default function GameBoard({ boxes ,shiftPlayerTurn ,activePlayerSign,winner}: { boxes: any,shiftPlayerTurn:any,activePlayerSign :any,winner:string|null }) {
    return (
        
        <>
        {winner === null ? (
          <ul className="border w-fit p-[1rem] rounded-xl mt-[2.2rem] space-y-[2rem] bg-[#000000]">
            {boxes.map((row:any, rowIndex:any) => (
              <li key={rowIndex} className="flex space-x-[2rem]">
                {row.map((col:any, colIndex:any) => (
                  <button
                    key={colIndex}
                    onClick={() => shiftPlayerTurn(activePlayerSign,rowIndex, colIndex)} // No need for activePlayerSign here
                    className="border rounded-2xl min-h-[6rem] min-w-[6rem] cursor-pointer bg-[#96717147] flex justify-center items-center p-[1rem]"
                  >
                    {col && <img src={col === 'X' ? X : O} className='h-[5rem]' alt={col === 'X' ? "Player X sign" : "Player O sign"} /> } {/* Add alt text */}
                  </button>
                ))}
              </li>
            ))}
          </ul>
        ) : winner === "Draw" ? (
          <h1 className="text-4xl text-[#b8bdc7] mt-[2rem]">Match Draw</h1>
        ) : (
          <h1 className="text-4xl text-[#b8bdc7] mt-[2rem]">{winner} is winner</h1>
        )}
      </>
    );
}