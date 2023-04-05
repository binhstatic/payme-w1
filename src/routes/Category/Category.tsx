import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { categoriesMap } from '../Categories/Categories';

import './category.scss';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const products = categoriesMap[category];

  return (
    <>
      <h2 className='category__title'>{category.toUpperCase()}</h2>
      <div className='category__container'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
