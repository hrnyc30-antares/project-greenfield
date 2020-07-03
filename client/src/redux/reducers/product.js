import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/types';

const initialState = {
  product: {}
  styles - empty array
  currentStyle - empty object
  photos - empty array
  currentPhoto - empty object
  loading: false,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, hasErrors: false };
    case GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
