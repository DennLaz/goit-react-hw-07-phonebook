import { memo } from 'react'

import PropTypes from 'prop-types';

import styles from './filter.module.css'

function Filter({ onChange }) {
    return (
        <div className={styles.wrap}>
          <label className={styles.label}>
            Find contacts by name
            <input
              className={styles.input}
              onChange={onChange}
              type="text"
              name="filter"
            />
          </label>
        </div>
    )
}

Filter.defaultProps = {
    onChange: ()=>{},
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default memo(Filter);