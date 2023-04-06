import { useSelector, useDispatch } from 'react-redux';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import './cartIcon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <img className='cart-icon__img' src={ShoppingIcon} alt='shopping cart' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
