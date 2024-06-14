// file: src/components/HeroSection.js
import { useState } from "react";
import Button from './Button';
import { BloodDonationServices } from "./constant";

const HeroSection = () => {
  const [showCardComponent, setShowCardComponent] = useState(true);

  const handleCardComponent = () => {
    setShowCardComponent(prevState => !prevState);
  };

  return (
    <>
      {showCardComponent ? (
        <div className="flex items-center justify-center h-full lg:h-[fit-content] w-full lg:w-1/2 py-10 lg:py-20 px-4" style={{ backgroundImage: "url('../hero-img.png')", backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="transparent-card  bg-gray-400 shadow-md  bg-opacity-35 py-10 lg:py-8 px-4 text-white">
            <h6 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight md:leading-snug lg:leading-tight font-gilroy">
              Save Lives with a Single Donation
            </h6>
            <p className="text-sm md:text-base font-bold leading-tight md:leading-normal py-4 font-gilroy">
              Your blood donation can save up to three lives. Join our community of lifesavers and make a difference today.
            </p>
            <hr className="border-gray-300 mb-8 h-1 my-5 bg-gray-300" />
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-snug lg:leading-tight">
                Why Donate Blood?
              </h2>
              {BloodDonationServices.map((item, index) => (
                <div key={index} className="my-4">
                  <div className="flex items-center mb-2">
                    <div className="rounded-full">
                      <img src={item.img} alt={item.heading} className="h-10 w-10 md:h-12 md:w-12 rounded-full" />
                    </div>
                    <h3 className="text-sm md:text-base font-medium leading-6 md:leading-8 text-white-800 ml-0">
                      {item.heading}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm font-medium my-0 ml-12">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center lg:hidden mt-4">
              <button className="button-primary-lg" onClick={handleCardComponent}>
                Sign Up
              </button>
              <p className="py-3 text-center font-bold">Signed up? Login</p>
            </div>
          </div>
        </div>
      ) : (
        <Button />
      )}
    </>
  );
};

export default HeroSection;
