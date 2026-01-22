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
      description: 'Comprehensive legal services for property transactions, development projects, and real estate disputes with expertise in commercial and residential matters.',
    },
    {
      icon: LockClosedIcon,
      title: 'Insurance Law',
      description: 'Strategic representation in insurance claims, coverage disputes, and regulatory compliance to protect your interests and maximize recovery.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Corporate & Business Law',
      description: 'End-to-end corporate legal services including M&A, corporate governance, compliance, and strategic business transactions.',
    },
  ];

  const extendedPracticeAreas = [
    ...practiceAreas,
    {
      icon: ScaleIcon,
      title: 'Personal Injury',
      description: 'Dedicated representation for personal injury cases, ensuring fair compensation and justice for victims of accidents and negligence.',
    },
    {
      icon: HeartIcon,
      title: 'Medical Negligence',
      description: 'Expert legal counsel for medical malpractice cases, protecting patients\' rights and seeking appropriate compensation for medical errors.',
    },
    {
      icon: ScaleIcon,
      title: 'Criminal Defense',
      description: 'Experienced criminal defense representation protecting your rights and providing strategic defense in all criminal matters.',
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {title && (
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {areasToShow.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group bg-white p-8 lg:p-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 transform hover:-translate-y-1"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -4,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
              >
                <div className="mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-14 h-14 text-primary-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{area.description}</p>
              </div>
            );
          })}
        </div>
        {showViewMore && (
          <div className="text-center mt-16">
            <button
              className="px-10 py-3.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2 uppercase tracking-wide"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.02, x: 2, duration: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, x: 0, duration: 0.2 });
              }}
            >
              View All Practice Areas
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
