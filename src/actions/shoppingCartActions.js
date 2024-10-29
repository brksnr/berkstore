export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const TOGGLE_CART = "TOGGLE_CART";

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const increaseCount = (productId) => ({
  type: INCREASE_COUNT,
  payload: productId,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});
