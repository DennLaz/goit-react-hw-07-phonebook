// import { Component } from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './app.module.css';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contacts'));
    if (items?.length) {
      setContacts(items);
    }
  }, []);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      firstRender.current = false;
    }
  }, [contacts]);

  const addContacts = useCallback(
    ({ name, number }) => {
      const newContact = {
        name,
        number,
        id: nanoid(),
      };
      setContacts(prevState => {
        const findName = contacts.find(el => el.name === name);
        if (!findName) {
          return [...prevState, newContact];
        } else {
          alert(`${newContact.name} is already in contacts`);
        }
      });
    },
    [contacts]
  );

  const removeContacts = useCallback(
    id => {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== id)
      );
    },
    [setContacts]
  );

  const handleFilter = useCallback(
    ({ target }) => {
      return setFilter(target.value);
    },
    [setFilter]
  );

  const getFiltredContacts = useCallback(() => {
    if (!filter) {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filterContacts = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filterContacts;
  }, [contacts, filter]);

  const contact = getFiltredContacts();

  return (
    <div className={styles.container}>
      <Section title="Phonebook">
        <ContactsForm onSubmit={addContacts} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={handleFilter} />
        <ContactList contact={contact} removeContacts={removeContacts} />
      </Section>
    </div>
  );
}

// export class App extends Component {
//   // state = {
//   //   contacts: [],
//   //   filter: '',
//   // };

//   // addContacts = ({ name, number }) => {
//   //   const newContact = {
//   //     name,
//   //     number,
//   //     id: nanoid(),
//   //   };
//   //   this.setState(prevState => {
//   //     const findName = prevState.contacts.find(el => el.name === name);
//   //     if (!findName) {
//   //       return {contacts:[...prevState.contacts, newContact ]}
//   //     } else {
//   //       alert(`${newContact.name} is already in contacts`)
//   //     }
//   //   });
//   // };

//   // removeContacts = id => {
//   //   this.setState(({ contacts }) => {
//   //     return {
//   //       contacts: contacts.filter(contact => contact.id !== id),
//   //     };
//   //   });
//   // };

//   // handleFilter = ({ target }) => {
//   //   this.setState({
//   //     filter: target.value,
//   //   });
//   // };

//   // getFiltredContacts = () => {
//   //   const { filter, contacts } = this.state;
//   //   if (!filter) {
//   //     return contacts;
//   //   }
//   //   const filterValue = filter.toLowerCase();
//   //   const filterContacts = contacts.filter(({ name }) => {
//   //     const nameValue = name.toLowerCase();
//   //     return nameValue.includes(filterValue);
//   //   });
//   //   return filterContacts;
//   // };

//   // render() {
//   //   const { addContacts, removeContacts, handleFilter } = this;

//     // const contacts = this.getFiltredContacts();

//     // return (
//     //   <div className={styles.container}>
//     //     <Section title="Phonebook">
//     //       <ContactsForm onSubmit={addContacts} />
//     //     </Section>
//     //     <Section title="Contacts">
//     //       <div className={styles.wrap}>
//     //          <label className={styles.label}>
//     //         Find contacts by name
//     //         <input className={styles.input} onChange={handleFilter} type="text" name="filter" />
//     //       </label>
//     //      </div>
//     //       <ContactList contacts={contacts} removeContacts={removeContacts} />
//     //     </Section>
//     //   </div>
//     // );
//   // }
// }
