import React from 'react';

import { cartItems } from '../../components/CartDropdown/CartDropDown';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './checkout.scss';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__header'>
        <div className='checkout__block'>
          <span className='checkout__title'>Product</span>
        </div>
        <div className='checkout__block'>
          <span className='checkout__title'>Description</span>
        </div>
        <div className='checkout__block'>
          <span className='checkout__title'>Quantity</span>
        </div>
        <div className='checkout__block'>
          <span className='checkout__title'>Price</span>
        </div>
        <div className='checkout__block'>
          <span className='checkout__title'>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='checkout__total'>Total: $1222</span>
    </div>
  );
};

export default Checkout;
