
import { useCallback, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchPhoneBook,
  addPhoneBook,
  removePhoneBook,
} from '../redux/phoneBook/phoneBookOperations'
import {getPhoneBook} from '../redux/phoneBook/phoneBookSelectors'

import Section from './Section';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './app.module.css';

export function App() {
  const {items} = useSelector(getPhoneBook);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoneBook())
  }, [dispatch])

  const onAddContacts = useCallback((data) => {
    dispatch(addPhoneBook(data))
  }, [dispatch])


  const onRemoveContact = useCallback((id) => {
    dispatch(removePhoneBook(id))
  }, [dispatch])

  
  return (
    <div className={styles.container}>
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContacts} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList contact={items} removeContacts={onRemoveContact} />
      </Section>
    </div>
  );
}

