import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (_, { payload }) => payload,
  },
});

export const { change } = filterReducer.actions;

export default filterReducer.reducer;
