import {
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../actions/types';

const initialState = {
  product: {},
  loading: true,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { product: action.payload, loading: false, hasErrors: false };
    case GET_PRODUCT_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
