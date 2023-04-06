import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/Button/Button';

import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import './checkout.scss';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <span className='checkout__total'>Total: ${cartTotal}</span>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => toast.success('pay success, thank u')}
      >
        Pay now
      </Button>
    </div>
  );
};

export default Checkout;
