import React from 'react';
import styles from './menu-controls.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faUserTie,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import MenuControlsDropdown from './menu-controls-dropdown/menu-controls-dropdown';
import MenuSearch from './menu-controls-search/menu-controls-search';

const MenuControls = ({ isStickyNavHeader }) => {
  return (
    <div className={styles.menuControls}>
      {!isStickyNavHeader && (
        <div className={styles.menuLogin}>
          <div className={styles.menuLoginId}>
            <span className={styles.menuLoginName}>Hi! Sign In</span>
            <span className={styles.menuLoginLabel}>
              My Fitness
              <FontAwesomeIcon
                className={styles.navLoginArrowIcon}
                icon={faCaretDown}
              />
            </span>
          </div>
          <div className={styles.menuControlsDropdown}>
            <MenuControlsDropdown />
          </div>
        </div>
      )}
      {isStickyNavHeader && (
        <div className={styles.avatar}>
          <FontAwesomeIcon className={styles.userTieIcon} icon={faUserTie} />
          <FontAwesomeIcon
            className={styles.navAvatarArrowIcon}
            icon={faCaretDown}
          />
          <div className={styles.menuControlsDropdown}>
            <MenuControlsDropdown />
          </div>
        </div>
      )}
      <div className={styles.menuUtil}>
        <MenuSearch />
        <div className={styles.menuCart}>
          <a href='https://www.fitnessblender.com/store/cart'>
            <span>
              <FontAwesomeIcon
                className={styles.menuCartIcon}
                icon={faBagShopping}
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuControls;
