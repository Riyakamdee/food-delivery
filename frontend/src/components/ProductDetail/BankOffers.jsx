'use client';

import React, { useState } from 'react';
import styles from './BankOffers.module.css';

export default function BankOffers() {
  const [isExpanded, setIsExpanded] = useState(false);

  const offers = [
    {
      icon: '🏦',
      title: 'Free Coupon Worth ₹500',
      subtitle: 'on orders above ₹1499',
    },
    {
      icon: '💳',
      title: 'HDFC Bank EMI',
      subtitle: 'No cost EMI starting at ₹2,750',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Bank Offers</h3>
        <button
          className={styles.viewAllBtn}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'View Less' : 'View All'}
        </button>
      </div>

      <div className={`${styles.offersGrid} ${isExpanded ? styles.expanded : ''}`}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offer}>
            <div className={styles.icon}>{offer.icon}</div>
            <div className={styles.content}>
              <p className={styles.offerTitle}>{offer.title}</p>
              <p className={styles.offerSubtitle}>{offer.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
