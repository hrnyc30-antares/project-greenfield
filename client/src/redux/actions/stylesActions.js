import { GET_STYLES, GET_STYLES_SUCCESS, GET_STYLES_FAILURE } from './types';

export const getStyles = () => ({
  type: GET_STYLES,
});

export const getStylesSuccess = (styles) => ({
  type: GET_STYLES_SUCCESS,
  payload: styles,
});

export const getStylesFailure = (err) => ({
  type: GET_STYLES_FAILURE,
  payload: err,
});

export const fetchStyles = (productId) => (dispatch) => {
  dispatch(getStyles());
  fetch(`http://18.224.200.47/products/${productId}/styles`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(getStylesSuccess(data));
    })
    .catch((err) => dispatch(getStylesFailure(err)));
};
