'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './ImageSlideshow.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface ImageSlideshowProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  interval?: number; // Time in milliseconds between auto-slides
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  className?: string;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  interval = 5000,
  showControls = true,
  showIndicators = true,
  autoPlay = true,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Function to go to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Set up auto-sliding
  useEffect(() => {
    if (autoPlay && !isHovering) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [nextSlide, interval, autoPlay, isHovering]);

  // If no images provided, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className={`${styles.slideshow} ${className}`}>
        <div className={styles.slide}>No images to display</div>
      </div>
    );
  }

  return (
    <div 
      className={`${styles.slideshowContainer} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.slideshow}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <div className={styles.imageContainer}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
            {image.caption && (
              <div className={styles.caption}>{image.caption}</div>
            )}
          </div>
        ))}
      </div>

      {showControls && images.length > 1 && (
        <div className={styles.controls}>
          <button 
            className={`${styles.control} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button 
            className={`${styles.control} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      )}

      {showIndicators && images.length > 1 && (
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow; 