'use client'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { NavList } from "./constant";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set the initial screen width on the client side
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between w-full px-4 items-center py-5 absolute text-white">
      <img src="/logo.png" alt="Logo" width={100} height={50}/>   
      {screenWidth <= 768 ? (
        <FontAwesomeIcon 
          icon={menuOpen ? faTimesCircle : faBars} 
          size="xl" 
          className="lg:hidden cursor-pointer px-3" 
          onClick={toggleMenu} 
        />
      ) : (
        <button className="hidden lg:block button-primary-sm ml-auto">Login</button>
      )}
      {menuOpen && (
        <div className="container absolute top-16  w-full bg-white mx-auto rounded-md p-4 lg:hidden">
          <ul className="flex flex-col justify-center">
            {NavList.map((nav, index) => (
              <li key={index} className="py-2 flex items-center">
                <img src={nav.img} alt={nav.img} className="w-[40px] text-red-400"/>
                <Link href={nav.href}>
                  <p className="text-xl text-black ml-4">{nav.title}</p>
                </Link>
              </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
