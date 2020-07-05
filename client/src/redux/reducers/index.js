import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import styles from './styles';
import reviews from './reviews';

export default combineReducers({
  products,
  product,
  styles,
  reviews,
});
