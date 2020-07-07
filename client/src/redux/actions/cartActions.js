import { GET_CART, GET_CART_SUCCESS, GET_CART_FAILURE } from './types';

export const getCart = () => ({
  type: GET_CART,
});

export const getCartSuccess = (cartProducts) => ({
  type: GET_CART_SUCCESS,
  payload: cartProducts,
});

export const getCartFailure = () => ({
  type: GET_CART_FAILURE,
});

export const fetchCart = (userToken) => (dispatch) => {
  dispatch(getCart());
  fetch(`http://18.224.200.47/cart/${userToken}`)
    .then((res) => res.json())
    .then((data) => dispatch(getCartSuccess(data)))
    .catch((err) => dispatch(getCartFailure(err)));
};

export const addToCart = (userToken, skuId) => (dispatch) => {
  console.log(`ut: ${userToken}, sku: ${skuId}`);
  dispatch(getCart());
  fetch('http://18.224.200.47/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_token: userToken, sku_id: skuId }),
  })
    .then((res) => res.json())
    .then(() => dispatch(fetchCart(userToken)))
    .catch((err) => dispatch(getCartFailure(err)));
};
