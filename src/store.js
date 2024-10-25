import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import clientReducer from './reducers/clientReducer';

import shoppingCartReducer from './reducers/shoppingCartReducer';
import productReducer from './reducers/productReducers';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
