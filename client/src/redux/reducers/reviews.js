import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
} from '../actions/types';

const initialState = {
  reviews: {},
  loading: true, // this was initally false
  hasErrors: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, loading: true };
    case GET_REVIEWS_SUCCESS:
      return { reviews: action.payload, loading: false, hasErrors: false };
    case GET_REVIEWS_FAILURE:
      return { ...state, loading: false, hasErrors: true, error: action.error };
    default:
      return state;
  }
};
