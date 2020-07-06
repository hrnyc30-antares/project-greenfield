import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import styles from './styles';
import reviews from './reviews';
import answers from './answers';
import questions from './questions';

export default combineReducers({
  products,
  product,
  styles,
  reviews,
  answers,
  questions,
});
