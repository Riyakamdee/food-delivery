import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming React Router is used for navigation
import ImageGallery from './ImageGallery'; // Import the reusable ImageGallery component

const ProductDetailPage1 = () => {
  const { productId } = useParams(); // Get productId from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [faqOpen, setFaqOpen] = useState({}); // For accordion state

  const navigate = useNavigate();

  // Fetch product data from backend API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/products/${productId}`); // Adjust URL to your backend endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        
        // Map backend fields to UI structure (adjust based on your actual backend response)
        // Assuming backend returns: { name, price, discountPrice, discountPercent, images, variants, emi, badges, description, features, faq }
        // If field names differ, map them here (e.g., if backend uses 'title' instead of 'name', do: name: data.title)
        const mappedProduct = {
          name: data.name,
          price: data.price,
          discountPrice: data.discountPrice,
          discountPercent: data.discountPercent,
          images: data.images || [], // Fallback to empty array
          variants: data.variants || [], // Fallback to empty array
          emi: data.emi,
          badges: data.badges || [],
          description: data.description,
          features: data.features || [],
          faq: data.faq || [],
        };
        
        setProduct(mappedProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  // Get current variant data
  const currentVariant = product ? product.variants[selectedVariant] : null;
  const currentPrice = currentVariant?.price || product?.price;
  const currentDiscountPrice = currentVariant?.discountPrice || product?.discountPrice;
  const currentImages = currentVariant?.images || product?.images;
  const isOutOfStock = currentVariant?.stock === 0;

  const handleAddToCart = () => {
    if (isOutOfStock) return; // Prevent adding if out of stock
    // Assume addToCart is a function from context or props
    // For example: addToCart({ ...product, selectedVariant, quantity });
    console.log('Add to cart:', { product, selectedVariant, quantity });
    // Call existing cart function here
  };

  const handleBuyNow = () => {
    // Redirect to cart/checkout
    navigate('/cart'); // Or '/checkout'
  };

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Image Gallery - Now using variant-specific images */}
        <div style={{ flex: 1 }}>
          <ImageGallery images={currentImages} orientation="vertical" />
        </div>

        {/* Product Info */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>{product.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#e74c3c' }}>₹{currentDiscountPrice}</span>
            <span style={{ textDecoration: 'line-through', color: '#7f8c8d' }}>₹{currentPrice}</span>
            <span style={{ backgroundColor: '#e74c3c', color: 'white', padding: '2px 5px', borderRadius: '4px' }}>
              {product.discountPercent}% OFF
            </span>
          </div>
          <p style={{ marginBottom: '10px' }}>{product.emi}</p>
          <div style={{ marginBottom: '20px' }}>
            {product.badges.map((badge, index) => (
              <span key={index} style={{ backgroundColor: '#f39c12', color: 'white', padding: '5px 10px', marginRight: '10px', borderRadius: '4px' }}>
                {badge}
              </span>
            ))}
          </div>

          {/* Variant Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Color:</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {product.variants.map((variant, index) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(index)}
                  style={{
                    padding: '10px',
                    border: selectedVariant === index ? '2px solid #007bff' : '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: selectedVariant === index ? '#e3f2fd' : 'white',
                    cursor: 'pointer',
                    opacity: variant.stock === 0 ? 0.5 : 1,
                  }}
                  disabled={variant.stock === 0}
                >
                  {variant.name} {variant.stock === 0 ? '(Out of Stock)' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Quantity:</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
                disabled={isOutOfStock}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}
                disabled={isOutOfStock}
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '10px 20px',
                backgroundColor: isOutOfStock ? '#ccc' : '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: isOutOfStock ? 'not-allowed' : 'pointer',
                flex: 1,
              }}
              disabled={isOutOfStock}
            >
              {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <button
              onClick={handleBuyNow}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div style={{ marginTop: '40px' }}>
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      {/* Key Features */}
      <div style={{ marginTop: '40px' }}>
        <h2>Key Features</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* FAQ Accordion */}
      <div style={{ marginTop: '40px' }}>
        <h2>FAQ</h2>
        {product.faq.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '4px', marginBottom: '10px' }}>
            <button
              onClick={() => toggleFaq(index)}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              {item.question}
            </button>
            {faqOpen[index] && (
              <div style={{ padding: '10px', borderTop: '1px solid #ddd' }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage1;