import React from 'react'

const Navbar = () => {
  return (
    <div className='container px-4 py-5 my-0 flex justify-between absolute'>
      <img src="./logo.png" alt="" className='ml-4' />
      <button className='button-primary-sm'>Login</button>
    </div>
  )
}

export default Navbar
