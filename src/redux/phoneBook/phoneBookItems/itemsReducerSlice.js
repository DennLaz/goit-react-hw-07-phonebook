import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const itemsReducer = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add: {
      reducer(store, { payload }) {
        store.push(payload);
      },
      prepare(data) {
        return {
          payload: { ...data, id: nanoid() },
        };
      },
    },
    remove: (store, { payload }) => [
      ...store.filter(({ id }) => id !== payload),
    ],
  },
});

export const { add, remove } = itemsReducer.actions;

export default itemsReducer.reducer;
