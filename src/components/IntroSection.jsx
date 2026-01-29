import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 -mt-32 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -10,
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                duration: 0.3,
              });
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Legal Services?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </p>
          </div>
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-xl shadow-2xl text-white transform hover:scale-105 transition-all duration-300"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -10,
                boxShadow: '0 25px 50px rgba(220, 38, 38, 0.3)',
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                boxShadow: '0 10px 30px rgba(220, 38, 38, 0.2)',
                duration: 0.3,
              });
            }}
          >
            <h2 className="text-3xl font-bold mb-4">Call now 088816 68058</h2>
            <p className="text-lg mb-4">
              Email us at{' '}
              <a href="mailto:legaloids@gmail.com" className="underline hover:text-primary-200 transition-colors">
                legaloids@gmail.com
              </a>
            </p>
            <p className="text-lg leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
