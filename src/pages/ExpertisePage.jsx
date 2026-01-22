import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BuildingOfficeIcon,
  ArrowsRightLeftIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import PracticeAreas from '../components/PracticeAreas';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const ExpertisePage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  const focusAreas = [
    { 
      title: 'Corporate Law', 
      description: 'Comprehensive corporate legal services', 
      icon: BuildingOfficeIcon 
    },
    { 
      title: 'Mergers & Acquisitions', 
      description: 'Expert M&A advisory and transactions', 
      icon: ArrowsRightLeftIcon 
    },
    { 
      title: 'Banking & Finance', 
      description: 'Financial regulatory and compliance', 
      icon: CurrencyDollarIcon 
    },
    { 
      title: 'Intellectual Property', 
      description: 'IP protection and enforcement', 
      icon: DocumentTextIcon 
    },
    { 
      title: 'Tax Law', 
      description: 'Tax planning and dispute resolution', 
      icon: ChartBarIcon 
    },
    { 
      title: 'Employment Law', 
      description: 'Labor and employment compliance', 
      icon: UsersIcon 
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Expertise</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Facilitating commercial legal solutions
          </p>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Our expertise across diverse practice areas and sectors covers varied and nuanced needs. Backed by over 100 years of legal heritage, delighted clients from across the globe, and topical, commercial and specialised services, we deliver the best legal solutions for our clients.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <PracticeAreas 
        title="Practice Areas"
        description="Explore our comprehensive range of legal services across various practice areas"
        showViewMore={true}
      />

      {/* Focus Areas */}
      <section ref={contentRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized expertise in key sectors and industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
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
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-16 h-16 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Legal Expertise?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can help with your legal needs
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default ExpertisePage;
