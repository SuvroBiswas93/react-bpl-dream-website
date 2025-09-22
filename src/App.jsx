// import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense, useState } from 'react';

const fetchPlayers = async ()=>{
  const res = await fetch('/Players.json');
  return res.json()
}

function App() {
  const [toggle , setToggle] = useState(true)
  const playersPromise = fetchPlayers()
  return (
    <>
      
      <Navbar></Navbar>
        <div className='flex justify-between items-center mt-4 max-w-[1200px] mx-auto '>
          <h1 className='font-bold text-2xl'>Available Players</h1>
          <div className='font-bold'>
            <button onClick={()=> setToggle(true)} className={`py-2 px-4 border-r-0 border-1 border-gray-400 rounded-l-2xl cursor-pointer ${toggle === true ? "bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=> setToggle(false)} className={`py-2 px-4 border-l-0 border-1 border-gray-400 rounded-r-2xl cursor-pointer ${toggle === false ? "bg-[#E7FE29]":""}`}>Selected<span>(0)</span></button>
          </div>
        </div>

        {
          toggle === true ? <Suspense fallback={<h3 className='font-bold max-w-[1200px] mx-auto'>Players are Loading <span className="loading loading-dots loading-xl"></span></h3>}>
           <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
          </Suspense> : <SelectedPlayers></SelectedPlayers>
        }
      
      
    </>
  )
}

export default App
