import React, { useState } from 'react';
import { convertCurrency } from '../utils/currency_utils';
import '../App.css';

function Convertor(props) {
  const [formData, setFormData] = useState({
    currencyfrom: '',
    currencyto: '',
    amount: 0.0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleConvert = (e) => {
    e.preventDefault();

    // Implement the conversion logic here
    const { currencyfrom, currencyto, amount } = formData;
    const fromCurrencyObj = props.currencies.find(curr => curr.currencyCode === currencyfrom);
    const toCurrencyObj = props.currencies.find(curr => curr.currencyCode === currencyto);

    if (fromCurrencyObj && toCurrencyObj) {
      const result = convertCurrency(fromCurrencyObj, toCurrencyObj, amount);

      alert(`${amount} ${currencyfrom} is ${result.toFixed(2)} ${currencyto}`);
    } else {
      alert('Invalid currency codes');
    }

    // Clear the form data after attempting conversion
    setFormData({
      currencyfrom: '',
      currencyto: '',
      amount: ''
    });
  };

  return (
    <div>
      <h1 className="title">Convertor</h1>
      <form className='operationsForm' onSubmit={handleConvert}>
        <section className="inputField">
          <label>Currency From:</label>
          <select
            name="currencyfrom"
            value={formData.currencyfrom}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Currency</option>
            {props.currencies.map(curr => (
              <option key={curr.id} value={curr.currencyCode}>{curr.currencyCode}</option>
            ))}
          </select>
        </section>

        <section className="inputField">
          <label>Currency To:</label>
          <select
            name="currencyto"
            value={formData.currencyto}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select Currency</option>
            {props.currencies.map(curr => (
              <option key={curr.id} value={curr.currencyCode}>{curr.currencyCode}</option>
            ))}
          </select>
        </section>

        <section className="inputField">
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </section>

        <div className="buttons">
          <button className="convertButton" type="submit">Convert</button>
        </div>
      </form>
    </div>
  );
}

export default Convertor;