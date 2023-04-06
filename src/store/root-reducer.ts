import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/category.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
});
