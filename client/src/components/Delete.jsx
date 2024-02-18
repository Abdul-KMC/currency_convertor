import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function Delete(props) {
  const [formData, setFormData] = useState({
    currencycode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    const { currencycode } = formData;

    // Find the currency object with the entered currency code
    const currencyToDelete = props.currencies.find(
      (currency) => currency.currencyCode === currencycode
    );

    // Check if the currency object is found
    if (currencyToDelete) {
      const { id } = currencyToDelete;

      axios
        .delete(`http://localhost:3001/api/currency/${id}`)
        .then((response) => {
          console.log('Currency successfully deleted:', response.data);

          // Clear the form data after updating conversion rate
          setFormData({
            currencycode: '',
          });

          alert('Currency successfully deleted');
        })
        .catch((error) => console.error('Error deleting currency:', error));
    } else {
      alert('Currency not found');
    }
  };

  return (
    <div>
      <h1 className="title">Delete Currency</h1>
      <form className="operationsForm" onSubmit={handleDelete}>
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

        <div className="buttons">
          <button className="deleteButton" type="submit">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default Delete;