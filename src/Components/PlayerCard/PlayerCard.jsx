import React, { useState } from 'react';
import userImg from '../../assets/user.png'
import flagImg from '../../assets/flag.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayerCard = ({player, setAvailableBalance, availableBalance,purchasedPlayer,setPurchasedPlayer}) => {
    const [isSelected, setIsSelected]= useState(false)

    const handleSelectedCard = ()=>{
        const playerPrice = parseInt(player.price)
        if(availableBalance < playerPrice){
           toast('Not Enough Coins!!!')
           return
        }
        if(purchasedPlayer.length === 6){
            toast('You already Bought 6 Players')
            return
        }
         setIsSelected(true)
         setAvailableBalance(availableBalance - player.price )
         setPurchasedPlayer([...purchasedPlayer,player])
    } 
    return (
      
            <div className="card bg-base-100 w-96 shadow-sm p-4 mt-4">
                <figure>
                    <img className='rounded-xl w-full h-[300px] md:h-[450px] object-cover'
                    src={player.img}
                    alt="Shoes" />
                </figure>
                <div className="">
                    <div className='flex items-center gap-2 mt-4'>
                        <img src={userImg} alt="" className='w-4 h-4' />
                        <h2 className="card-title font-bold">{player.name}</h2>
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <img src={flagImg} alt="" className='w-4 h-4' />
                            <p className='text-gray-500'>{player.country}</p>
                        </div>
                        <button className='btn'>{player.type}</button>
                    </div>
                    <hr className=' px-4 mt-4 text-gray-300' />
                    
                    <div className='my-2 flex justify-between'>
                        <p className=' font-bold '>Rating</p>
                        <span className='font-bold'>{player.rating}</span>
                    </div>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='font-bold'>Player Type</p>
                        <p className='text-gray-500'>{player.type}</p>
                    </div>
                    <div className="card-actions flex justify-between">
                        <p className='font-bold'>Price : ${player.price} </p>
                        <button disabled={isSelected} onClick={()=>{handleSelectedCard()}} className="btn ">{isSelected ? 'Selected' : 'Choose Player'}</button>
                    </div>
                </div>
            </div>
       
    );
};

export default PlayerCard;