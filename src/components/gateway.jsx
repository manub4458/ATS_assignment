import React from 'react'
import vision from '..//..//src/assets/vision.jpg'
const Gateway = () => {
    return (
        <>
            <div className='xl:space-y-5 md:space-y-3 sm:space-y-2 xl:my-0 md:my-4'>
                <h1 className='text-center font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl md:mt-10 sm:mt-10'>
                    Your Gateway to Professional Excellence
                </h1>
                <p className='text-center poppins lg:text-sm md:text-xs sm:text-sm'>
                    Unleashing Potential with Innovative Training Solutions for Professionals and Corporations
                </p>

            </div>

            <div className='xl:h-[800px] xl:flex justify-evenly items-center lg:h-[600px] md:flex md:flex-wrap'>
                <div className='xl:my-0 md:my-8 sm:my-10 md:flex sm:flex sm:justify-center'>
                    <img src={vision} alt=""

                        className='xl:w-[700px] xl:h-[600px] rounded-md lg:w-[500px] lg:h-[500px] xl:mx-0 md:w-[720px] sm:w-[380px]'
                    />
                </div>

                <div className='flex flex-col space-y-5'>
                    <h2 className='text-2xl font-semibold xl:mx-0 md:mx-6 sm:mx-5'>
                        Mission
                    </h2>
                    <p className='xl:w-[400px] xl:text-lg poppins lg:w-[380px] lg:text-base md:w-[100vw] lg:px-0 md:px-6 sm:px-5'>
                        Our mission at Capital Bridge is to empower
                        individuals and organizations by providing
                        superior training and development solutions
                        that foster growth, efficiency, and success.
                        We aim to be the trusted partner in your
                        journey towards professional excellence.
                    </p>
                    <h2 className='text-2xl font-semibold lg:mx-0 md:mx-6 sm:mx-5'>
                        Vision
                    </h2>
                    <p className='xl:w-[400px] xl:text-lg poppins lg:w-[380px] lg:text-base lg:px-0 md:px-6 sm:px-5'>

                        Our vision is to become the leading provider
                        of professional training services globally,
                        recognized for our commitment to quality,
                        innovation, and measurable results. We
                        strive to create a world where continuous
                        learning and development are integral to
                        achieving personal and organizational goals.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Gateway