'use client';

import React from 'react';
import styles from './QuantitySelector.module.css';

export default function QuantitySelector({ quantity, onQuantityChange }) {
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>Quantity:</label>
      <div className={styles.quantityControl}>
        <button
          className={`${styles.button} ${quantity === 1 ? styles.disabled : ''}`}
          onClick={handleDecrement}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            const val = parseInt(e.target.value);
            if (val > 0) {
              onQuantityChange(val);
            }
          }}
          className={styles.input}
          min="1"
          aria-label="Product quantity"
        />
        <button
          className={styles.button}
          onClick={handleIncrement}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}
