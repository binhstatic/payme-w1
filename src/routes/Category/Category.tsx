import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

import './category.scss';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';
import Spinner from '../../components/Spinner/Spinner';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const products = categoriesMap[category];

  return (
    <>
      <h2 className='category__title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category__container'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
