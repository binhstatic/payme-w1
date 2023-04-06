import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../store/cart/cart.selector';

import './cartDropDown.scss';

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const handleCheckout = useCallback(() => {
    navigate('/checkout');
  }, []);

  return (
    <div className='cart'>
      <div className='cart__items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className='cart__message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
