import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (section && image && content) {
      gsap.fromTo(
        image,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        content.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div ref={imageRef} className="md:col-span-6">
            <img
              src="/images/hero_1.jpg"
              alt="Legal office"
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-1"></div>
          <div ref={contentRef} className="md:col-span-5 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome To Our Legal Office
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <button
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.05, x: 5, duration: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, x: 0, duration: 0.2 });
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
