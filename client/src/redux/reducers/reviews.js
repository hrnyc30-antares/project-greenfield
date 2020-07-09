import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  UPDATE_REVIEWS_COUNT,
  UPDATE_REVIEWS_SORT,
} from '../actions/types';

const initialState = {
  reviews: {},
  loading: true, // this was initally false
  hasErrors: false,
  error: {},
  reviewsResultCount: 2,
  sort: 'relevant',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return { ...state, loading: true };
    case GET_REVIEWS_SUCCESS:
      return { ...state, reviews: action.payload, loading: false, hasErrors: false };
    case GET_REVIEWS_FAILURE:
      return { ...state, loading: false, hasErrors: true, error: action.error };
    case UPDATE_REVIEWS_COUNT:
      return { ...state, reviewsResultCount: action.payload };
    case UPDATE_REVIEWS_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};
