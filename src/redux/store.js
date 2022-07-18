import { createStore } from 'redux';

const initialStore = [];

const reducer = (store = initialStore) => {
  return store;
};

const store = createStore(reducer);
