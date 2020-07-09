import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
} from './types';

export const getQuestions = () => ({
  type: GET_QUESTIONS,
});

export const getQuestionsSuccess = (questions) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload: questions,
});

export const getQuestionsFailure = (err) => ({
  type: GET_QUESTIONS_FAILURE,
  payload: err,
});


export const fetchQuestions = (product_id) => (dispatch) => {
  dispatch(getQuestions());
  fetch(`http://18.224.200.47/qa/${product_id}/`)
    .then((res) => res.json())
    .then((data) => dispatch(getQuestionsSuccess(data)))
    .catch((err) => dispatch(getQuestionsFailure(err)));
};
