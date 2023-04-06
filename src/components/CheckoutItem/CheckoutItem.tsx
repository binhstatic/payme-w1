import React from 'react';
import { CartItem } from '../../store/cart/cart.types';

import './checkoutItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart.action';

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className='checkout-item'>
      <div className='checkout-item__image'>
        <img className='checkout-item__img' src={imageUrl} alt={name} />
      </div>
      <span className='checkout-item__name'>{name}</span>
      <span className='checkout-item__quantity'>
        <div className='checkout-item__arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='checkout-item__value'>{quantity}</span>
        <div className='checkout-item__arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='checkout-item__price'>${price}</span>
      <div className='checkout-item__remove' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
