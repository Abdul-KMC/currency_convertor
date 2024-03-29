import React from 'react'
import Header from './Header';
import Convertor from './Convertor';
import AddCurrency from './AddCurrency';
import UpdateCurrency from './UpdateCurrency';
import Delete from './Delete';
import Footer from './Footer';

function Operations(props) {
  return (
    <div>
      <Header />
      <Convertor currencies={props.currencies} />
      <AddCurrency />
      <UpdateCurrency currencies={props.currencies} />
      <Delete currencies={props.currencies} />
      <Footer />
    </div>
  )
}

export default Operations