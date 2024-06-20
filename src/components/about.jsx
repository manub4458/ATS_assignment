import React from 'react'
import about1 from '../../src/assets/abou1.jpg'
import about2 from '../../src/assets/about2.jpg'


const About = () => {
    return (
        <>
            <div className='xl:flex  justify-evenly items-center xl:h-[600px] lg:w-full lg:h-[500px] md:flex md:flex-wrap'>
                <div className='flex md:justify-start sm:justify-center'>
                    <img src={about2} alt="" className='xl:w-[250px] xl:h-[280px] lg:w-[150px] lg:h-[180px] md:w-[600px] md:mx-4  sm:w-[400px]  xl:translate-x-28 lg:translate-x-24 md:mt-0 lg:mt-28  xl:mt-36 border-e-8 border-t-8 border-white rounded-3xl' />
                    <img src={about1} alt="" className='xl:w-[380px] xl:h-[380px] lg:w-[200px] lg:h-[220px] xl:inline-block lg:inline-block md:hidden sm:hidden md:h-[110px] border-e-8 border-t-8 border-green-500 rounded-3xl' />

                </div>

                <div className='flex flex-col xl:space-y-4 lg:space-y-3 md:space-y-4 sm:space-y-3 '>
                    <h4 className='xl:text-xl lg:text-lg xl:px-0 lg:px-0 md:px-4 xl:mt-0 md:mt-4 xl:text-start lg:text-start md:text-center sm:text-center sm:text-lg'>
                        Capital Bridge
                    </h4>
                    <h1 className='font-bold xl:text-5xl lg:text-4xl xl:px-0 lg:px-0 md:px-4 md:text-xl sm:px-4'>
                        About Us

                    </h1>
                    <p className='xl:leading-9 xl:w-[560px] xl:text-xl lg:w-[500px] lg:text-base md:w-[100vw] xl:px-0 lg:px-0 md:px-4 md:text-start md:leading-7 sm:px-4'>
                        At Capital Bridge, we believe that the cornerstone of success lies in
                        continuous professional development. Our mission is to bridge the
                        gap between potential and performance by offering cutting edge
                        training solutions tailored for professionals, corporations, and sales
                        teams. With a focus on innovation, expertise, and results, we are
                        committed to transforming your workforce into a dynamic and
                        highly skilled team ready to meet the challenges of today's
                        competitive market.
                    </p>
                    <button
                        className='bg-green-500 text-white xl:py-4 xl:px-8 xl:text-base w-max rounded-md xl:ml-0 lg:ml-0 md:ml-4 sm:ml-4 md:px-4 md:py-2 md:text-sm sm:px-2 sm:py-2'
                    >
                        Get a quote
                    </button>
                </div>
            </div>

        </>
    )
}

export default About