import React from 'react'
import call from '../../src/assets/call.png'
import email from '../../src/assets/email2.png'
import address from '../../src/assets/address.png'
const Contact = () => {
  return (
    <>
    <div className='h-[600px] flex justify-evenly items-center lg:justify-around'>
   <div className='flex flex-col space-y-12'>
    <div>
        <h2 className='text-3xl font-semibold'>
            Find us
        </h2>
    </div>
    <div className='space-y-10'>
        <div className='flex gap-x-2'>
             <button className='bg-green-400 rounded-full p-4'>
                <img src={call} alt=""
                className='h-6 w-6'
                />
             </button>
             <div className='flex flex-col'>
               <p className='font-semibold'>
                Call us
               </p>
               <p >
                +(08) 255 201 888
               </p>
             </div>
        </div>
        <div className='flex gap-x-2'>
             <button className='bg-green-400 rounded-full p-4'>
                <img src={email} alt=""
                className='h-6 w-6'
                />
             </button>
             <div className='flex flex-col'>
               <p className='font-semibold'>
                Email Now
               </p>
               <p >
               Hello@procleaning.com
               </p>
             </div>
        </div>
        <div className='flex gap-x-2'>
             <button className='bg-green-400 rounded-full p-4'>
                <img src={address} alt=""
                className='h-6 w-6'
                />
             </button>
             <div className='flex flex-col'>
               <p className='font-semibold'>
                Address
               </p>
               <p >
               7510, Brand Tower, New York, USA
               </p>
             </div>
        </div>
    </div>
   </div>

   <div className='space-y-5'>
    <p>
        Contact Info
    </p>
    <h1 className='text-4xl font-semibold'>
        Keep In Touch
    </h1>
    <p className='w-[500px] lg:w-[400px]'>
    We prioritize responding to your inquiries promptly to ensure you

receive the assistance you need in a timely manner
    </p>
    <form action=""
    className='flex flex-col space-y-7'
    >
       <input type="text"
       id='name'
       name='name'
       placeholder='Name'
       className='placeholder:text-black px-6 py-2 outline-none border  '
       />
        <input type="email"
       id='email'
       name='email'
       placeholder='Email'
       className='placeholder:text-black px-6 py-2 outline-none border  '
       />
       <textarea name="message" id="message"
       placeholder='Message'
       className='placeholder:text-black px-6 py-2 outline-none border  '
       
       >

        
       </textarea>
      <button className='bg-green-500 text-white p-3 w-max rounded-md'
      type='submit'
      >
        Send Message
      </button>
    </form>
   </div>
    </div>
    <div className='w-full h-1 bg-black'>

</div>
    </>
  )
}

export default Contact