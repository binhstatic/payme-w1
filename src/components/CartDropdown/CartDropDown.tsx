import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartItem as TCartItem } from '../../store/cart/cart.types';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './cartDropDown.scss';

export const cartItems: TCartItem[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'brown brim',
    price: 12,
    quantity: 1,
  },
  {
    id: 7,
    imageUrl:
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'brown brim',
    price: 12,
    quantity: 1,
  },
];

const CartDropDown = () => {
  const navigate = useNavigate();

  const handleCheckout = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <div className='cart'>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <span className='cart__message'>Your cart is empty</span>
      )}
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
