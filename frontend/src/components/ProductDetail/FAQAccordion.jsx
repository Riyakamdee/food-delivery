'use client';

import React, { useState } from 'react';
import styles from './FAQAccordion.module.css';

export default function FAQAccordion({ faqs }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.accordionContainer}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.accordionItem}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={expandedId === faq.id}
              >
                <span className={styles.question}>{faq.question}</span>
                <span
                  className={`${styles.arrow} ${expandedId === faq.id ? styles.expanded : ''}`}
                >
                  ▼
                </span>
              </button>
              {expandedId === faq.id && (
                <div className={styles.accordionContent}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
