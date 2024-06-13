'use client'
import { Cards } from "./constant"; 
import {useState} from 'react'


function Card(props) {
  const [toggleBorder, setToggleBorder] = useState(null);

  function cardToggler (index){
    setToggleBorder(index)
  }

  return( 
  <div className="flex flex-col lg:flex-col items-center space-y-2 lg:space-y-6 lg:space-x-2 ">
    <div className="flex lg:space-x-6">
      {Cards.map((card, index) => (
        <div key={index} className={`cursor-pointer bg-red-50 px-3 py-4 lg:h-full lg:w-fullrounded-md w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 ${toggleBorder === index ? ' border-2 border-red-800': ""}`} onClick={(event)=> cardToggler(index)}>
          <div className={`bg-red-50 w-10 h-10 shadow-md relative bottom-8  left-[40%] ${toggleBorder === index ? ' border-2 border-red-800': ""}`}>
          <img src={card.image} alt={card.title} className="w-full" />
          </div>
          <h2 className="font-semibold text-center">{card.title}</h2>
          <p className="text-center">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
);
}
export default Card;
