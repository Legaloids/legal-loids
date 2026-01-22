import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        if (!isVisible) {
          setIsVisible(true);
          if (buttonRef.current) {
            gsap.fromTo(
              buttonRef.current,
              { scale: 0, opacity: 0, rotation: -180 },
              { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
            );
          }
        }
      } else {
        if (isVisible) {
          if (buttonRef.current) {
            gsap.to(buttonRef.current, {
              scale: 0,
              opacity: 0,
              rotation: 180,
              duration: 0.3,
              onComplete: () => setIsVisible(false),
            });
          } else {
            setIsVisible(false);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const scrollToTop = (e) => {
    e.preventDefault();
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
      aria-label="Scroll to top"
      onMouseEnter={(e) => {
        gsap.to(e.target, {
          scale: 1.15,
          y: -5,
          boxShadow: '0 20px 40px rgba(220, 38, 38, 0.4)',
          duration: 0.3,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.target, {
          scale: 1,
          y: 0,
          boxShadow: '0 10px 20px rgba(220, 38, 38, 0.3)',
          duration: 0.3,
        });
      }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default GoToTop;
