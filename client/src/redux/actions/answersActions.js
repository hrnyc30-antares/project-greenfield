import {GET_ANSWERS, GET_ANSWERS_SUCCESS, GET_ANSWERS_FAILURE} from './types'


export const getAnswers =() => ({
    type: GET_ANSWERS
})

export const getAnswersSuccess =(answers) => ({
    type: GET_ANSWERS_SUCCESS,
    payload: answers
})

export const getAnswersFailure =(err) => ({
    type: GET_ANSWERS_FAILURE,
    payload: err
})



export const fetchAnswers = (question_id) => (dispatch) =>{
    dispatch(getAnswers());
    fetch(`http://18.224.200.47/qa/${question_id}/answers`)
    .then(res => res.json())
    .then(data => dispatch(getAnswersSuccess(data)))
    .catch(err => dispatch(getAnswersFailure(err)))
}