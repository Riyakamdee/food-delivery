import React from 'react';
import styles from './TrustBadges.module.css';

export default function TrustBadges() {
  const badges = [
    {
      icon: '📋',
      title: 'BIFMA certified',
    },
    {
      icon: '🛡️',
      title: '3 Year Warranty',
    },
    {
      icon: '📦',
      title: '7-Days Returns',
    },
  ];

  return (
    <div className={styles.container}>
      {badges.map((badge, index) => (
        <div key={index} className={styles.badge}>
          <div className={styles.icon}>{badge.icon}</div>
          <p className={styles.title}>{badge.title}</p>
        </div>
      ))}
    </div>
  );
}
