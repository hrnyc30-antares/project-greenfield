import {
    GET_ANSWERS,
    GET_ANSWERS_SUCCESS,
    GET_ANSWERS_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    answers: [],
    loading: true,
    hasErrors: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ANSWERS:
        return { ...state, loading: true };
      case GET_ANSWERS_SUCCESS:
        return { answers: action.payload, loading: false, hasErrors: false };
      case GET_ANSWERS_FAILURE:
        return { ...state, loading: false, hasErrors: true };
      default:
        return state;
    }
  };