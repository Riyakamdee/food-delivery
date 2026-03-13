'use client';

import React, { useState } from 'react';
import ImageGallery from './ProductDetail/ImageGallery';
import ProductInfo from './ProductDetail/ProductInfo';
import VariantSelector from './ProductDetail/VariantSelector';
import QuantitySelector from './ProductDetail/QuantitySelector';
import ActionButtons from './ProductDetail/ActionButtons';
import TrustBadges from './ProductDetail/TrustBadges';
import ShoppingOptions from './ProductDetail/ShoppingOptions';
import ProductDescription from './ProductDetail/ProductDescription';
import KeyBenefits from './ProductDetail/KeyBenefits';
import BankOffers from './ProductDetail/BankOffers';
import ProductDimensions from './ProductDetail/ProductDimensions';
import FAQAccordion from './ProductDetail/FAQAccordion';
import MobileBottomBar from './ProductDetail/MobileBottomBar';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage() {
  const [selectedVariant, setSelectedVariant] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 200);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items of variant ${selectedVariant} to cart`);
  };

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} items of variant ${selectedVariant}`);
  };

  const mockProduct = {
    id: 1,
    title: 'Premium Ergonomic Chair',
    subtitle: 'Advanced comfort for extended work sessions',
    originalPrice: 45000,
    discountedPrice: 32999,
    discountPercentage: 27,
    emiText: 'EMI available from ₹2,750/month',
    rating: 4.8,
    reviews: 1250,
    mainImage: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200&q=80',
      'https://images.unsplash.com/photo-1611269431281-ca522f8bb126?w=200&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=80',
      'https://images.unsplash.com/photo-1523217311519-3375a9655a5f?w=200&q=80',
    ],
    variants: [
      { id: 'black', label: 'Black', color: '#000' },
      { id: 'white', label: 'White', color: '#fff' },
      { id: 'grey', label: 'Grey', color: '#a0a0a0' },
      { id: 'navy', label: 'Navy', color: '#001f3f' },
    ],
    description:
      'Experience ultimate comfort with our premium ergonomic chair. Designed with advanced lumbar support and high-density foam cushioning, this chair is perfect for professionals who spend extended hours at their desk. The chair features a 360-degree swivel base and height-adjustable armrests for customized comfort.',
    benefits: [
      'Advanced lumbar support system',
      'Premium high-density foam cushioning',
      'Height-adjustable armrests',
      'Breathable mesh backrest',
      '360-degree smooth swivel',
      '10-year warranty',
    ],
    faqs: [
      {
        id: 1,
        question: 'What is the warranty period?',
        answer:
          'This chair comes with a comprehensive 10-year warranty covering all manufacturing defects and mechanical issues.',
      },
      {
        id: 2,
        question: 'Is assembly required?',
        answer:
          'Yes, basic assembly is required. We provide detailed instructions and video guides. Professional installation is available at additional cost.',
      },
      {
        id: 3,
        question: 'What is the weight capacity?',
        answer:
          'This chair can support up to 150 kg with full comfort and stability. The heavy-duty base ensures durability even with maximum load.',
      },
      {
        id: 4,
        question: 'Can I return or exchange the chair?',
        answer:
          'Yes, we offer a 30-day return policy. If you are not completely satisfied, you can return the chair for a full refund or exchange it for another variant.',
      },
    ],
  };

  return (
    <div className={styles.pageContainerWrapper}>
      <div className={styles.pageContainer}>
        <div className={styles.mainContent}>
          <ImageGallery
            mainImage={mockProduct.mainImage}
            thumbnails={mockProduct.thumbnails}
          />
          <div className={`${styles.rightColumn} ${isSticky ? styles.stickyActive : ''}`}>
            <ProductInfo
              title={mockProduct.title}
              subtitle={mockProduct.subtitle}
              originalPrice={mockProduct.originalPrice}
              discountedPrice={mockProduct.discountedPrice}
              discountPercentage={mockProduct.discountPercentage}
              emiText={mockProduct.emiText}
              rating={mockProduct.rating}
              reviews={mockProduct.reviews}
            />
            <VariantSelector
              variants={mockProduct.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />
            <div className={styles.divider} />
            <QuantitySelector
              quantity={quantity}
              onQuantityChange={setQuantity}
            />

                <div className={styles.mobileOnlyButton}>
              <button className={styles.mobileAddToCart} onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            {/* <ActionButtons
              onAddToCart={handleAddToCart}
            /> */}
            <TrustBadges />
            <ShoppingOptions />
            <BankOffers />
            <ProductDimensions />
          </div>
        </div>
        <ProductDescription description={mockProduct.description} />
        <KeyBenefits benefits={mockProduct.benefits} />
        <FAQAccordion faqs={mockProduct.faqs} />
      </div>
      <MobileBottomBar
        price={mockProduct.discountedPrice}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
