import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content) {
      gsap.fromTo(
        content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
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
    <section
      ref={sectionRef}
      className="relative py-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(/images/hero_2.jpg)' }}
    >
      <div className="absolute inset-0 bg-primary-900/80"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Far far away, behind the word mountains
            </h2>
            <p className="text-xl md:text-2xl text-gray-200">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </p>
            <div className="pt-4">
              <button
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onMouseEnter={(e) => {
                  gsap.to(e.target, {
                    scale: 1.1,
                    y: -5,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    duration: 0.3,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, {
                    scale: 1,
                    y: 0,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    duration: 0.3,
                  });
                }}
              >
                Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
