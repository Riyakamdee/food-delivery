import React from 'react';
import styles from './ProductDescription.module.css';

export default function ProductDescription({ description }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Product Description</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
