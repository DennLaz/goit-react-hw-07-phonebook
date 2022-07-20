import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/phoneBook';

export const fetchPhoneBook = createAsyncThunk(
  'phoneBook/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getPhoneBook();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPhoneBook = createAsyncThunk(
  'phoneBook/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addPhoneBook(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const { name, number } = data;
      const isFind = contacts.items.find(el => el.name === name);
      if (isFind) {
        alert(`Contact with the name ${name} is already in your list`);
        return false;
      }
    },
  }
);

export const removePhoneBook = createAsyncThunk(
  'phoneBook/remove',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.removePhoneBook(id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
