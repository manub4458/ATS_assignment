import React from 'react'
import arrow from '../../src/assets/arrow4.png'
import arrow2 from '../../src/assets/arrow3.png'
import star from '../../src/assets/start.png'
import test1 from '../../src/assets/testimonial2.png'
const Testimonials = () => {
    return (
        <>
            <div className='h-[500px] flex justify-evenly items-center'>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-semibold'>
                        Feedback About Their

                    </h2>
                    <h2 className='text-4xl font-semibold'>
                        Experience With Us

                    </h2>
                    <p className='w-[350px] leading-7'>
                        Read testimonials from our satisfied clients. See how
                        our training programs have transformed their careers
                        and organizations
                    </p>

                    <div className='flex gap-x-4'>
                        <button className='border border-green-400 p-3 rounded-md'>
                            <img src={arrow} alt=""
                                className='h-6 w-6 text-green-700'
                            />
                        </button>
                        <button className='bg-green-500 p-3 rounded-md'>
                            <img src={arrow2} alt=""
                                className='h-6 w-6 text-green-700'
                            />
                        </button>
                    </div>
                </div>

                <div className='flex border-e-8 border-t-8 w-[500px] h-[250px] px-2 space-y-2 items-center justify-center border-green-500 rounded-3xl'>
                    <div>
                        <img src={test1} alt=""
                            className='h-[170px] w-[140px]'
                        />
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col '>
                                <h4 className='text-lg font-semibold'>
                                    Robert Fox
                                </h4>
                                <p>
                                    Business Man
                                </p>
                                <div className='flex '>
                                    <img src={star} alt="" className='h-4 w-4' />
                                    <img src={star} alt="" className='h-4 w-4' />
                                    <img src={star} alt="" className='h-4 w-4' />
                                    <img src={star} alt="" className='h-4 w-4' />
                                    <img src={star} alt="" className='h-4 w-4' />
                                </div>

                            </div>
                        </div>

                        <div>
                            <p className='w-[350px] '>
                                Excellent service! The team was punctual,
                                thorough, and left my home sparkling clean.
                                Highly recommend for anyone needing a
                                reliable and detailed cleaning servic
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Testimonials