import React from 'react'
import logo from '../../src/assets/logo.png'
import facebook from '../../src/assets/facebook.png'
import linkedin from '../../src/assets/linkedIn.png'
import twitter from '../../src/assets/twitter.png'
import insta from '../../src/assets/insta.png'

const Footer = () => {
    return (
        <>
            <div className='lg:h-[500px] lg:flex xl:justify-around  lg:items-center lg:justify-evenly md:flex md:items-center md:flex-wrap sm:flex sm:flex-wrap sm:justify-center md:h-[800px] md:justify-evenly sm:h-[900px] lg:gap-x-0 md:gap-x-10 sm:gap-x-10 lg:mx-0 md:mx-10 ' >
                <div className='space-y-6 sm:flex sm:flex-col sm:justify-center md:items-start sm:items-center'>
                    <img src={logo} alt=""
                        className='h-[80px] w-[80px]'
                    />
                    <p className='xl:w-[340px] lg:w-[200px] md:w-[200px] sm:w-[100vw] md:px-0 sm:px-10'>
                        Nam posuere accumsan porta. Integer id
                        orci sed ante tincidunt tincidunt sit amet
                        sed libero
                    </p>
                    <p>
                        © Capital Bridge 2020
                    </p>
                </div>

                <div className='space-y-6 '>
                    <h4
                        className='text-blue-900 xl:text-2xl font-semibold lg:text-xl '
                    >
                        COMPANY
                    </h4>
                    <div className='space-y-4'>
                        <li>Donec dignissim</li>
                        <li>Curabitur egestas</li>
                        <li>Nam posuere</li>
                        <li>Aenean facilisis</li>
                    </div>
                </div>
                <div className='space-y-6'>
                    <h4
                        className='text-blue-900 xl:text-2xl font-semibold lg:text-xl'
                    >
                        SERVICES
                    </h4>
                    <div className='space-y-4'>
                        <li>Cras convallis</li>
                        <li>Vestibulum faucibus</li>
                        <li>Quisque lacinia purus</li>
                        <li>Aliquam nec ex</li>
                    </div>
                </div>

                <div className='space-y-6'>
                    <h4
                        className='text-blue-900 xl:text-2xl font-semibold lg:text-xl'
                    >
                        RESOURCES
                    </h4>
                    <div className='space-y-4'>
                        <li>Suspendisse porttitor</li>
                        <li>Nam posuere</li>
                        <li>Curabitur egestas </li>
                        <li></li>
                    </div>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className='flex gap-x-2'>
                        <img src={facebook} alt="" className='h-[40px] w-[40px]' />
                        <img src={linkedin} alt="" className='h-[40px] w-[40px]' />
                        <img src={twitter} alt="" className='h-[40px] w-[40px]' />
                        <img src={insta} alt="" className='h-[40px] w-[40px]' />
                    </div>
                    <div>

                        <select name="" id=""
                            className='w-full py-2 px-2 justify-around rounded-lg  border border-black'
                        >
                            <option value="">English- EN</option>
                            <option value="">Hindi- HI</option>

                        </select>

                    </div>
                </div>




            </div>
        </>
    )
}

export default Footer