import { memo } from "react";

import PropTypes from "prop-types";

import styles from './contactListItem.module.css'

function ContactListItem({name, phone, removeContacts, id}) {
    return (
        <li className={styles.item}><span className={styles.name}>{name}:</span> <span className={styles.text}>{phone}</span>
            <button className={styles.btn} onClick={() => removeContacts(id)}>Delete</button></li>
    )
}

ContactListItem.defaultProps = {
    name: '',
    phone: '',
    removeContacts: () => { },
    id: '',
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    removeContacts: PropTypes.func.isRequired,
}

export default memo(ContactListItem);