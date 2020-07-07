import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import styles from './styles';
import cart from './cartReducer';
import reviews from './reviews';
import ratings from './ratings';

export default combineReducers({
  products,
  product,
  styles,
  cart,
  reviews,
  ratings,
});
