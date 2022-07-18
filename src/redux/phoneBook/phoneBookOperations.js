import * as api from '../../shared/api/phoneBook';
import * as actions from './phoneBookActions';

export const fetchPhoneBook = () => {
  const func = async dispatch => {
    dispatch(actions.fetchPhoneBookRequest());
    try {
      const data = await api.getPhoneBook();
      dispatch(actions.fetchPhoneBookSuccess(data));
    } catch (error) {
      dispatch(actions.fetchPhoneBookError(error));
    }
  };

  return func;
};

export const addPhoneBook = data => {
  const func = async (dispatch, getState) => {
    const { phoneBook } = getState();
    const { name } = data;
    const isFind = phoneBook.find(el => el.name === name);
    if (isFind) {
      return alert(`Contact with the name ${name} is already in your list`);
    }
    dispatch(actions.addPhoneBookRequest());
    try {
      const result = await api.addPhoneBook(data);
      dispatch(actions.addPhoneBookSuccess(result));
    } catch (error) {
      dispatch(actions.addPhoneBookError(error));
    }
  };

  return func;
};
