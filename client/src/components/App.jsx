import React, { useState, useEffect } from 'react';
import Authentication from './Auth';
import Operations from './Operations';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countriesResponse, currenciesResponse] = await Promise.all([
          fetch('http://localhost:3001/api/country').then((response) => response.json()),
          fetch('http://localhost:3001/api/currency').then((response) => response.json())
        ]);

        setCountries(countriesResponse);
        setCurrencies(currenciesResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Authentication /> */}
      <Operations countries={countries} currencies={currencies} />
    </div>
  );
};

export default App;
