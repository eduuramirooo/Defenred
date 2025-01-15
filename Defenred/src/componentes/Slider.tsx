import React, { useState } from 'react';
import './css/Slider.css';

const Slider = ({ images }: { images: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="photo-slider">
    <button className="slider-btn prev-btn" onClick={prevSlide}>
      &#10094;
    </button>

    <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="slide"
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="slide-text">{image.text}</div>
        </div>
      ))}
    </div>

    <button className="slider-btn next-btn" onClick={nextSlide}>
      &#10095;
    </button>

    <div className="slider-dots">
      {images.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        ></span>
      ))}
    </div>
  </div>
);
};

export default Slider;


/* Example CSS (PhotoSlider.css) */
