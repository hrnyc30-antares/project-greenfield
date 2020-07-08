import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  UPDATE_REVIEWS_COUNT,
} from '../actions/types';

const initialState = {
  reviews: {},
  loading: true, // this was initally false
  hasErrors: false,
  error: {},
  reviewsResultCount: 2,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, loading: true };
    case GET_REVIEWS_SUCCESS:
      return { reviews: action.payload, loading: false, hasErrors: false };
    case GET_REVIEWS_FAILURE:
      return { ...state, loading: false, hasErrors: true, error: action.error };
    case UPDATE_REVIEWS_COUNT:
      console.log('updating in reducer', action.payload)
      return {...state, reviewsResultCount: action.payload}
    default:
      return state;
  }
};
