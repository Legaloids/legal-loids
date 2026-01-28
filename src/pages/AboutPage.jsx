import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Attorneys from '../components/Attorneys';
import Testimonials from '../components/Testimonials';
import PracticeAreas from '../components/PracticeAreas';
import IntroSection from '../components/IntroSection';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero_2.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 px-4">About Legaloids Law Offices</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 px-4">
              Premier Business Law Consulting Firm
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section ref={contentRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-6">
              <img
                src="/images/hero_1.jpg"
                alt="Legal office"
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="md:col-span-1"></div>
            <div className="md:col-span-5 space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4 md:px-0">
                About Legaloids Law Offices
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
                At Legaloids Law Offices, we prioritize client trust and deliver robust, effective legal representation to address diverse business needs. Founded on enduring client relationships, our firm provides personalized, accessible services with meticulous attention to detail, consistently achieving favorable outcomes.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
                As a full-service corporate and litigation law firm headquartered in New Delhi, with associate offices in Noida, Pune, Mumbai, and Agra, we offer timely, cost-effective solutions in contracts, transactions, and regulatory matters. Our approach emphasizes thorough due diligence, strategic planning, and proactive risk management.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
                Legaloids is more than a law firm—we are a consulting powerhouse akin to global leaders like PwC and Deloitte, focusing on long-term partnerships. Our professionals, drawn from top-tier backgrounds, specialize in corporate advisory, banking, fintech, taxation, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attorneys Section */}
      <Attorneys />

      {/* Testimonials */}
      <Testimonials />

      {/* Practice Areas */}
      <PracticeAreas 
        title="Practice Area"
        description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        showViewMore={true}
      />

      <IntroSection />
      <GoToTop />
    </>
  );
};

export default AboutPage;
