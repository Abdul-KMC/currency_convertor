import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

function AddCurrency() {
  const [formData, setFormData] = useState({
    currencyCode: '',
    countryId: 0,
    conversionRate: 0.0
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

    axios
      .post('http://localhost:3001/api/currency', formData)
      .then((response) => {
        console.log('Currency successfully added:', response.data);

        // Clear the form data after attempting conversion
        setFormData({
          currencycode: '',
          countryid: '',
          conversionrate: ''
        });

        alert('Currency successfully added');
      })
      .catch((error) => console.error('Error adding currency:', error));
  };

  return (
    <div>
      <h1 className="title">Add Currency</h1>
      <form className='operationsForm' onSubmit={handleLogin}>
        <section className="inputField">
          <label>Currency Code:</label>
          <input
            type="text"
            name="currencyCode"
            placeholder="Currency Code"
            value={formData.currencyCode}
            onChange={handleInputChange}
            required
          />
        </section>

        <section className="inputField">
          <label>Country ID:</label>
          <input
            type="number"
            name="countryId"
            placeholder="Country ID"
            value={formData.countryId}
            onChange={handleInputChange}
            required
          />
        </section>
        
        <section className="inputField">
          <label>Conversion Rate:</label>
          <input
            type="number"
            name="conversionRate"
            placeholder="Conversion Rate"
            value={formData.conversionRate}
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