import React from 'react'

import hero2 from '../../src/assets/hero2.jpg'
const Hero = () => {
    return (
        <>
            <div className='md:flex md:flex-row justify-evenly md:items-center xl:h-[700px] poppins lg:h-[600px] md:h-[600px] sm:h-[700px] sm:flex sm:flex-col sm:items-baseline  '>

                <div className='flex flex-col xl:space-y-5 lg:space-y-3 md:space-y-2 sm:space-y-1'>
                    <h4 className='lg:text-xl md:text-lg md:text-start sm:text-center sm:text-2xl' >
                        Capital Bridge:
                    </h4>
                    <h1 className='font-bold xl:text-5xl lg:text-3xl md:text-xl md:text-start sm:text-center sm:text-2xl  '>
                        Premier Professional

                    </h1>
                    <h1 className='font-bold xl:text-5xl lg:text-3xl md:text-xl md:text-start sm:text-center sm:text-2xl'>
                        Training and Development
                    </h1>
                    <h1 className='font-bold xl:text-5xl lg:text-3xl md:text-xl md:text-start sm:text-center sm:text-2xl'>
                        Solutions
                    </h1>
                    <p className='xl:text-lg xl:w-[600px] lg:w-[450px] md:w-[300px] md:text-base md:text-start sm:text-center '>
                        Empowering Professionals through Comprehensive Training
                        and Development Solutions
                    </p>

                    <div className='flex gap-x-6 md:justify-start sm:justify-center '>
                        <button
                            className='bg-green-500 lg:text-base text-white xl:p-4 md:mt-0 sm:mt-4 rounded-md md:p-2 md:text-sm  sm:text-xs sm:p-2'
                        >
                            Get started Now
                        </button>
                       <a href="#services">
                       <button
                            className='border border-black lg:text-base xl:p-4 rounded-md md:mt-0 sm:mt-4 md:p-2 md:text-sm sm:text-xs sm:p-2'
                        >
                            View all Services
                        </button>
                       </a>
                    </div>
                </div>

                <div>
                    <img src={hero2} alt=""
                        className='xl:w-[600px] xl:h-[450px]  lg:w-[400px] lg:h-[350px] md:w-[280px] md:h-[320px] sm:w-[500px]'
                    />
                </div>


            </div>

        </>
    )
}

export default Hero