import { combineReducers } from 'redux';

import products from './products';
import reviews from './reviews';

export default combineReducers({
  products,
  reviews,
});
