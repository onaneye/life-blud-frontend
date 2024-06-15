'use client';
import React from 'react';

const VerifyEmailComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
        <img src="/icons/checkEmail.png" alt=""  className='mb-3'/>
      <h2 className="text-3xl mb-4 font-gilroy">Check Your Email</h2>
      <p className="text-lg mb-4 text-center font-helvetica">We have sent a verification email to </p>
      <p className="text-sm text-center text-red-800 font-helvetica"> On****@gmail.com</p>
      <div className='mt-4'> 
        <p className='text-md text-center font-helvetica'>Didn't recieve the email? <span className='text-red-900 cursor-pointer' >Click to resend it</span></p>
        <p className='text-sm text-center mt-5 font-normal font-helvetica text-gray-500 cursor-pointer'>Back to sign up</p>
      </div>
    </div>
  );
};

export default VerifyEmailComponent;
