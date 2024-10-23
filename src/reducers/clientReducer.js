import { 
  SET_USER, 
  SET_ROLES, 
  SET_THEME, 
  SET_LANGUAGE, 
  SET_ADDRESS_LIST, 
  SET_CREDIT_CARDS 
} from '../actions/clientActions';

const initialState = {
  user: {},
  addressList: [], 
  creditCards: [], 
  roles: [], 
  theme: 'light',
  language: 'en'
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ROLES:
      // Eğer roller diziye ekleniyorsa, kontrol edin
      return { 
        ...state, 
        roles: state.roles.includes(action.payload) ? state.roles : [...state.roles, action.payload] 
      };
    case SET_ADDRESS_LIST:
      return { ...state, addressList: [...state.addressList, action.payload] };
    case SET_CREDIT_CARDS:
      return { ...state, creditCards: [...state.creditCards, action.payload] }; 
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
