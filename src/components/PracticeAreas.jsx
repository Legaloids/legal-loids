import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BuildingOfficeIcon,
  LockClosedIcon,
  BriefcaseIcon,
  ScaleIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const PracticeAreas = ({ title, description, showViewMore = false }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const practiceAreas = [
    {
      icon: BuildingOfficeIcon,
      title: 'Real Estate Law',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
    {
      icon: LockClosedIcon,
      title: 'Insurance Law',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
    {
      icon: BriefcaseIcon,
      title: 'Business Law',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
  ];

  const extendedPracticeAreas = [
    ...practiceAreas,
    {
      icon: ScaleIcon,
      title: 'Personal Injury',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
    {
      icon: HeartIcon,
      title: 'Medical Negligence',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
    {
      icon: ScaleIcon,
      title: 'Criminal Defense',
      description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    },
  ];

  const areasToShow = showViewMore ? extendedPracticeAreas : practiceAreas;

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
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
  }, [areasToShow]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasToShow.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-300 transform hover:-translate-y-2"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <IconComponent className="w-16 h-16 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
        {showViewMore && (
          <div className="text-center mt-12">
            <button
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.05, x: 5, duration: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, x: 0, duration: 0.2 });
              }}
            >
              View More
              <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeAreas;
