import React, { useState } from 'react';
import '../App.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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

    // Check if the provided username and password match your criteria
    if (formData.username === 'username' && formData.password === 'password') {
      alert('Login Successful!');
    } else {
      alert('Login Failed. Please check your username and password.');
    }

    // Clear the form data after attempting login
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <form className='loginForm' onSubmit={handleLogin}>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <div className="buttons">
          <button className="loginButton" type="submit">Login</button>
          <button className="signupButton" type="button" onClick={() => alert('Sign Up button clicked')}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;