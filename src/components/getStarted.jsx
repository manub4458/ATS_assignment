import React from 'react'

const GetStarted = () => {
  return (
    <>
      <div className='h-[400px] flex justify-around items-center '>
        <div className='bg-white shadow-lg shadow-blue-300 xl:w-[1300px] md:h-[160px] lg:w-[900px] md:w-[700px] sm:w-[400px] sm:h-[220px]  px-14 md:flex md:justify-between items-center sm:flex sm:flex-wrap'>
          <div className='flex flex-col space-y-4 '>
            <h4 className='text-green-500 font-bold xl:text-3xl md:text-xl'>
              Get Started Today!
            </h4>

            <p className='xl:text-lg font-medium md:text-base'>
              Discover How Our Training Programs Can Transform Your Team
            </p>
          </div>

          <div>
            <button className='border xl:text-base border-black xl:py-3 xl:px-8 rounded-md md:py-2 md:px-3 md:text-sm sm:px-6 sm:py-2'>
              CONTACT US
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default GetStarted