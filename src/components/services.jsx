import React from 'react'
import logo from '../../src/assets/logo.png';


const Services = () => {
    return (
        <>
      
            <div>
                <h1 className='text-4xl text-center font-bold mt-10'>
                    Services
                </h1>

            </div>

            <div className='flex flex-col my-20 space-y-20 lg:my-14 lg:space-y-14'>
                <div className='flex justify-around'>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium'>
                            Professional Training
                        </h4>
                        <p className='text-center'>
                            Tailored programs to enhance
                            individual skills and career growth.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium'>
                            Corporate Training
                        </h4>
                        <p className='text-center'>
                            Tailored training to boost
                            productivity and engagement.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium'>
                        Sales Training
                        </h4>
                        <p className='text-center'>
                        Sales training to boost revenue and 
                        enhance customer relationships.
                        </p>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium text-center'>
                        Manpower Development
                        </h4>
                        <p className='text-center'>
                        Solutions for developing a skilled 
                        and adaptable workforce.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium'>
                        Marketing Training
                        </h4>
                        <p className='text-center'>
                        Training programs focused on modern 
                        marketing strategies and tools.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[250px]  space-y-3'>
                        <img src={logo} alt=""
                            className='h-10 w-10 '
                        />

                        <h4 className='text-2xl font-medium text-center'>
                        Other Professional Training Services
                        </h4>
                        <p className='text-center'>
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