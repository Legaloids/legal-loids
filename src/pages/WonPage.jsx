import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from '../components/Testimonials';
import IntroSection from '../components/IntroSection';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const WonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef(null);
  const casesRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const wonCases = [
    { name: 'Craig David', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Craig David', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Victory' },
    { name: 'Sam Smith', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Angel Woodland', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Mike Shinoda', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'George Bush', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Lebron Hammer', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Ariel Kris', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
    { name: 'Derick Melby', description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life', result: 'Case won' },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  useEffect(() => {
    casesRef.current.forEach((caseEl, index) => {
      if (caseEl) {
        gsap.fromTo(
          caseEl,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: caseEl,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero_1.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">Won Cases</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 px-4">
              Celebrating Our Success Stories
            </p>
          </div>
        </div>
      </section>

      {/* Won Cases Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {wonCases.slice(0, isMobile ? 6 : wonCases.length).map((caseItem, index) => (
              <div
                key={index}
                ref={(el) => (casesRef.current[index] = el)}
                className="bg-white border-2 border-primary-200 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-2 sm:mb-3 md:mb-4">
                  <span className="inline-block px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold">
                    {caseItem.result}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{caseItem.name}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{caseItem.description}</p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-primary-600">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base font-semibold">Successful Outcome</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                currentPage === 1
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                currentPage === 2
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                currentPage === 3
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              3
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-xs sm:text-sm transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      <IntroSection />
      <GoToTop />
    </>
  );
};

export default WonPage;
