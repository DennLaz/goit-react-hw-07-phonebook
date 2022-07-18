import { combineReducers } from 'redux';

import filterReducer from './phoneBookFilter/filterReducerSlice';
import itemsReducer from './phoneBookItems/itemsReducerSlice';

const phoneBookReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phoneBookReducer;
