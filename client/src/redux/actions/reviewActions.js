import {
  GET_REVIEWS,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  UPDATE_REVIEWS_COUNT,
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

export const updateCount = (count) => ({
  type: UPDATE_REVIEWS_COUNT,
  payload: count,
})

export const fetchReviews = (count = 2, id) => (dispatch) => {
  dispatch(getReviews());
  fetch(`http://18.224.200.47/reviews/${id}/list?count=${count}`)
    .then((res) => res.json())
    .then((data) => dispatch(getReviewsSuccess(data)))
    .catch((err) => dispatch(getReviewsFailure(err)));
};

export const updateReviewCount = (count) => (dispatch) => {
  dispatch(updateCount(count));
  console.log('this is the count in UpdateReviewCount action creator', count)
}