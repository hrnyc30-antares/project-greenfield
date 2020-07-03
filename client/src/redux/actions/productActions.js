import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from './types';

export const getProduct = () => ({
  type: GET_PRODUCT,
});

export const getProductSuccess = (products) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: products,
});

export const getProductFailure = () => ({
  type: GET_PRODUCT_FAILURE,
});

export const fetchProduct = (productId) => (dispatch) => {
  dispatch(getProduct());
  fetch(`http://18.224.200.47/product/${productId}`)
    .then((res) => res.json())
    .then((data) => dispatch(getProductSuccess(data)))
    .catch((err) => dispatch(getProductFailure()));
};
