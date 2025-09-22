import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/Currency.png'
const Navbar = ({availableBalance}) => {
    return (
        <div className='sticky top-0 z-1 bg-white'>
            <div className="navbar max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className='w-13 h-13'/>
          </div>
          <div className="flex items-center gap-10">
            <div className='flex items-center '>
              <ul className='hidden md:flex md:items-center md:gap-6 font-bold'>
                <li>Home</li>
                <li>Fixtures</li>
                <li>Teams</li>
                <li>Schedules</li>
              </ul>
            </div>
            <div className='flex items-center gap-1 cursor-pointer'>
               <span className='font-bold'>{availableBalance}</span>
              <span className=''>Coin</span>
              <img src={coin} alt="" className='w-5 h-5' />
            </div>
          </div>
            </div>
        </div>
    );
};

export default Navbar;