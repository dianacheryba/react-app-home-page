import React from 'react';
import styles from './menu-controls-dropdown.module.css';

const MenuControlsDropdown = () => {
  return (
    <div className={styles.menuControlsDropdown}>
      <h2 className={styles.menuControlsDropdownTitle}>Join for Free!</h2>
      <p className={styles.menuControlsDropdownDescription}>
        Join for free and start building and tracking your workouts, get support from other Fitness Blender members and
        more!
      </p>
      <a className={`${styles.btn} ${styles.main}`} href='https://www.fitnessblender.com/membership'>
        Join
      </a>
      <a className={`${styles.btn} ${styles.signIn}`} href='https://www.fitnessblender.com/login'>
        Sign In
      </a>
    </div>
  );
};

export default MenuControlsDropdown;
