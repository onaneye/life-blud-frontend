import Link from 'next/link'
import React from 'react'

const Logincomponent = () => {
  return (
    <div className='container mx-auto p-4 w-full flex items-center justify-start'>
     <div className='px-3 w-full flex flex-col mx-5'>
        <h1 className="text-xl lg:text-2xl my-4 py-4 text-start font-gilroy">Login in</h1>
        <div className=''>
        <form action="">
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-helvetica">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email" 
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 mb-2 font-helvetica">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border border-gray-300"
                    required
                  />
                  <p className='text-red-800 text-end py-4 font-helvetica'>Forgot password?</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-800 text-white p-3  hover:bg-red-700 transition duration-300"
                >
                  Submit
                </button>
                <div className='flex justify-between items-center'>
                <p className='text-md py-3 '>New here? <span className='text-red-800 cursor-pointer'><Link href="/">Sign up</Link></span> </p>
                <p className='text-md py-3 text-red-800 cursor-pointer'>Sign in as a Medical Facility</p>   
                </div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Logincomponent
