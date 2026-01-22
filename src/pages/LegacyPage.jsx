import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Counter from '../components/Counter';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const LegacyPage = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const milestonesRef = useRef([]);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  const milestones = [
    { year: '1920', title: 'Foundation', description: 'Legaloids Law Firm was founded with a vision to provide exceptional legal services.' },
    { year: '1950', title: 'Expansion', description: 'Expanded operations to serve clients across multiple states.' },
    { year: '1980', title: 'International', description: 'Opened international offices and began global practice.' },
    { year: '2000', title: 'Digital Era', description: 'Embraced technology and digital transformation in legal services.' },
    { year: '2024', title: 'Century Mark', description: 'Celebrating over 100 years of legal excellence and client service.' },
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Legacy</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Shaping India's legal past, present and future
          </p>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Our pillars of success are grounded in our century-old heritage and legacy. Our goodwill and motto to provide pragmatic commercial solutions, and exceptional service, to our clients continually drive us to create meaningful and long-term impact.
          </p>
        </div>
      </section>

      {/* Counter Section */}
      <Counter />

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  ref={(el) => (milestonesRef.current[index] = el)}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-5/12">
                    <div className="bg-white border-2 border-primary-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="text-primary-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-full border-4 border-white shadow-lg mx-auto"></div>
                  </div>
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', description: 'Commitment to the highest standards in all we do' },
              { title: 'Integrity', description: 'Unwavering ethical standards and transparency' },
              { title: 'Innovation', description: 'Embracing new approaches and technologies' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-bold text-primary-600 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default LegacyPage;

