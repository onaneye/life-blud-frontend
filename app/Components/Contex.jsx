// file: src/contexts/Contex.js

import React, { createContext, useContext, useState } from 'react';

const ToggleBorderContext = createContext();

export const useToggleBorder = () => useContext(ToggleBorderContext);

export const ToggleBorderProvider = ({ children }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [cardValue, setCardValue] = useState('');

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
    console.log(index);
  };

  const updateCardValue = (value) => {
    setCardValue(value);
    console.log(value)
  };

  return (
    <ToggleBorderContext.Provider value={{ activeCard, toggleCard, cardValue, updateCardValue }}>
      {children}
    </ToggleBorderContext.Provider>
  );
};
