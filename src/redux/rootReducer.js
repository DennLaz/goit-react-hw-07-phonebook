import { combineReducers } from '@reduxjs/toolkit';

import phoneBookReducer from './phoneBook/phoneBookReducer';

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

export default rootReducer;
