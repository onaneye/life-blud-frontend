// file: src/pages/index.jsx
'use client';

import React from 'react';
import { ToggleBorderProvider } from './Components/Contex'; // Ensure correct path
import Card from "./Components/Card";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";

export default function Home() {
  return (
    <ToggleBorderProvider>
      <div className="lg:flex flex-col h-screen">
        <Navbar />
        <main className="flex flex-grow justify-between flex-col-reverse lg:flex-row lg:h-full">
          {/* Sign up option component cards */}
          <div className="hidden w-full lg:block my-auto py-[200px] px-5 lg:w-1/2">
            <h1 className="text-xl lg:text-2xl my-4 py-4 self-start font-gilroy-medium">Who are you signing up as?</h1>
            <Card />
            <Button />
          </div>
          {/* Hero section */}
          <HeroSection />
        </main>
      </div>
    </ToggleBorderProvider>
  );
}
