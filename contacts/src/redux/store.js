import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filterReducer from './reducers/filterReducer';
import contactReducer from './reducers/contactReducer';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
