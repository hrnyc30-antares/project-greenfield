import {
  GET_REVIEWS_META,
  GET_REVIEWS_META_SUCCESS,
  GET_REVIEWS_META_FAILURE,
} from './types';

export const getReviewsMeta = () => ({
  type: GET_REVIEWS_META,
});

export const getReviewsMetaSuccess = (meta) => ({
  type: GET_REVIEWS_META_SUCCESS,
  payload: meta,
});

export const getReviewsMetaFailure = (error) => ({
  type: GET_REVIEWS_META_FAILURE,
  error,
});

export const fetchReviewsMeta = (id) => (dispatch) => {
  dispatch(getReviewsMeta());
  fetch(`http://18.224.200.47/reviews/${id}/meta`)
    .then((res) => res.json())
    .then((data) => dispatch(getReviewsMetaSuccess(data)))
    .catch((err) => dispatch(getReviewsMetaFailure(err)));
};
