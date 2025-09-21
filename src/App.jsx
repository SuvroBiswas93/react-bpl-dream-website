// import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense } from 'react';

const fetchPlayers = async ()=>{
  const res = await fetch('/Players.json');
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()
  return (
    <>
      
      <Navbar></Navbar>
      <Suspense fallback={<h3 className='font-bold max-w-[1200px] mx-auto'>Players are Loading <span className="loading loading-dots loading-xl"></span></h3>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
