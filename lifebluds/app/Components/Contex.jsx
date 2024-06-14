// file: src/contexts/Contex.js

import React, { createContext, useContext, useState } from 'react';

const ToggleBorderContext = createContext();

export const useToggleBorder = () => useContext(ToggleBorderContext);

export const ToggleBorderProvider = ({ children }) => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <ToggleBorderContext.Provider value={{ activeCard, toggleCard }}>
      {children}
    </ToggleBorderContext.Provider>
  );
};
