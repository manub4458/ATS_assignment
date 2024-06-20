import React from 'react'
import arrow from '../../src/assets/arrow4.png'
import arrow2 from '../../src/assets/arrow3.png'
import star from '../../src/assets/start.png'
import test1 from '../../src/assets/testimonial2.png'
const Testimonials = () => {
    return (
        <>
            <div className='lg:h-[500px] xl:flex justify-evenly items-center md:flex md:flex-wrap xl:my-0 md:my-10 md:h-[600px] sm:h-[700px]'>
                <div className='space-y-3 '>
                    <h2 className='xl:text-4xl font-semibold lg:text-3xl md:text-center sm:text-2xl sm:text-center'>
                        Feedback About Their

                    </h2>
                    <h2 className='xl:text-4xl font-semibold lg:text-3xl xl:text-start md:text-center sm:text-2xl sm:text-center'>
                        Experience With Us

                    </h2>
                    <p className='xl:w-[350px] leading-7 lg:w-[300px] xl:text-start sm:text-center'>
                        Read testimonials from our satisfied clients. See how
                        our training programs have transformed their careers
                        and organizations
                    </p>

                    <div className='flex gap-x-4 lg:justify-start sm:justify-center'>
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

                <div className='md:flex md:flex-row sm:flex sm:flex-col sm:justify-center border-e-8 border-t-8 md:w-[500px] sm:w-[350px] md:ml-0 sm:ml-10 h-[250px] sm:h-[370px] px-2 space-y-2 items-center justify-center border-green-500 rounded-3xl xl:my-0 md:my-14 sm:my-10 sm:py-3 md:py-0'>
                    <div>
                        <img src={test1} alt=""
                            className='xl:h-[170px] xl:w-[140px] lg:h-[160px] lg:w-[130px] md:h-[200px] md:w-[170px] sm:h-[120px]'
                        />
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <div className='md:flex md:justify-between sm:flex sm:justify-center '>
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
                            <p className='w-[350px] lg:text-base md:text-sm'>
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