import React from 'react'

import hero2 from '../../src/assets/hero2.jpg'
const Hero = () => {
    return (
        <>
            <div className='flex justify-evenly items-center h-[700px] poppins lg:h-[600px]  '>

                <div className='flex flex-col space-y-5 lg:space-y-3'>
                    <h4 className='text-xl'>
                        Capital Bridge:
                    </h4>
                    <h1 className='font-bold text-5xl lg:text-3xl'>
                        Premier Professional 
                       
                    </h1>
                    <h1 className='font-bold text-5xl lg:text-3xl'>
                        Training and Development
                    </h1>
                    <h1 className='font-bold text-5xl lg:text-3xl'>
                        Solutions
                    </h1>
                    <p className='text-lg w-[600px] lg:w-[450px]'>
                        Empowering Professionals through Comprehensive Training 
                        and Development Solutions
                    </p>

                    <div className='flex gap-x-6'>
                   <button
                   className='bg-green-500 text-white p-4 rounded-md'
                   >
                    Get started Now
                   </button>
                   <button
                   className='border border-black p-4 rounded-md'
                   >
                    View all Services
                   </button>
                </div>
                </div>

                <div>
                    <img src={hero2} alt=""
                        className='w-[600px] h-[450px] lg:w-[400px] lg:h-[350px]'
                    />
                </div>

               
            </div>

        </>
    )
}

export default Hero