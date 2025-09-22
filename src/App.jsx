import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import Navbar from './Components/Navbar/Navbar'
import { Suspense, useState } from 'react';


const fetchPlayers = async ()=>{
  const res = await fetch('/Players.json');
  return res.json()
}
 const playersPromise = fetchPlayers()

function App() {
  const [toggle , setToggle] = useState(true)
  const [availableBalance,setAvailableBalance]=useState(6000000)
  const [purchasedPlayer , setPurchasedPlayer] = useState([])
  // console.log(purchasedPlayer)

  const removePlayer = (p)=>{
    const filteredData = purchasedPlayer.filter(player=>player.name!==p.name)
    setPurchasedPlayer(filteredData)
    setAvailableBalance(availableBalance+p.price)
  }

  return (
    <>
      
      <Navbar availableBalance={availableBalance}></Navbar>
        <div className='flex flex-col md:flex-row md:justify-between items-center mt-4 max-w-[1200px] mx-auto '>
          <h1 className='font-bold text-2xl '>{toggle ? 'Available Balance' : `Selected Player(${purchasedPlayer.length}/6)`}</h1>
          <div className='font-bold mt-2'>
            <button onClick={()=> setToggle(true)} className={`py-2 px-4 border-r-0 border-1 border-gray-400 rounded-l-2xl cursor-pointer ${toggle === true ? "bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=> setToggle(false)} className={`py-2 px-4 border-l-0 border-1 border-gray-400 rounded-r-2xl cursor-pointer ${toggle === false ? "bg-[#E7FE29]":""}`}>Selected<span>({purchasedPlayer.length})</span></button>
          </div>
        </div>

        {
          toggle === true ? <Suspense fallback={<h3 className='font-bold max-w-[1200px] mx-auto'>Players are Loading <span className="loading loading-dots loading-xl"></span></h3>}>
           <AvailablePlayers purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} availableBalance={availableBalance} playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
          </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayers>
        }
      
      
    </>
  )
}

export default App
