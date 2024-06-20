import React from 'react'
import vision from '..//..//src/assets/vision.jpg'
const Gateway = () => {
    return (
        <>
            <div className='space-y-5'>
                <h1 className='text-center font-bold text-5xl'>
                    Your Gateway to Professional Excellence
                </h1>
                <p className='text-center poppins'>
                    Unleashing Potential with Innovative Training Solutions for Professionals and Corporations
                </p>

            </div>

            <div className='h-[800px] flex justify-evenly items-center'>
                <div>
                    <img src={vision} alt=""

                        className='w-[700px] h-[600px] rounded-md'
                    />
                </div>

                <div className='flex flex-col space-y-5'>
                    <h2 className='text-2xl font-semibold'>
                        Mission
                    </h2>
                    <p className='w-[400px] text-lg poppins'>
                        Our mission at Capital Bridge is to empower
                        individuals and organizations by providing
                        superior training and development solutions
                        that foster growth, efficiency, and success.
                        We aim to be the trusted partner in your
                        journey towards professional excellence.
                    </p>
                    <h2 className='text-2xl font-semibold'>
                        Vision
                    </h2>
                    <p className='w-[400px] text-lg poppins '>
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