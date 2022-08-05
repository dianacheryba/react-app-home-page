import React from 'react';
import styles from './button-dark.module.css';

const ButtonDark = ({ url, text }) => (
  <div className={styles.buttonContainer}>
    <a className={styles.button} href={url}>
      {text}
    </a>
  </div>
);

export default ButtonDark;
