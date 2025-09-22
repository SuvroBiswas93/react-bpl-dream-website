import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise}) => {
    const players = use(playersPromise)
    console.log(players)
    return (
       
        <div className='max-w-[1200px] mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
            
            {
                players.map(player => <PlayerCard player={player}></PlayerCard>)
            }

             
            
        </div>
        
    );
};

export default AvailablePlayers;