import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
} from '../actions/types';

const initialState = {
  questions: [],
  loading: true,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, loading: true };
    case GET_QUESTIONS_SUCCESS:
      return { questions: action.payload, loading: false, hasErrors: false };
    case GET_QUESTIONS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
