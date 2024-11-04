import { SET_CART, SET_PAYMENT, SET_ADDRESSES, ADD_TO_CART, INCREASE_COUNT, TOGGLE_CART, REMOVE_FROM_CART, DECREASE_COUNT, SELECTED_ADDRESS_ID, SET_SELECTED_CREDIT_CARD } from '../actions/shoppingCartActions';

const initialState = {
  cart: [],
  payment: {},
  addresses: [],
  isOpen: false,
  addressId: null,
  selectedCreditCard: null,
  totalPrice: 0,
};

const calculateTotalPrice = (cart) => {
  return cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      console.log("reduxcard:", action.payload);
      return { 
        ...state, 
        cart: action.payload,
        totalPrice: calculateTotalPrice(action.payload), 
      };
      
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
      
    case SET_ADDRESSES:
      console.log("adresbilgileri redux:", action.payload);
      return {
        ...state,
        addresses: action.payload,
      };
      
    case SELECTED_ADDRESS_ID:
      console.log("adresidsi redux:", action.payload);
      return { ...state, addressId: action.payload };

    case SET_SELECTED_CREDIT_CARD:
      console.log("selectedcart redux:", action.payload);
      return {
        ...state,
        selectedCreditCard: action.payload,
      };
      
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
      
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter(item => item.product.id !== action.payload);
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart), 
      };
    }
      
    case INCREASE_COUNT: {
      const updatedCart = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, count: item.count + 1 }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }
      
    case DECREASE_COUNT: {
      const updatedCart = state.cart
        .map((item) => {
          if (item.product.id === action.payload) {
            if (item.count > 1) {
              return { ...item, count: item.count - 1 };
            } else {
              return null;
            }
          }
          return item;
        })
        .filter(item => item !== null);
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart), 
      };
    }
      
    case ADD_TO_CART: {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      let updatedCart;
      
      if (existingProductIndex !== -1) {
        updatedCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ];
      }
      
      return {
        ...state,
        cart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
      };
    }
    
    default:
      return state;
  }
};

export default shoppingCartReducer;
