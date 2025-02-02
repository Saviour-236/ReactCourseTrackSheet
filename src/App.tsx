import bgImage from "./assets/background.jpg"
import PlayerTemplate from './ReusableComponents/PlayerTemplate'
import './App.css'


function App() {
  return (
    <>
      <main className="h-[80vh] bg-center bg-contain rounded-2xl w-[80vw] m-auto mt-[3rem]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex gapx-[-3rem] justify-around ">
          <PlayerTemplate playerName="suresh" playerSign="0" />
          <PlayerTemplate playerName="suresh" playerSign="X" />
        </div>

      </main>
    </>
  );
}
export default App
