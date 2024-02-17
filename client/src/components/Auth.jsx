import React from 'react'
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';
import '../App.css'

function Auth() {
  return (
    <div className='auth'>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Auth