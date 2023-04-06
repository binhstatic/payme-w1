import { Category } from '../../store/categories/category.types';
import { categories } from './categoriesData';

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = categories;
      const isError = false;

      if (!isError) {
        resolve(data);
      } else {
        reject('An error occurred');
      }
    }, 1000);
  });
};
