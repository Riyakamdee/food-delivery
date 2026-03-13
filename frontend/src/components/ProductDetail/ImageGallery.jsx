'use client';

import React, { useState } from 'react';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ mainImage: initialMainImage, thumbnails }) {
  const [mainImage, setMainImage] = useState(initialMainImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleThumbnailClick = (thumb) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMainImage(thumb);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainImageContainer}>
        <img
          src={mainImage || '/placeholder.svg'}
          alt="Product"
          className={`${styles.mainImage} ${isTransitioning ? styles.fadingOut : ''}`}
        />
      </div>
      <div className={styles.thumbnailsContainer}>
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${mainImage === thumb ? styles.active : ''}`}
            onClick={() => handleThumbnailClick(thumb)}
            aria-label={`View product image ${index + 1}`}
            type="button"
          >
            <img src={thumb || '/placeholder.svg'} alt={`View ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
