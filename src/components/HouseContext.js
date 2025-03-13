import React, { useState, useEffect, createContext } from 'react';
import { housesData } from '../data'; // Ensure this file and variable exist

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setproperty] = useState('property type (any)');
  const [properties, setproperties] = useState([]);
  const [price, setprice] = useState('price range (any)');
  const [loading, setloading] = useState(false);

  // Get all unique countries
  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  // Get all unique properties
  useEffect(() => {
    const allproperties = houses.map((house) => house.type);
    const uniqueProperties = ['property type (any)',...
      new Set(allproperties)];
    setproperties(uniqueProperties);
  }, [houses]);

  // Handle button click (Filtering)
  const handleClick = () => {
    setloading(true);
    const isDefault = (str) => str.includes('(any)');

    // Extract and parse price values safely
    const priceArray = price.split(' ');
    const minPrice = priceArray[0] && !isNaN(priceArray[0]) ? parseInt(priceArray[0]) : 0;
    const maxPrice = priceArray[2] && !isNaN(priceArray[2]) ? parseInt(priceArray[2]) : Infinity;

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Check country filter
      const matchesCountry = isDefault(country) || house.country === country;
      // Check property filter
      const matchesProperty = isDefault(property) || house.type === property;
      // Check price range filter
      const matchesPrice = housePrice >= minPrice && housePrice <= maxPrice;

      return matchesCountry && matchesProperty && matchesPrice;

      // if all values are defult
      if (isDefault(country) && isDefault (property) &&
    isDefault(price)) {
      return house;
    }

    // if country is not default
    if(!isDefault(country)&&isDefault(property)
      && isDefault(price)) {
    return house.country === country;
  }
    // if property is not defult
      if(!isDefault(property)&&isDefault(country)
       && isDefault(price)) {
        return house.type === property;
       }

  // if price is not defult
  if(!isDefault(price)&&isDefault(country)
    && isDefault(property)) {
      if (housePrice >= minPrice && housePrice <= 
        maxPrice) {
          return house
        }
    }  
  // if country & property is not defult
  if(!isDefault(country)&& !isDefault(property)
    && isDefault(price)) {
     return house.country === country && house.type === property;
    }

// if country and price is not defult
if(!isDefault(country) && isDefault(property)
  && !isDefault(price)) {
     if (housePrice >= minPrice && housePrice <=
   maxPrice) {
      return house.country === country;
    }
  }

  // property and price is not defult

  if(!isDefault(country) && isDefault(property)
    && !isDefault(price)) {
       if (housePrice >= minPrice && housePrice <=
     maxPrice) {
        return house.type === property;
      }
    }

});
setTimeout(() => {
  setHouses(filteredHouses.length > 0 ? filteredHouses : []);
  setloading(false);
}, 1000); // Added a 500ms delay for a better UX
};

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setproperty,
        properties,
        price,
        setprice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
