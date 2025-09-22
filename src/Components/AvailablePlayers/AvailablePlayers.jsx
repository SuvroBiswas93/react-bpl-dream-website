import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise,setAvailableBalance,availableBalance,purchasedPlayer,setPurchasedPlayer}) => {
    const players = use(playersPromise)
    // console.log(players)
    return (
       
        <div className='max-w-[1200px] mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
            
            {
                players.map((player,id) => <PlayerCard key={id} purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }

             
            
        </div>
        
    );
};

export default AvailablePlayers;