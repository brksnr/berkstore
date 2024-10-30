import { SET_CART, SET_PAYMENT, SET_ADDRESS, ADD_TO_CART, INCREASE_COUNT, TOGGLE_CART, REMOVE_FROM_CART, DECREASE_COUNT } from '../actions/shoppingCartActions';

const initialState = {
  cart: [],
  payment: {},
  address: [],
  isOpen: false,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload }; 
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
      case SET_ADDRESS:
        return {
            ...state,
            address: [...state.address, action.payload]
        };
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)}}
        case INCREASE_COUNT: {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.product.id === action.payload
                ? { ...item, count: item.count + 1 }
                : item
            ),
          };
        }      
        case DECREASE_COUNT: {
          return {
            ...state,
            cart: state.cart.map((item) => {
              if (item.product.id === action.payload) {
                if (item.count > 1) {
                  return { ...item, count: item.count - 1 };
                } else {
                  return null; 
                }
              }
              return item;
            }).filter(item => item !== null), 
          };
        }
    case ADD_TO_CART: {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === existingProductIndex
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          { count: 1, checked: true, product: action.payload },
        ],
      };
    }
    case INCREASE_COUNT: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;
