import { GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE } from '../actions/types';

const initialState = {
  cart: [],
  loading: false,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, loading: true };
    case GET_CART_SUCCESS:
      return { cart: action.payload, loading: false, hasErrors: false };
    case GET_CART_FAILURE:
      return { ...state, loading: false, hasErrors: false };
    default:
      return state;
  }
};
