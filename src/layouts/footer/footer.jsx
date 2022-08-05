import React from 'react';
import styles from './footer.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navData, socialMediaData } from './footer.data';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <span className={styles.srOnly}>Fitness Blender</span>
          </NavLink>
          <p>
            WORKOUT COMPLETE
            <sup>™</sup>
          </p>
        </div>
        <nav className={styles.footerNavContainer}>
          {navData.map((item) => (
            <ul key={item.id} className={styles.footerNav}>
              {item.ul.map((item) => (
                <li key={item.id}>
                  <a
                    className={
                      item.featured
                        ? `${styles.footerNavTitle} ${styles.bold}`
                        : styles.footerNavTitle
                    }
                    href={item.url}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>
      </div>
      <div className={styles.container}>
        <div className={styles.footerEnd}>
          <p>
            Copyright © 2022 Fitness Blender. All rights reserved.
            <a
              className={styles.footerEndTitle}
              href='https://www.fitnessblender.com/page/terms-of-use-agreement'
            >
              Terms of Use
            </a>
            <a
              className={styles.footerEndTitle}
              href='https://www.fitnessblender.com/page/privacy-policy'
            >
              Privacy Policy
            </a>
          </p>
          <div className={styles.socialMediaContainer}>
            {socialMediaData.map((item) => (
              <a
                key={item.id}
                className={styles.socialMediaIcon}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={item.iconName} size='2x' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
