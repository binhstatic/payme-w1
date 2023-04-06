import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartDropDown from '../../components/CartDropdown/CartDropDown';
import CartIcon from '../../components/CartIcon/CartIcon';

import './navigation.scss';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <div className='nav'>
        <Link className='nav__logo' to='/'>
          PAYME
        </Link>
        <div className='nav__links'>
          <Link className='nav__link' to='shop'>
            SHOP
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
