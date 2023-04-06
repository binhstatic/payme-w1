import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard';

import { CategoryItem } from '../../store/categories/category.types';

import './categoryPreview.scss';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className='category-preview'>
      <h2>
        <Link className='category-preview__title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='category-preview__preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
