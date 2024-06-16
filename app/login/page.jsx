import React from 'react'
import Logincomponent from '../Components/Logincomponent'
import HeroSection from '../Components/Hero'

const page = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <Logincomponent/>
        <HeroSection/>
    </div>
  )
}

export default page
