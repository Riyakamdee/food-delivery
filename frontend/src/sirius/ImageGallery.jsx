import React, { useState } from 'react';
import './ImageGallery.css'; // Assuming CSS is in a separate file

const ImageGallery = ({ images, orientation = 'horizontal', className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={`image-gallery ${orientation} ${className}`}>
      <div className="main-image-container">
        <img
          src={images[selectedIndex]}
          alt={`Main image ${selectedIndex + 1}`}
          className="main-image"
        />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;