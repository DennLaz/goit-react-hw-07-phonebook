import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import styles from './contactList.module.css';

const ContactList = ({ contact, removeContacts }) => {
  const contactEl = contact.map(({ id, name, number }) => (
    <ContactListItem
      key={id}
      removeContacts={removeContacts}
      id={id}
      name={name}
      number={number}
    />
  ));

  return <ul className={styles.list}>{contactEl}</ul>;
};

ContactList.defaultProps = {
  contact: [],
  removeContacts: () => {},
};

ContactList.propTypes = {
  removeContacts: PropTypes.func,
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
