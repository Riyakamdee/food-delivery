import React from 'react';
import styles from './ProductInfo.module.css';

export default function ProductInfo({
  title,
  subtitle,
  originalPrice,
  discountedPrice,
  discountPercentage,
  emiText,
  rating,
  reviews,
}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.ratingContainer}>
        <span className={styles.rating}>★ {rating}</span>
        <span className={styles.reviews}>({reviews.toLocaleString()} reviews)</span>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceRow}>
          <span className={styles.discountedPrice}>₹{discountedPrice.toLocaleString()}</span>
          <span className={styles.originalPrice}>₹{originalPrice.toLocaleString()}</span>
          <span className={styles.discountBadge}>{discountPercentage}% off</span>
        </div>
        <p className={styles.emiText}>{emiText}</p>
      </div>
    </div>
  );
}
