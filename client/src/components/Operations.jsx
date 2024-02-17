import React from 'react'
import Header from './Header';
import Convertor from './Convertor';
import AddCurrency from './AddCurrency';
import UpdateCurrency from './UpdateCurrency';
import Delete from './Delete';
import Footer from './Footer';

function Operations() {
  return (
    <div>
      <Header />
      <Convertor />
      <AddCurrency />
      <UpdateCurrency />
      <Delete />
      <Footer />
    </div>
  )
}

export default Operations