import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'hero',
      label: 'Home',
      image: '/images/hero_1.jpg',
      title: 'Premier Business Law Consulting Firm',
      subtitle: 'Delivering integrated legal solutions tailored to complex commercial challenges',
      description:
        'Legaloids Law Offices is a leading boutique consulting firm specializing in corporate law, litigation, and advisory services. As a trusted partner for businesses in India and internationally.',
      buttonText: 'Schedule Consultation',
      buttonLink: '/contact',
    },
    {
      id: 'about',
      label: 'About',
      image: '/images/hero_2.jpg',
      title: 'Excellence in Legal Practice',
      subtitle: 'Multidisciplinary team combining deep industry knowledge with strategic insights',
      description:
        'Our team of lawyers, company secretaries, and chartered accountants combines deep industry knowledge with strategic insights to drive client success.',
      buttonText: 'Learn More About Us',
      buttonLink: '/about',
    },
    {
      id: 'services',
      label: 'Services',
      image: '/images/hero_3.jpg',
      title: 'Comprehensive Legal Services',
      subtitle: 'Supporting businesses at every stage with expert legal consulting',
      description:
        'Our expertise spans corporate governance, dispute resolution, regulatory compliance, and specialized sector advisory. We provide end-to-end legal solutions tailored to your business needs.',
      buttonText: 'View Our Services',
      buttonLink: '/expertise',
    },
    {
      id: 'team',
      label: 'Team',
      image: '/images/blog-4.jpg',
      title: 'Experienced Legal Professionals',
      subtitle: 'Selected from the best talent, our professionals thrive in a stimulating environment',
      description:
        'Our team is focused on delivering commercial solutions to legal challenges. We understand the industries and sectors our clients operate in, applying years of experience to advise leading companies worldwide.',
      buttonText: 'Meet Our Team',
      buttonLink: '/people',
    },
    {
      id: 'contact',
      label: 'Contact',
      image: '/images/hero_1.jpg',
      title: 'Ready to Discuss Your Legal Needs?',
      subtitle: 'Our experienced legal team is here to provide strategic counsel',
      description:
        'Schedule a consultation today and discover how we can help protect your interests and guide you toward success with comprehensive legal solutions.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
  ];

  // Change slide on each scroll (wheel) step
  useEffect(() => {
    let isThrottled = false;

    const handleWheel = (event) => {
      event.preventDefault();

      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 800); // close to animation duration

      if (event.deltaY > 0) {
        // scroll down -> next slide
        setActiveSection((prev) =>
          prev < sections.length - 1 ? prev + 1 : prev
        );
      } else if (event.deltaY < 0) {
        // scroll up -> previous slide
        setActiveSection((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [sections.length]);

  useEffect(() => {
    const currentSlide = slidesRef.current[activeSection];
    if (!currentSlide) return;

    const title = currentSlide.querySelector('.section-title');
    const subtitle = currentSlide.querySelector('.section-subtitle');
    const description = currentSlide.querySelector('.section-description');
    const button = currentSlide.querySelector('.section-button');
    const elements = [title, subtitle, description, button].filter(Boolean);

    // Animate the whole slide "falling" down
    gsap.fromTo(
      currentSlide,
      { opacity: 0, y: -80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
      }
    );

    // Then animate the text/content with a slight stagger
    gsap.fromTo(
      elements,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.1,
      }
    );
  }, [activeSection]);

  return (
    <>
      <div ref={containerRef} className="relative min-h-screen overflow-hidden">
        {/* Right-side tracker */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-white/30">
              <div
                className="absolute top-0 left-0 w-full bg-white transition-all duration-300 ease-out"
                style={{ height: `${((activeSection + 1) / sections.length) * 100}%` }}
              />
            </div>

            {/* Items */}
            <div className="relative flex flex-col items-start space-y-8">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="relative flex items-center gap-4 group"
                >
                  <span
                    className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeSection === index
                        ? 'text-white font-bold'
                        : 'text-white/60 group-hover:text-white/80'
                    }`}
                  >
                    {section.label}
                  </span>
                  <div
                    className={`relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-white border-white'
                        : 'bg-transparent border-white/50 group-hover:border-white/70'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slides on same screen */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (slidesRef.current[index] = el)}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeSection === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${section.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center text-white">
                  <div className="space-y-6 md:space-y-8">
                    <h1 className="section-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                      {section.title}
                    </h1>
                    <h2 className="section-subtitle text-lg md:text-xl lg:text-2xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed">
                      {section.subtitle}
                    </h2>
                    <p className="section-description text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                      {section.description}
                    </p>
                    <div className="pt-4">
                      <Link
                        to={section.buttonLink}
                        className="section-button inline-block px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 tracking-wide uppercase"
                      >
                        {section.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <GoToTop />
    </>
  );
};

export default HomePage;
