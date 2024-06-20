import React from 'react'
import values2 from '../../src/assets/value3.png'
import industry from '../../src/assets/industry.png'
import client from '../../src/assets/client.png'
import continous from '../../src/assets/continous.png'
import engage from '../../src/assets/engage.png'
const Values = () => {
    return (
        <>
                      <div className=' float-end lg:float-end bg-green-600 md:inline-block sm:hidden h-2 w-[380px]'>

</div>
            <div className='xl:h-[800px] w-full xl:flex xl:justify-evenly items-center lg:justify-between lg:h-[700px] md:h-[1200px] sm:h-[1100px] md:flex md:flex-wrap md:justify-center'>
            
                <div className='flex md:justify-start sm:justify-center '> 
                    <img src={values2} alt=""
                        className='xl:w-[550px] xl:h-[600px] lg:w-[340px] lg:h-[450px] md:w-[500px] md:h-[550px] sm:w-[300px] sm:h-[320px]'
                    />
                </div>

                <div className='flex flex-col  xl:space-y-8 lg:space-y-4 xl:mx-0 md:mx-10 md:space-y-3 sm:mx-5 md:mt-0 sm:mt-5 '>
                    <h4 className='xl:text-2xl font-medium text-start lg:text-xl md:text-2xl sm:text-xl'>
                        Empower Your Workforce. Drive Business Growt
                    </h4>
                    <p className='xl:text-lg poppins xl:w-[650px] lg:w-[400px] lg:text-base '>
                        Empower your employees with the skills they need to thrive in today's dynamic business
                        landscape. . Our customized programs are tailored to address the specific needs of your
                        organization, ensuring maximum impact and ROI.
                    </p>
                    <div className='md:flex md:flex-row md:justify-between sm:flex sm:flex-col md:mt-0 sm:mt-4 sm:justify-center md:gap-x-0 sm:gap-x-4 '>
                        <div className='flex flex-col justify-center  space-y-3 md:w-[300px] sm:w-[100vw]'>
                            <img src={industry} alt="logo"
                            className='h-8 w-8'
                            />
                            <h4 className='font-medium xl:text-xl md:text-base'>
                                Industry Expertise
                            </h4>
                            <p className='xl:text-base md:text-sm' >
                                Our team of experienced professionals possesses deep industry knowledge
                            </p>
                        </div>
                        <div className='flex flex-col   space-y-3 md:w-[300px] sm:w-[100vw]'>
                            <img src={client} alt="logo" 
                            className='h-8 w-8'
                            
                            />
                            <h4 className='font-medium xl:text-xl md:text-base'>
                                Client Focus
                            </h4>
                            <p className='xl:text-base md:text-sm' >
                                Your success is our priority.
                            </p>
                        </div>
                    </div>
                    <div className='md:flex md:flex-row md:justify-between sm:flex md:mt-0 sm:mt-4 sm:flex-col sm:justify-center md:gap-x-0 sm:gap-x-4'>
                        <div className='flex flex-col   space-y-3 md:w-[300px] sm:w-[100vw] '>
                            <img src={continous} alt="logo"
                            className='h-8 w-8'
                            
                            />
                            <h4 className='font-medium xl:text-xl md:text-base'>
                                Continuous Improvement
                            </h4>
                            <p className='xl:text-base md:text-sm'>
                                We are committed to delivering the
                                highest quality training
                            </p>
                        </div>
                        <div className='flex flex-col   space-y-3 md:w-[300px] sm:w-[100vw]'>
                            <img src={engage} alt="logo" 
                            className='h-8 w-8'
                            
                            />
                            <h4 className='font-medium xl:text-xl md:text-base'>
                            Engaging Delivery
                            </h4>
                            <p className='xl:text-base md:text-sm'>
                            We utilize a variety of engaging 
                            learning methodologie
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='  bg-green-600 h-2 w-[380px] sm:hidden md:inline-block'>

</div>
        </>
    )
}

export default Values