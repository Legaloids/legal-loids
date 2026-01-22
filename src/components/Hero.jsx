import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const slidesRef = useRef([]);

  const slides = [
    {
      image: '/images/hero_1.jpg',
      title: 'Defend Your Constitutional Right with Legal Help',
      subtitle: 'Professional Legal Services You Can Trust',
      buttonText: 'Get Consultation',
    },
    {
      image: '/images/hero_3.jpg',
      title: 'Expert Legal Representation',
      subtitle: 'Protecting Your Rights with Excellence',
      buttonText: 'Learn More',
    },
    {
      image: '/images/hero_2.jpg',
      title: 'Your Trusted Legal Partner',
      subtitle: 'Committed to Justice and Your Success',
      buttonText: 'Contact Us',
    },
  ];

  useEffect(() => {
    // Animate hero text on mount
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  useEffect(() => {
    // Animate slide transitions
    slidesRef.current.forEach((slide, index) => {
      if (index === currentSlide) {
        gsap.fromTo(
          slide,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        );
      } else {
        gsap.to(slide, { opacity: 0, duration: 0.5 });
      }
    });

    // Animate text for current slide
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div ref={textRef} className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-200 font-light">
                {slides[currentSlide].subtitle}
              </h2>
              <div className="pt-4">
                <button
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={(e) => {
                    gsap.to(e.target, { scale: 1.05, duration: 0.2 });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.target, { scale: 1, duration: 0.2 });
                  }}
                >
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary-500 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
