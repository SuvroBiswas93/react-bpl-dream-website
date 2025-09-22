import React from 'react';

const SelectedCard = ({player,removePlayer}) => {
    const handleRemove= ()=>{
        removePlayer(player)
    }
    return (
        <div className='max-w-[1200px] mx-auto mt-4 flex justify-between items-center border-1 border-gray-300 p-3 rounded-xl shadow-sm space-y-3'>
            <div className='flex gap-3 items-center'>
                    <img src={player.img} alt="" className='h-[70px] w-[70px] bg-gray-300 rounded-xl' />
                    <div>
                        <p className='font-bold text-xl'>{player.name}</p>
                        <p className='text-gray-400'>{player.type}</p>
                    </div>
            </div>
            <div onClick={handleRemove}>
                    <img src='https://i.ibb.co.com/zh5DLN7c/Frame.png' alt="" className='cursor-pointer'/>
            </div>
        </div>
    );
};

export default SelectedCard;