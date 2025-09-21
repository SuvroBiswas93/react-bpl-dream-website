import React, { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players)
    return (
        <div className='max-w-[1200px] mx-auto my-8'>
            <h1 className='font-extrabold text-2xl'>Available Players : </h1>
        </div>
    );
};

export default AvailablePlayers;