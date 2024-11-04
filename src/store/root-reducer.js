import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { cateogoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: cateogoriesReducer,
  cart: cartReducer,
});
