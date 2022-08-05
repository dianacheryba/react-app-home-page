import React, { useState } from 'react';
import styles from './menu-controls-search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const MenuSearch = () => {
  const [activeMenuSearch, setActiveMenuSearch] = useState(false);
  const [formstate, setFormState] = useState({ value: null });

  const onMenuSearchClick = () => {
    setActiveMenuSearch(!activeMenuSearch);
  };

  const onMenuSearchMouseLeave = () => {
    setActiveMenuSearch(false);
  };

  const handleChange = (event) => {
    setFormState({ value: event.target.value });
  };

  return (
    <div className={styles.searchContainer} onMouseLeave={() => onMenuSearchMouseLeave()}>
      <span
        className={
          activeMenuSearch
            ? `${styles.searchIconContainer} ${styles.searchIconContainerActive}`
            : styles.searchIconContainer
        }
        onClick={() => onMenuSearchClick()}
      >
        <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />
      </span>
      {activeMenuSearch && (
        <div className={styles.menuSearchDropdownContainer}>
          <div className={styles.menuSearchDropdown}>
            <form className={styles.menuSearchDropdownForm}>
              <label className={styles.srOnly}>Search</label>
              <input
                className={styles.menuSearchDropdownFormInput}
                placeholder='Keyword search'
                value={formstate.value}
                onChange={handleChange}
              ></input>
              <button className={styles.menuSearchDropdownFormButton}>
                <span className={styles.srOnly}>Search</span>
                <FontAwesomeIcon className={styles.searchIconWhite} icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSearch;
