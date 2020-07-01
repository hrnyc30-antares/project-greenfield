import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from '../actions/types';

const initialState = {
  products: [],
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
