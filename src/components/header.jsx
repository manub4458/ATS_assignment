import React from 'react';
import logo from '../../src/assets/logo.png';
const Header = () => {
    return (
        <>
            <div className='flex justify-around items-center h-[120px]'>
                <div>
                    <img src={logo} alt="Logo"
                        className='w-16 h-16'
                    />
                </div>

                <div className='flex gap-x-10 py-4 poppins'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
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