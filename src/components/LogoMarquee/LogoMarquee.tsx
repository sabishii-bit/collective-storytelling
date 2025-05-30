'use client';

import React, { useState, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Link from 'next/link';
import { wineries } from './wineryData';
import { distilleries } from './distilleryData';
import { chocolatiers } from './chocolatierData';
import styles from './LogoMarquee.module.css';

interface LogoMarqueeProps {
  speed?: number;
  className?: string;
  gradientWidth?: number;
  gradientColor?: string;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  logoHeight?: number;
  logoWidth?: number;
  fadeEdgeColor?: string;
  dataSource?: 'wineries' | 'distilleries' | 'chocolatiers';
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({ 
  speed = 25, 
  className = '',
  gradientWidth = 50,
  gradientColor = 'white',
  pauseOnHover = true,
  direction = 'left',
  logoHeight = 120,
  logoWidth = 180,
  fadeEdgeColor = 'white',
  dataSource = 'wineries'
}) => {
  // Track hover state for logos
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Track screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine which data to use based on dataSource prop
  const logosData = dataSource === 'distilleries' 
    ? distilleries 
    : dataSource === 'chocolatiers'
      ? chocolatiers
      : wineries;

  // Determine if gradient should be shown
  const showGradient = gradientWidth > 0 && gradientColor !== 'transparent';

  // Update screen size state on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    // Check on mount
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Force visibility after component mount
  useEffect(() => {
    // Pre-load all images
    const preloadImages = async () => {
      const imagePromises = logosData.map((logo) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = logo.logoSrc;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      
      try {
        // Wait for all images to load
        await Promise.all(imagePromises);
        // Then make component visible
        setIsVisible(true);
      } catch (error) {
        // If any images fail to load, still show the component
        console.error('Error preloading some logo images:', error);
        setIsVisible(true);
      }
    };
    
    preloadImages();
    
    // Fallback in case preloading takes too long
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [logosData]);

  // Use Intersection Observer to detect when marquee is in viewport
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Force a re-render when the marquee becomes visible
            setIsVisible(true);
            // Once it's visible, we don't need to observe anymore
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
    );
    
    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Adjust push and scale amounts based on screen size
  const getResponsiveTransform = (baseTransform: string): string => {
    if (isMobile) {
      // Reduce the transform effects for mobile
      return baseTransform
        .replace('scale(1.2)', 'scale(1.15)')
        .replace('-25px', '-15px')
        .replace('25px', '15px')
        .replace('scale(0.85)', 'scale(0.9)')
        .replace('scale(0.95)', 'scale(0.95)');
    }
    
    if (isTablet) {
      // Slightly adjust for tablets
      return baseTransform
        .replace('-25px', '-20px')
        .replace('25px', '20px');
    }
    
    return baseTransform;
  };

  // Function to determine the transform for each logo based on its position relative to hovered logo
  const getLogoTransform = (index: number) => {
    if (hoveredIndex === null) return '';
    
    let baseTransform = '';
    const totalLogos = logosData.length;
    
    // Calculate relative position with circular wrapping
    // For example, if hovering last item, first item is considered "next"
    const relativePosition = (totalLogos + index - hoveredIndex) % totalLogos;
    
    // If this is the hovered logo
    if (relativePosition === 0) {
      baseTransform = 'scale(1.2)';
    }
    // If this is the logo to the "left" of the hovered logo (could be last item if first is hovered)
    else if (relativePosition === totalLogos - 1) {
      baseTransform = 'translateX(-25px) scale(0.85)';
    }
    // If this is the logo to the "right" of the hovered logo (could be first item if last is hovered)
    else if (relativePosition === 1) {
      baseTransform = 'translateX(25px) scale(0.85)';
    }
    // For logos that are two positions away (with circular wrapping)
    else if (relativePosition === totalLogos - 2 || relativePosition === 2) {
      baseTransform = 'scale(0.95)';
    }
    
    return getResponsiveTransform(baseTransform);
  };

  // Function to determine the opacity for each logo based on its position relative to hovered logo
  const getLogoOpacity = (index: number) => {
    if (hoveredIndex === null) return 0.85;
    
    const totalLogos = logosData.length;
    const relativePosition = (totalLogos + index - hoveredIndex) % totalLogos;
    
    if (relativePosition === 0) {
      return 1;
    }
    
    if (relativePosition === 1 || relativePosition === totalLogos - 1) {
      return 0.7;
    }
    
    return 0.85;
  };

  // Adjust fade width based on screen size
  const getFadeWidth = () => {
    if (isMobile) return 60;
    if (isTablet) return 80;
    return 100;
  };

  // Adjust marquee speed based on screen size
  const getResponsiveSpeed = () => {
    if (isMobile) return speed * 0.7; // Slower on mobile
    if (isTablet) return speed * 0.85; // Slightly slower on tablet
    return speed;
  };
  
  // Adjust marquee padding based on screen size
  const getMarqueePadding = () => {
    if (isMobile) return 'py-6';
    if (isTablet) return 'py-8';
    return 'py-10';
  };

  return (
    <div 
      className={`${styles.logoMarqueeContainer} ${className}`} 
      ref={containerRef}
      style={{ visibility: isVisible ? 'visible' : 'hidden' }}
    >
      {/* Fade edges for smooth entrance/exit */}
      <div 
        className={`${styles.fadeEdge} ${styles.fadeLeft}`}
        style={{ 
          background: `linear-gradient(to right, ${fadeEdgeColor}, transparent)`,
          width: `${getFadeWidth()}px`
        }}
      />
      <div 
        className={`${styles.fadeEdge} ${styles.fadeRight}`}
        style={{ 
          background: `linear-gradient(to left, ${fadeEdgeColor}, transparent)`,
          width: `${getFadeWidth()}px`
        }}
      />
      
      <Marquee
        speed={getResponsiveSpeed()}
        pauseOnHover={pauseOnHover}
        gradient={showGradient}
        gradientWidth={gradientWidth}
        gradientColor={gradientColor}
        direction={direction}
        className={getMarqueePadding()}
      >
        {logosData.map((logo, index) => (
          <Link 
            href={logo.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoItem}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            aria-label={`Visit ${logo.name} website`}
            style={{
              transform: getLogoTransform(index),
              zIndex: hoveredIndex === index ? 10 : 1
            }}
          >
            <div className={styles.logoImageContainer}>
              <Image
                src={logo.logoSrc}
                alt={`${logo.name} logo`}
                width={isMobile ? logoWidth * 0.7 : isTablet ? logoWidth * 0.85 : logoWidth}
                height={isMobile ? logoHeight * 0.7 : isTablet ? logoHeight * 0.85 : logoHeight}
                className={styles.logoImage}
                style={{ 
                  opacity: getLogoOpacity(index)
                }}
                priority={index < 5}
                loading="eager"
                unoptimized={true}
              />
            </div>
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee; 