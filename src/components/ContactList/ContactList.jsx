import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import styles from './contactList.module.css';

const ContactList = ({ contact, removeContacts }) => {
  const contactEl = contact.map(({ id, name, phone }) => (
    <ContactListItem
      key={id}
      removeContacts={removeContacts}
      id={id}
      name={name}
      phone={phone}
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
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
