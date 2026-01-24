import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Attorneys from '../components/Attorneys';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const PeoplePage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">People</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Home to inspired performances
          </p>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Our team is focused on delivering commercial solutions to legal challenges. We understand the industries and sectors our clients operate in, applying years of experience to advise leading companies worldwide. Selected from the best talent, our professionals thrive in a stimulating environment to hone their skills.
          </p>
        </div>
      </section>

      {/* Attorneys Section */}
      <Attorneys />

      {/* Team Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Attorneys' },
              { number: '25+', label: 'Partners' },
              { number: '50+', label: 'Practice Areas' },
              { number: '100+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team
          </p>
          <button className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View Careers
          </button>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default PeoplePage;

