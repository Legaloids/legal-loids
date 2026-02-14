import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Attorneys = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const founderWrapRef = useRef(null);
  const founderImgRef = useRef(null);
  const founderContentRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const attorneys = [
    {
      image: '/images/Sk.png',
      name: 'Shobhit Kulshrestha',
      role: 'Managing Partner',
      description:
        'Lawyer and Company Secretary specializing in banking, corporate laws, fintech, securities, and taxation. With thorough expertise in corporate practices, he navigates modern business policies effectively.',
    },
    {
      image: '/images/user-2.jpg',
      name: 'A.J. Ashish',
      role: 'Senior Partner',
      description:
        'Advocate focusing on DRT, NCLT, consumer, recovery suits, corporate insolvency, and due diligence.',
    },
    {
      image: '/images/user-3.jpg',
      name: 'Pradeep Kumar Kulshrestha',
      role: 'Senior Partner',
      description:
        'Practicing advocate with 34 years in banking and civil matters; heads Agra associate branch, paneled with major banks.',
    },
    {
      image: '/images/user-1.jpg',
      name: 'Aishwarya Mohan Gahrana',
      role: 'Senior Partner',
      description:
        'Expert in corporate advisory and litigation.',
    },
    {
      image: '/images/user-2.jpg',
      name: 'Rajiv Kumar Shrivastava',
      role: 'Senior Partner',
      description:
        'Specializes in commercial and financial law.',
    },
    {
      image: '/images/user-3.jpg',
      name: 'Pallavi Tiwari',
      role: 'Associate Partner',
      description:
        'Focuses on customized legal strategies and client servicing.',
    },
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
    const section = sectionRef.current;
    const header = headerRef.current;
    const founderWrap = founderWrapRef.current;
    const founderImg = founderImgRef.current;
    const founderContent = founderContentRef.current;
    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      // Section header: fade + slide up on scroll
      if (header) {
        gsap.fromTo(
          header,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      }

      // Founder card: image from left, content from right, no rotation
      if (founderWrap && founderImg && founderContent) {
        gsap.set(founderImg, { x: -80, opacity: 0 });
        gsap.set(founderContent, { x: 60, opacity: 0 });
        gsap.to(founderImg, {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power2.out',
          scrollTrigger: { trigger: founderWrap, start: 'top 82%', toggleActions: 'play none none none' },
        });
        gsap.to(founderContent, {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power2.out',
          delay: 0.1,
          scrollTrigger: { trigger: founderWrap, start: 'top 82%', toggleActions: 'play none none none' },
        });
      }

      // Other people cards: staggered fade + slide up (no rotation)
      cards.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 56, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              delay: index * 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const founder = attorneys[0];
  const otherAttorneys = attorneys.slice(1);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Attorneys</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Our team is focused on delivering commercial solutions to legal challenges. We understand the industries and sectors our clients operate in, applying years of experience to advise leading companies worldwide.
          </p>
        </div>

        {/* Founder – horizontal card with photo and social (larger) */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div
            ref={founderWrapRef}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col md:flex-row group"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, { y: -8, duration: 0.4, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.founder-img'), { scale: 1.06, duration: 0.5, ease: 'power2.out' });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, { y: 0, duration: 0.35, ease: 'power2.out' });
              gsap.to(e.currentTarget.querySelector('.founder-img'), { scale: 1, duration: 0.4, ease: 'power2.out' });
            }}
          >
            <div ref={founderImgRef} className="relative overflow-hidden flex-shrink-0 w-full md:w-2/5 min-h-[280px] sm:min-h-[320px] md:min-h-[380px]">
              <img
                src={founder.image}
                alt={founder.name}
                className="founder-img w-full h-64 sm:h-80 md:h-full md:min-h-[380px] object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/30 transition-colors duration-300" />
            </div>
            <div ref={founderContentRef} className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">{founder.name}</h3>
              <p className="text-base sm:text-lg md:text-xl text-primary-600 font-semibold mb-4 sm:mb-5">{founder.role}</p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">{founder.description}</p>
              <div className="flex justify-start">
                <a
                  href="https://www.linkedin.com/company/legaloids-law-offices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs sm:text-sm text-gray-600 hover:text-white transition-colors font-semibold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other people – name and description only, 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {otherAttorneys.slice(0, isMobile ? 5 : otherAttorneys.length).map((attorney, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index + 1] = el)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-4 sm:p-5 md:p-6 transition-shadow duration-300"
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -6, duration: 0.3, ease: 'power2.out' })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.25, ease: 'power2.out' })}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">{attorney.name}</h3>
              <p className="text-primary-600 font-semibold text-sm sm:text-base mb-2">{attorney.role}</p>
              <p className="text-sm text-gray-600">{attorney.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
