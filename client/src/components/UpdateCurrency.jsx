import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function UpdateCurrency(props) {
  const [formData, setFormData] = useState({
    currencycode: '',
    newrate: 0.0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const { currencycode, newrate } = formData;

    // Find the currency object with the entered currency code
    const currencyToUpdate = props.currencies.find(
      (currency) => currency.currencyCode === currencycode
    );

    // Check if the currency object is found
    if (currencyToUpdate) {
      const { id } = currencyToUpdate;

      axios
        .put(`http://localhost:3001/api/currency/${id}/${newrate}`)
        .then((response) => {
          console.log('Currency successfully updated:', response.data);

          // Clear the form data after updating conversion rate
          setFormData({
            currencycode: '',
            newrate: 0.0,
          });

          alert('Currency successfully updated');
        })
        .catch((error) => console.error('Error updating currency:', error));
    } else {
      alert('Currency not found');
    }
  };

  return (
    <div>
      <h1 className="title">Update Currency</h1>
      <form className="operationsForm" onSubmit={handleUpdate}>
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
          <button className="updateButton" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateCurrency;