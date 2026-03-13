'use client';

import React from 'react';
import styles from './VariantSelector.module.css';

export default function VariantSelector({ variants, selectedVariant, onVariantChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Choose a variant:</label>
      <div className={styles.variantGrid}>
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={`${styles.variantButton} ${selectedVariant === variant.id ? styles.active : ''}`}
            onClick={() => onVariantChange(variant.id)}
          >
            <span
              className={styles.colorDot}
              style={{ backgroundColor: variant.color }}
            />
            <span className={styles.variantLabel}>{variant.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
