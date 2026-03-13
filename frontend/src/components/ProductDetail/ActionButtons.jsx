'use client';

import React from 'react';
import styles from './ActionButtons.module.css';

export default function ActionButtons({ onAddToCart }) {
  return (
    <div className={styles.container}>
      <button className={styles.addToCartBtn} onClick={onAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
}
