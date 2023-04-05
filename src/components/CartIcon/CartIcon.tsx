import { useSelector, useDispatch } from 'react-redux';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cartIcon.scss';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = 2;
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className='cart-icon'>
      <img className='cart-icon__img' src={ShoppingIcon} alt='shopping cart' />
      <span className='cart-icon__count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
