import React from 'react';
import { CartItem } from '../../store/cart/cart.types';

import './checkoutItem.scss';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item'>
      <div className='checkout-item__image'>
        <img className='checkout-item__img' src={imageUrl} alt={name} />
      </div>
      <span className='checkout-item__name'>{name}</span>
      <span className='checkout-item__quantity'>
        <div className='checkout-item__arrow'>&#10094;</div>
        <span className='checkout-item__value'>{quantity}</span>
        <div className='checkout-item__arrow'>&#10095;</div>
      </span>
      <span className='checkout-item__price'>${price}</span>
      <div className='checkout-item__remove' onClick={() => {}}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
