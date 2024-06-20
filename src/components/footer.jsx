import React from 'react'
import logo from '../../src/assets/logo.png'
import facebook from '../../src/assets/facebook.png'
import linkedin from '../../src/assets/linkedIn.png'
import twitter from '../../src/assets/twitter.png'
import insta from '../../src/assets/insta.png'

const Footer = () => {
    return (
        <>
            <div className='h-[500px] flex justify-around items-center lg:justify-evenly' >
                <div className='space-y-6'>
                    <img src={logo} alt=""
                        className='h-[80px] w-[80px]'
                    />
                    <p className='w-[340px] lg:w-[200px]'>
                        Nam posuere accumsan porta. Integer id
                        orci sed ante tincidunt tincidunt sit amet
                        sed libero
                    </p>
                    <p>
                        © Capital Bridge 2020
                    </p>
                </div>

                <div className='space-y-6'>
                    <h4
                    className='text-blue-900 text-2xl font-semibold lg:text-xl'
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
                    className='text-blue-900 text-2xl font-semibold lg:text-xl'
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
                    className='text-blue-900 text-2xl font-semibold lg:text-xl'
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
                    <img src={twitter} alt=""  className='h-[40px] w-[40px]' />
                    <img src={insta} alt=""  className='h-[40px] w-[40px]' />
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