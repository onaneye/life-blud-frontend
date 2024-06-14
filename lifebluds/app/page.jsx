'use client'
import {useState} from "react";
import { ToggleBorderProvider } from '../app/Components/Contex';
import Card from "./Components/Card";
import HeroSection from "./Components/Hero";
import Button from "./Components/Button"

// const CardContext = createContext() 

// export const useCardToggle =()=>{
//   return useContext(CardContext)
// }

export default function Home({children}) {
  
  return (
   
    <div className="lg:flex flex-col h-screen">
      <main className="flex flex-grow justify-between flex-col-reverse lg:flex-row lg:h-full">
        {/* Sign up option component cards */}
        <div className="hidden w-full lg:block my-[200px] py-[200px] px-5  lg:w-1/2">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 self-start">Who are you signing up as?</h1>
          <ToggleBorderProvider>
            <Card />
            <Button />
          </ToggleBorderProvider>
        </div>
        {/* Hero section */}
        <HeroSection />
      </main>
    </div>
  );
}
