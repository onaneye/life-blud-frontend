'use client'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [screen, setScreen]= useState(window.innerWidth)

  useEffect(()=>{
    setScreen(window.innerWidth)
  },[screen])
  return (
    <>
    <div className='flex justify-between w-full px-4 mr-4 items-center py-5 my-0   absolute'>
      <img src="/logo.png" alt="Logo" width={100} height={50} />
      {screen <= 768 ?  <FontAwesomeIcon icon={faBars} size="xl" className='lg:hidden cursor-pointer text-white px-3'/> : <button className='hidden lg:block button-primary-sm'>Login</button>}
      
    </div>
  </>
  );
};

export default Navbar;
