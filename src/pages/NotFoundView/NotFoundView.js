import React from 'react';
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div>
      <h1 className={styles.errorMessage}>
        Error, 404! <br /> No matched routes!
      </h1>
    </div>
  );
}
