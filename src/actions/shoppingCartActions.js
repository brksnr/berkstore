export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESSES = "SET_ADDRESSES";
export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const TOGGLE_CART = "TOGGLE_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const SELECTED_ADDRESS_ID = "SELECTED_ADDRESS_ID"; 
export const SET_SELECTED_CREDIT_CARD = "SET_SELECTED_CREDIT_CARD";

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment
});

export const setAddresses = (addresses) => ({
  type: SET_ADDRESSES,
  payload: addresses,
});

export const setSelectedAddressId = (selectedAddressId) => ({
  type: SELECTED_ADDRESS_ID,
  payload: selectedAddressId,
});

export const setSelectedCreditCard = (creditCardId) => ({
  type: SET_SELECTED_CREDIT_CARD,
  payload: creditCardId,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const increaseCount = (productId) => ({
  type: INCREASE_COUNT,
  payload: productId,
});

export const decreaseCount = (productId) => ({
  type: DECREASE_COUNT,
  payload: productId,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
