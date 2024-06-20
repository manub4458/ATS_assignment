import React, { useState } from 'react';
import logo from '../../src/assets/logo.png';
const Header = () => {
    const [active, setActive] = useState('Home');
    const [hover, setHover] = useState('');
  
    const handleMouseEnter = (option) => {
      setHover(option);
    };
  
    const handleMouseLeave = () => {
      setHover('');
    };
  
    const handleClick = (option) => {
      setActive(option);
    };
    return (
        <>
            <div className='flex justify-around items-center h-[120px]'>
                <div>
                    <img src={logo} alt="Logo"
                        className='w-20 h-20'
                    />
                </div>

                <div className='flex gap-x-10 py-4 poppins'>
                    {/* <li>Home</li>
                    <li>Services</li>
                    <li>About us</li> */}
                     <ul className='flex gap-x-10 py-4 font-poppins'>
        {['Home', 'Services', 'About us'].map((option) => (
          <li
            key={option}
            className={`list-none cursor-pointer ${option === active || option === hover ? 'text-green-700' : ''}`}
            onClick={() => handleClick(option)}
            onMouseEnter={() => handleMouseEnter(option)}
            onMouseLeave={handleMouseLeave}
          >
            {option}
          </li>
        ))}
      </ul>
                </div>

                <div>
                    <button
                        className='border-2 border-green-700 py-3 px-10 rounded-md poppins'
                    >
                        Contact us
                    </button>
                </div>
            </div>

        </>
    )
}

export default Header