import React from 'react';
import styles from './ShoppingOptions.module.css';

export default function ShoppingOptions() {
  return (
    <div className={styles.container}>
      <button className={styles.option}>
        <span className={styles.icon}>💬</span>
        <span className={styles.text}>Shop on WhatsApp</span>
      </button>
      <button className={styles.option}>
        <span className={styles.icon}>📹</span>
        <span className={styles.text}>Shop on Video Call</span>
      </button>
    </div>
  );
}
