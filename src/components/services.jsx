import React from 'react'

import professional from '../../src/assets/professional.png'
import sales from '../../src/assets/sales.png'
import manpower from '../../src/assets/manpower.png'
import other from '../../src/assets/other.png'
import marketing from '../../src/assets/marketing.png'


const Services = () => {
    return (
        <>

            <div>
                <h1 className='text-4xl text-center font-bold mt-10'>
                    Services
                </h1>

            </div>

            <div className='flex flex-col xl:my-20 xl:space-y-20 lg:my-14 lg:space-y-14 md:space-y-10 sm:space-y-10  md:mt-14 sm:mt-12'>
                <div className='md:flex justify-around md:space-y-0 sm:space-y-8 md:px-0 sm:px-4 '>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={professional} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Professional Training
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Tailored programs to enhance
                            individual skills and career growth.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={professional} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Corporate Training
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Tailored training to boost
                            productivity and engagement.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={sales} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Sales Training
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Sales training to boost revenue and
                            enhance customer relationships.
                        </p>
                    </div>
                </div>
                <div className='md:flex justify-around md:space-y-0 sm:space-y-8 md:px-0 sm:px-4'>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={manpower} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Manpower Development
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Solutions for developing a skilled
                            and adaptable workforce.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={marketing} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Marketing Training
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Training programs focused on modern
                            marketing strategies and tools.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center xl:w-[250px]  space-y-3 md:w-[200px]'>
                        <img src={other} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='xl:text-2xl font-medium md:text-center md:text-base'>
                            Other Professional Training Services
                        </h4>
                        <p className='text-center xl:text-base md:text-sm'>
                            Diverse training options to meet
                            specific professional needs.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services