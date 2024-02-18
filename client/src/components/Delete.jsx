import React, { useState } from 'react';
import '../App.css'

function Delete() {
  const [formData, setFormData] = useState({
    currencycode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleDelete = (e) => {
    e.preventDefault();

    // Implement the curriency deletion logic here

    // Clear the form data after attempting conversion
    setFormData({
      currencycode: ''
    });
  };

  return (
    <div>
      <h1 className="title">Delete Currency</h1>
      <form className='operationsForm' onSubmit={handleDelete}>
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
          <button className="deleteButton" type="submit">Delete</button>
        </div>
      </form>
    </div>
  )
}

export default Delete