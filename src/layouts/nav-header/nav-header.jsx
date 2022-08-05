import React from 'react';
import styles from './nav-header.module.css';
import MenuMain from './menu-main/menu-main';
import MenuControls from './menu-controls/menu-controls';
import { NavLink } from 'react-router-dom';

const Header = ({ isStickyNavHeader, marginBottom }) => {
  return (
    <header className={styles.navHeaderContainer}>
      <h1 className={styles.logo} style={{ marginBottom: marginBottom }}>
        <NavLink to='/'>
          <span className={styles.srOnly}>Fitness Blender</span>
        </NavLink>
      </h1>
      <MenuMain />
      <MenuControls {...isStickyNavHeader} />
    </header>
  );
};

export default Header;
