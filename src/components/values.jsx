import React from 'react'
import values2 from '../../src/assets/values2.png'
const Values = () => {
    return (
        <>
                      <div className=' float-end bg-green-600 h-2 w-[380px]'>

</div>
            <div className='h-[800px] w-full flex justify-evenly items-center'>
            
                <div> 
                    <img src={values2} alt=""
                        className='w-[550px] h-[600px]'
                    />
                </div>

                <div className='flex flex-col  space-y-8 '>
                    <h4 className='text-2xl font-medium text-start'>
                        Empower Your Workforce. Drive Business Growt
                    </h4>
                    <p className='text-lg poppins w-[650px] '>
                        Empower your employees with the skills they need to thrive in today's dynamic business
                        landscape. . Our customized programs are tailored to address the specific needs of your
                        organization, ensuring maximum impact and ROI.
                    </p>
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center  space-y-3 w-[300px]'>
                            <img src="" alt="logo" />
                            <h4 className='font-medium text-xl'>
                                Industry Expertise
                            </h4>
                            <p >
                                Our team of experienced professionals possesses deep industry knowledge
                            </p>
                        </div>
                        <div className='flex flex-col justify-center  space-y-3 w-[300px]'>
                            <img src="" alt="logo" />
                            <h4 className='font-medium text-xl'>
                                Client Focus
                            </h4>
                            <p >
                                Your success is our priority.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center  space-y-3 w-[300px]'>
                            <img src="" alt="logo" />
                            <h4 className='font-medium text-xl'>
                                Continuous Improvement
                            </h4>
                            <p >
                                We are committed to delivering the
                                highest quality training
                            </p>
                        </div>
                        <div className='flex flex-col justify-center  space-y-3 w-[300px]'>
                            <img src="" alt="logo" />
                            <h4 className='font-medium text-xl'>
                            Engaging Delivery
                            </h4>
                            <p >
                            We utilize a variety of engaging 
                            learning methodologie
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='  bg-green-600 h-2 w-[380px]'>

</div>
        </>
    )
}

export default Values