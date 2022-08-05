import React, { useState } from 'react';
import styles from './menu-main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { menuData } from './menu-main.data';

const MenuMain = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const onMenuItemMouseEnter = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const onMenuItemMouseLeave = () => {
    setActiveMenuItem(null);
  };

  return (
    <ul className={styles.menuMain}>
      {menuData.map((item) => (
        <li
          key={item.id}
          className={
            item.id === activeMenuItem
              ? `${styles.menuItem} ${styles.menuItemActive}`
              : styles.menuItem
          }
          onMouseEnter={() => onMenuItemMouseEnter(item.id)}
          onMouseLeave={() => onMenuItemMouseLeave()}
        >
          <a
            className={
              item.featured
                ? `${styles.menuItemContainer} ${styles.featured}`
                : styles.menuItemContainer
            }
            href={item.url}
          >
            <span className={styles.item}>
              {item.title}
              {item.submenu && (
                <FontAwesomeIcon
                  className={styles.navArrowIcon}
                  icon={faCaretDown}
                />
              )}
            </span>
          </a>
          {item.id === activeMenuItem && item.submenu && (
            <ul className={styles.submenu}>
              {item.submenu.map((item) => (
                <li key={item.id} className={styles.submenuItem}>
                  <a href={item.url} className={styles.submenuItemContainer}>
                    <span className={styles.submenuItemImageContainer}>
                      <i
                        className={styles.submenuItemImage}
                        style={{
                          backgroundPosition: item.backgroundPosition,
                        }}
                      ></i>
                    </span>
                    <span className={styles.submenuItemTitle}>
                      {item.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuMain;
