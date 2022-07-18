
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  add,
  remove,
} from '../redux/phoneBook/phoneBookItems/itemsReducerSlice';
import { getPhoneBook } from 'redux/phoneBook/phoneBookItems/itemsSelector';

import { change } from 'redux/phoneBook/phoneBookFilter/filterReducerSlice';
import { getFilteredItems } from 'redux/phoneBook/phoneBookFilter/filterSelector';

import Section from './Section';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './app.module.css';

export function App() {
  const phoneBook = useSelector(getPhoneBook);
  const filteredItems = useSelector(getFilteredItems);

  const dispatch = useDispatch();

  const onAddContacts = useCallback(
    obj => {
      const newContact = phoneBook.find(
        ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
      );

      if (!newContact) {
        dispatch(add(obj));
        return;
      } else {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    },
    [dispatch, phoneBook]
  );

  const onRemoveContact = useCallback((id) => {
    dispatch(remove(id))
  }, [dispatch])
  
  const onChangeFilterState = useCallback(({ target: { value } }) => {
    dispatch(change(value.trim()))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContacts} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={onChangeFilterState} />
        <ContactList contact={filteredItems} removeContacts={onRemoveContact} />
      </Section>
    </div>
  );
}

