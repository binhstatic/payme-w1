import { CartItem as TCartItem } from '../../store/cart/cart.types';

import './cartItem.scss';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='cart-item'>
      <img className='cart-item__img' src={imageUrl} alt={name} />
      <div className='cart-item__detail'>
        <span className='cart-item__name'>{name}</span>
        <span className='cart-item__quantity'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
