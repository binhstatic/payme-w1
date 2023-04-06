import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('shop');
    dispatch(fetchCategoriesStart());
  }, []);

  return <Outlet />;
};

export default Shop;
