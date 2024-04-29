
import React, { createContext, useContext, useState, useEffect } from 'react';
import propertiesData from './data/logements.json';

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
      setProperties(propertiesData);
  }, []);

  return (
    <PropertyContext.Provider value={{ properties }}>
      {children}
    </PropertyContext.Provider>
  );
};


export const useProperties = () => useContext(PropertyContext);
