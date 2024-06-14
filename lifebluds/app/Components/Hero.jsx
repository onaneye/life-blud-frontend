import { useState } from "react";
import Button from './Button'
import { BloodDonationServices } from "./constant";

const HeroSection = () => {
  const [showCardComponent, setShowCardComponent] = useState(true);

  function handleCardComponent() {
    setShowCardComponent((prevState) => !prevState);
  }

  return (
    <>
      {showCardComponent ? (
        <div className="flex items-center justify-center h-full lg:h-[fit-content]  w-full lg:w-1/2 bg-gray-200 py-[100px] px-1">
          <div className="transparent-card bg-transparent">
            <h6 className="text-[34px] md:text-[32px] lg:text-[40px] font-bold leading-tight md:leading-snug lg:leading-[57.6px]">
              Save Lives with a Single Donation
            </h6>
            <p className="text-[15px] md:text-[13px] font-bold leading-tight md:leading-normal py-4">
              Your blood donation can save up to three lives. Join our community of lifesavers and make a difference today.
            </p>
            <hr className="border-gray-300 mb-8 h-1 my-5 bg-gray-300" />
            <div>
              <h2 className="text-[30px] md:text-[35px] font-bold leading-tight md:leading-snug lg:leading-[38.4px]">Why Donate Blood?</h2>
              {BloodDonationServices.map((item, index) => (
                <div key={index} className="my-4">
                  <div className="flex items-center mb-0">
                    <div className="p-1 rounded-full">
                      <img src={item.img} alt={item.img} />
                    </div>
                    <h3 className="text-[15px] md:text-[17px]  font-medium leading-6 md:leading-10 text-gray-800 ml-1">
                      {item.heading}
                    </h3>
                  </div>
                  <p className="text-[12px] md:text-[14px] font-medium my-0 ml-12">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="items-center justify-center lg:hidden">
              <button className="button-primary-lg md:self-center" onClick={handleCardComponent}>
                Sign Up
              </button>
              <p className="py-3 text-center font-bold">Signed up? Login</p>
            </div>
          </div>
        </div>
      ) : (
        <>
        <Button />
        </>
      )}
    </>
  );
};

export default HeroSection;