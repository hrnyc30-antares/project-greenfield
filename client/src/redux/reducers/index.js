import { combineReducers } from 'redux';

import products from './products';
import reviews from './reviews';
import ratings from './ratings';

export default combineReducers({
  products,
  reviews,
  ratings,
});
