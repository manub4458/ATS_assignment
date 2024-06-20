import React, { useState } from 'react'
import logo from '../../src/assets/logo.png'

const Mobnav = () => {
    const [nav, setNav] = useState(false);

    return (
        <>
            <div className='overflow-x-hidden'>

                <div className=' w-[100vw] px-4 sm:flex  items-center sm:justify-between'>
                    <div>
                        <img src={logo} alt=""
                            className='h-14 w-14'
                        />
                    </div>



                    <div>
                        <button
                            onClick={() => setNav(!nav)}
                            className='z-[999999999] text-2xl select-none rotate-90 sm:mr-[1rem] text-black focus:outline-none  py-4'
                        >
                            |||
                        </button>
                    </div>
                </div>

                <div
                    className={` ${nav ? "top-0 right-0" : "top-0 right-[-100vw]"
                        } transition-all duration-[400ms] ease-in-out fixed bg-[#333333] blurry_bg w-[100%] sm:w-[100%] h-screen  z-[999]`}>
                    <div className="">
                        <button
                            onClick={() => setNav(!nav)}
                            className="absolute top-12 right-12 text-3xl text-white giga ">
                            X
                        </button>
                        <img src={logo} alt=""

                            className="absolute top-[7%] left-28 sm:left-8 h-14 rounded-full w-14 "

                        />

                        <ul className="mt-[13rem] giga ml-[6rem] sm:ml-[4rem] text-black">
                            <div className="md:ml-[1rem] scale-[0.7] z-[999999999]">

                            </div>

                            <li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
                                <li>Home</li>
                            </li>
                            <li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
                                <li>Contact Us</li>
                            </li>
                            <li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
                                <li>About Us</li>
                            </li>
                            <li className="my-[2.5rem] tracking-[-1px] text-xl text-[#cbcbcb] ">
                                <li>Services</li>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobnav