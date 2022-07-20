
import { useCallback, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchPhoneBook,
  addPhoneBook,
  removePhoneBook,
} from '../redux/phoneBook/phoneBookOperations'
import { getPhoneBook } from '../redux/phoneBook/phoneBookSelectors'


import Section from './Section';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './app.module.css';

export function App() {
  const [filter, setFilter] = useState('');
  const { items, loading } = useSelector(getPhoneBook);


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

  const onFilter = (e)=>{
      const { value } = e.target;
      setFilter(value);
    }
    const getFilteredItems = () => {
    if (!filter) {
      return items;
    }
    return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    }

    const filteredItems = getFilteredItems();


  
  return (
    <div className={styles.container}>
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContacts} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={onFilter} />
        {loading && <p>...Loading</p>}
        <ContactList contact={filteredItems} removeContacts={onRemoveContact} />
      </Section>
    </div>
  );
}

