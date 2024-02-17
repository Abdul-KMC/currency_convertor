import React, { useState } from 'react';
import '../App.css'

function AddCurrency() {
  const [formData, setFormData] = useState({
    currencycode: '',
    countryid: '',
    conversionrate: ''
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

    // Implement the adding curriency logic here

    // Clear the form data after attempting conversion
    setFormData({
      currencycode: '',
      countryid: '',
      conversionrate: ''
    });
  };

  return (
    <div>
      <h1 className="title">Add Currency</h1>
      <form className='operationsForm' onSubmit={handleLogin}>
        <section className="inputField">
          <label>Currency Code:</label>
          <input
            type="text"
            name="currencycode"
            placeholder="Currency Code"
            value={formData.currencycode}
            onChange={handleInputChange}
            required
          />
        </section>

        <section className="inputField">
          <label>Country ID:</label>
          <input
            type="number"
            name="countryid"
            placeholder="Country ID"
            value={formData.countryid}
            onChange={handleInputChange}
            required
          />
        </section>
        
        <section className="inputField">
          <label>Conversion Rate:</label>
          <input
            type="number"
            name="conversionrate"
            placeholder="Conversion Rate"
            value={formData.conversionrate}
            onChange={handleInputChange}
            required
          />
        </section>
        
        <div className="buttons">
          <button className="addButton" type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddCurrency