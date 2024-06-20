import React from 'react'

const GetStarted = () => {
  return (
    <>
    <div className='h-[400px] flex justify-around items-center'>
     <div className='bg-white shadow-lg shadow-blue-300 w-[1300px] h-[160px]  px-14 flex justify-between items-center '>
         <div className='flex flex-col space-y-4 '>
            <h4 className='text-green-500 font-bold text-3xl'>
                Get Started Today!
            </h4>

            <p className='text-lg font-medium'>
            Discover How Our Training Programs Can Transform Your Team
            </p>
         </div>

         <div>
            <button className='border border-black py-3 px-8 rounded-md'>
                CONTACT US
            </button>
         </div>
     </div>

    </div>
  
    </>
  )
}

export default GetStarted