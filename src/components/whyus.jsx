import React from 'react'

const WhyUs = () => {
    return (
        <>
            <div className='lg:my-0 md:my-20 sm:my-6 '>
                <div className='space-y-4'>
                    <h1 className='xl:text-5xl font-bold text-center lg:text-4xl md:text-3xl sm:text-2xl md:px-0 sm:px-2'>
                        Why Choose Capital Bridge?
                    </h1>
                    <p className='text-center lg:text-sm md:text-xs '>
                        Problems trying to resolve the conflict between the two major realms <br className='sm:hidden md:inline-block' />
                        of Classical physics: Newtonian mechanics


                    </p>

                </div>

                <div className='xl:h-[400px] md:flex  md:justify-evenly items-center lg:h-[350px] md:h-[340px]'>

                    <div className='flex flex-col md:space-y-20 sm:space-y-8 md:mx-0 sm:mx-5 md:mt-0 sm:mt-5'>
                        <div className='flex flex-col w-[300px]'>
                            <h4 className='text-2xl text-green-500 font-semibold'>
                                Expertise
                            </h4>

                            <p className=''>
                                Solutions for developing a skilled and
                                adaptable workforce
                            </p>
                        </div>
                        <div className='flex flex-col w-[300px] '>
                            <h4 className='text-2xl text-green-500 font-semibold'>
                                Customization
                            </h4>

                            <p>
                                Solutions for developing a skilled and
                                adaptable workforce
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:space-y-20 sm:space-y-8 md:mx-0 sm:mx-5'>
                        <div className='flex flex-col w-[300px] md:mt-0 sm:mt-8'>
                            <h4 className='text-2xl text-green-500 font-semibold'>
                                Innovation
                            </h4>

                            <p>
                                Solutions for developing a skilled and
                                adaptable workforce
                            </p>
                        </div>
                        <div className='flex flex-col w-[300px]'>
                            <h4 className='text-2xl text-green-500 font-semibold'>
                                Results
                            </h4>

                            <p>
                                Our focus on measurable outcomes
                                ensures that our training programs deliver
                                tangible benefits
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WhyUs