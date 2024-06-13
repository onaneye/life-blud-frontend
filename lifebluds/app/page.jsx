'use client'
import { useState } from "react";
import Card from "./Components/Card";
import HeroSection from "./Components/Hero";
import Button from "./Components/Button"

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('')
    const [signInDisabled, setSignInDisabled] = useState(true)

    const handleOptionClick = (option)=>{
      setSelectedOption(option)
      setSignInDisabled(false)
      console.log(option)
    }
  
  return (
    <div className="lg:flex flex-col h-screen">
      <main className="flex flex-grow justify-between flex-col-reverse lg:flex-row lg:h-full">
        {/* Sign up option component cards */}
        <div className="hidden w-full lg:block my-[200px] py-[200px] px-5  lg:w-1/2">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 self-start">Who are you signing up as?</h1>
          <Card handleClick={handleOptionClick}/>
          <Button  />
        </div>
        {/* Hero section */}
        <HeroSection />
      </main>
    </div>
  );
}
