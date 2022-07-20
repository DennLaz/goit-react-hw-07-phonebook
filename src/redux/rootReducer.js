import { combineReducers } from '@reduxjs/toolkit';

import phoneBookSlice from './phoneBook/phoneBookSlice';

const rootReducer = combineReducers({
  contacts: phoneBookSlice,
});

export default rootReducer;
