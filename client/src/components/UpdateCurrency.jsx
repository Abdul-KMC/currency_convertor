import React, { useState } from 'react';
import '../App.css'

function UpdateCurrency() {
  const [formData, setFormData] = useState({
    currencycode: '',
    newrate: ''
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

    // Implement the currency updation logic here

    // Clear the form data after attempting conversion
    setFormData({
      currencycode: '',
      newrate: ''
    });
  };

  return (
    <div>
      <h1 className="title">Update Currency</h1>
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
          <label>New Rate:</label>
          <input
            type="number"
            name="newrate"
            placeholder="New Rate"
            value={formData.newrate}
            onChange={handleInputChange}
            required
          />
        </section>
        
        <div className="buttons">
          <button className="updateButton" type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCurrency