// file: src/components/Button.jsx
'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToggleBorder } from './Contex'; // Adjust path as needed

const Button = () => {
  const router = useRouter();
  const { activeCard, cardValue } = useToggleBorder();

  const handleSignUp = () => {
    // Handle sign up logic based on cardValue
    switch (cardValue) {
      case 'Medical Facility':
        router.push('medical-facility-registration');
        break;
      case 'Blood Donor':
        router.push('blood-donor-registration');
        break;
      default:
        console.log('Please select an option.');
        break;
    }
  };

  return (
    <div className="my-5 mx-1 w-full">
      <button 
        className={`button-secondary-lg ${activeCard !== null ? 'bg-red-800' : 'disabled'}`} 
        onClick={handleSignUp}
        disabled={!cardValue}
      >
        Sign up
      </button>
      <p className="font-bold text-center py-5">
        Already have an account? <span className="text-red-800"><Link href="/login">Login</Link></span>
      </p>
    </div>
  );
};

export default Button;
