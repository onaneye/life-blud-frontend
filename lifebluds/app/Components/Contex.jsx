import React, { createContext, useContext, useState } from 'react';

const ToggleBorderContext = createContext();

export const useToggleBorder = () => useContext(ToggleBorderContext);

export const ToggleBorderProvider = ({ children }) => {
  const [activeCards, setActiveCards] = useState(null);

  const toggleCard = (index) => {
    // if (activeCards.includes(index)) {
    //   setActiveCards(activeCards.filter((item) => item !== index));
    // } else {
    //   setActiveCards([...activeCards, index]);
    // }
    setActiveCards(index)
  };

  return (
    <ToggleBorderContext.Provider value={{ activeCards, toggleCard }}>
      {children}
    </ToggleBorderContext.Provider>
  );
};