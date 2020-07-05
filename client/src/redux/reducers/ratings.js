import {
  GET_REVIEWS_META,
  GET_REVIEWS_META_SUCCESS,
  GET_REVIEWS_META_FAILURE,
} from '../actions/types';

const initialState = {
  meta: {},
  loading: true, // this was initally false
  hasErrors: false,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS_META:
      return { ...state, loading: true };
    case GET_REVIEWS_META_SUCCESS:
      return { ...state, meta: action.payload, loading: false, hasErrors: false };
    case GET_REVIEWS_META_FAILURE:
      return { ...state, loading: false, hasErrors: true, error: action.error };
    default:
      return state;
  }
};
