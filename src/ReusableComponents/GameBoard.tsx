export default function GameBoard({ boxes }: { boxes: any }) {
    console.log("boxes", boxes);
    return (
        <>
            {
                boxes.map((row: any, rowIndex: any) => { // Renamed index to rowIndex for clarity
                    return (
                        <ul key={rowIndex}> {
                            /* Key is important for React's reconciliation */}
                            {
                                row.map((box: any, boxIndex: any) => { 
                                    // Renamed index to boxIndex
                                    return (
                                        <li key={boxIndex} className="border border-[#b8bdc7] rounded-2xl p-[1rem] text-[#b8bdc7] bg-[#1e2446e3] text-2xl">
                                            {/* hlooooo */} {/* Placeholder text - replace with box content */}
                                            {box} {/* Display the content of the box */}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }
        </>
    )
}