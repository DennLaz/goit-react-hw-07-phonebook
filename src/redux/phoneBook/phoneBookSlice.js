import { createSlice } from '@reduxjs/toolkit';

import {
  fetchPhoneBook,
  addPhoneBook,
  removePhoneBook,
} from './phoneBookOperations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const pending = store => ({
  ...store,
  loading: true,
  error: null,
});

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: {
    /* FETCH */
    [fetchPhoneBook.pending]: pending,
    [fetchPhoneBook.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchPhoneBook.rejected]: rejected,
    /* ADD */
    [addPhoneBook.pending]: pending,
    [addPhoneBook.fulfilled]: (store, { payload }) => {
      store.items.push(payload);
      store.loading = false;
    },
    [addPhoneBook.rejected]: rejected,
    /* REMOVE */
    [removePhoneBook.pending]: pending,
    [removePhoneBook.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(({ id }) => id !== payload.id);
      store.loading = false;
    },
    [removePhoneBook.rejected]: rejected,
  },
});

export default phoneBookSlice.reducer;
