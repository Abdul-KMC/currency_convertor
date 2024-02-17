import React, { useState } from 'react';
import '../App.css'

function Convertor() {
  const [formData, setFormData] = useState({
    currencyfrom: '',
    currencyto: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Implement the conversion logic here

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
      <form className='operationsForm' onSubmit={handleLogin}>
        <section className="inputField">
          <label>Currency From:</label>
          <input
            type="text"
            name="currencyfrom"
            placeholder="Currency From"
            value={formData.currencyfrom}
            onChange={handleInputChange}
            required
          />
        </section>

        <section className="inputField">
          <label>Currency To:</label>
          <input
            type="text"
            name="currencyto"
            placeholder="Currency To"
            value={formData.currencyto}
            onChange={handleInputChange}
            required
          />
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
  )
}

export default Convertor