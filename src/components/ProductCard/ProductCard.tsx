import { CategoryItem } from '../../store/categories/category.types';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import './productCard.scss';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;

  return (
    <div className='product'>
      <img className='product__img' src={imageUrl} alt={name} />
      <div className='product__footer'>
        <span className='product__name'>{name}</span>
        <span className='product__price'>{price}</span>
      </div>
      <Button
        className='product__btn'
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
