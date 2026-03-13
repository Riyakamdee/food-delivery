import React from 'react';
import styles from './KeyBenefits.module.css';

export default function KeyBenefits({ benefits }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Key Benefits</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <span className={styles.text}>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
