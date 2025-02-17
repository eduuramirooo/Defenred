import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Slider.css';

const Slider = ({ images }: { images: any[] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos
        
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    return (
        <div className="photo-slider">
    
        <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <Link to={image.index} key={index}>
              <div
          className="slide"
          style={{ backgroundImage: `url(${image.url})` }}>
          <div className="slide-text">{image.text}</div>
              </div>
            </Link>
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
