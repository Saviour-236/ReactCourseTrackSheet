import { useState } from "react";



export default function PlayerTemplate( {playerName ="Plyer" , playerSign} : {playerName: string, playerSign: string}) {
    const [newPlayerName, setNewPlayerName] = useState(playerName);

        const [edit, setEdit] = useState(false);
        function handleEdit(){
            setEdit(()=>!edit)
        }
            return(
                <div className="flex gap-x-[2rem] border rounded-2xl p-[0.5rem] mt-[0.5rem]  text-[#b8bdc7] bg-[#1e2446e3] te" >
                    {edit ? <input type="text" placeholder="Enter Player Name" value={newPlayerName} onChange={(e)=> setNewPlayerName(e.target.value) }/> : <h1 className="text-2xl "> {newPlayerName} </h1>}
                    <h1 className="text-2xl ">{playerSign}</h1>
                    <button className="bg-[#b8bdc7] hover:cursor-pointer text-[#1e2446e3] rounded-2xl p-[0.5rem]" onClick={handleEdit}>{  edit? "save":"Edit" }</button>
                </div>
            )
}