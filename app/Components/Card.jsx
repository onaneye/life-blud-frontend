// file: src/components/Card.jsx

import React from 'react';
import { Cards } from "./constant"; 
import { useToggleBorder } from './Contex';

const Card = () => {
  const { activeCard, toggleCard, updateCardValue} = useToggleBorder();

  return (
    <div className="flex flex-col  mx-4 lg:flex-row items-center w-full my-auto space-y-2 lg:space-y-0 lg:space-x-2">
      {Cards.map((card, index) => (
        <div 
          key={index} 
          className={`cursor-pointer bg-red-50 px-3 py-4 lg:h-full lg:w-full rounded-md w-full md:w-full  mb-4 lg:mb-0 ${activeCard === index ? 'border-2 border-red-800' : ''}`} 
          onClick={(event) => {
            toggleCard(index)
            updateCardValue(card.title) 
          }
          }
        >
          <div className={`bg-red-50 w-10 h-10 shadow-md relative bottom-8 left-[40%] ${activeCard === index ? 'border-2 border-red-800' : ''}`}>
            <img src={card.image} alt={card.title} className="w-full" />
          </div>
          <h1 className="text-center text-[#230202] pb-1 mt-0 font-gilroy lg:text-[22px] leading-6">{card.title}</h1>
          <p className="text-center font-helvetica text-[16px] line-height-[19px] text-[#545454] pt-5">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;