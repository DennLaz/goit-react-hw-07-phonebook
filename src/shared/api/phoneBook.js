import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62d55a86d4406e523558f6ba.mockapi.io/contacts',
});

export const getPhoneBook = async () => {
  const { data } = instance.get('/');
  return data;
};

export const addPhoneBook = async data => {
  const { data: result } = instance.post('/', data);
  return result;
};

export const removePhoneBook = async id => {
  const { data } = instance.delete(`/${id}`);
  return data;
};
