import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
} from './types';

export const getReviews = () => ({
  type: GET_REVIEWS,
});

export const getReviewsSuccess = (reviews) => ({
  type: GET_REVIEWS_SUCCESS,
  payload: reviews,
});

export const getReviewsFailure = (error) => ({
  type: GET_REVIEWS_FAILURE,
  error,
});

export const fetchReviews = () => (dispatch) => {
  dispatch(getReviews());
  fetch('http://18.224.200.47/reviews/1/list')
    .then((res) => res.json())
    .then((data) => dispatch(getReviewsSuccess(data)))
    .catch((err) => dispatch(getReviewsFailure(err)));
};
