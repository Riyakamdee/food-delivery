'use client';

import React, { useState } from 'react';
import styles from './ProductDimensions.module.css';

export default function ProductDimensions() {
  const [isOpen, setIsOpen] = useState(false);

  const dimensions = [
    { label: 'Height', value: '120 cm' },
    { label: 'Width', value: '68 cm' },
    { label: 'Depth', value: '70 cm' },
    { label: 'Weight', value: '25 kg' },
    { label: 'Material', value: 'Mesh & Aluminum' },
  ];

  return (
    <div className={styles.container}>
      <button
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.headerContent}>
          <span className={styles.icon}>📐</span>
          <span className={styles.title}>Product Dimensions</span>
        </div>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          →
        </span>
      </button>

      {isOpen && (
        <div className={styles.content}>
          <div className={styles.dimensionsGrid}>
            {dimensions.map((dim, index) => (
              <div key={index} className={styles.dimension}>
                <span className={styles.label}>{dim.label}</span>
                <span className={styles.value}>{dim.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
