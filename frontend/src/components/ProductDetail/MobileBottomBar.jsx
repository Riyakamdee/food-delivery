'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './MobileBottomBar.module.css';

export default function MobileBottomBar({ price, onAddToCart }) {
  const [isVisible, setIsVisible] = useState(false);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bottomBarRef.current) return;

      const bottomBarTop = bottomBarRef.current.getBoundingClientRect().top;
      const isScrolledPast = bottomBarTop < window.innerHeight;

      setIsVisible(isScrolledPast);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bottomBarRef}
      className={`${styles.bottomBar} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.priceContainer}>
        <span className={styles.priceLabel}>Price</span>
        <span className={styles.price}>₹{price.toLocaleString('en-IN')}</span>
      </div>
      <button className={styles.addButton} onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
