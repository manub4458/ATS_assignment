import React from 'react'
import about1 from '../../src/assets/abou1.jpg'
import about2 from '../../src/assets/about2.jpg'


const About = () => {
    return (
        <>
            <div className='flex justify-evenly items-center h-[600px]'>
                <div className='flex '>
                    <img src={about2} alt="" className='w-[250px] h-[280px] translate-x-28 mt-36 border-e-8 border-t-8 border-white rounded-3xl' />
                    <img src={about1} alt="" className='w-[380px] h-[380px] border-e-8 border-t-8 border-green-500 rounded-3xl' />

                </div>

                <div className='flex flex-col space-y-4'>
                    <h4 className='text-xl'>
                        Capital Bridge
                    </h4>
                    <h1 className='font-bold text-5xl'>
                        About Us

                    </h1>
                    <p className='leading-9 w-[560px] text-xl'>
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
                        className='bg-green-500 text-white py-4 px-8 w-max rounded-md'
                    >
                        Get a quote
                    </button>
                </div>
            </div>

        </>
    )
}

export default About