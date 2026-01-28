import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Attorneys = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const attorneys = [
    {
      image: '/images/user-1.jpg',
      name: 'Shobhit Kulshrestha',
      role: 'Founding Partner',
      description:
        'Lawyer and Company Secretary specializing in banking, corporate laws, fintech, securities, and taxation. With thorough expertise in corporate practices, he navigates modern business policies effectively. Ph: +91-8881668058',
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
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotationY: -15 },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
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
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Our Attorneys</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Our team is focused on delivering commercial solutions to legal challenges. We understand the industries and sectors our clients operate in, applying years of experience to advise leading companies worldwide.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 group"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  y: -10,
                  duration: 0.3,
                  ease: 'power2.out',
                });
                gsap.to(e.currentTarget.querySelector('img'), {
                  scale: 1.1,
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out',
                });
                gsap.to(e.currentTarget.querySelector('img'), {
                  scale: 1,
                  duration: 0.3,
                });
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transform transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/30 transition-colors duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{attorney.name}</h3>
                <p className="text-xs sm:text-sm md:text-base text-primary-600 font-semibold mb-2 sm:mb-3 md:mb-4">{attorney.role}</p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{attorney.description}</p>
                <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
                  {['Facebook', 'Twitter', 'Dribbble', 'LinkedIn'].map((social, i) => (
                    <a
                      key={i}
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                      className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-100 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-360"
                      aria-label={social}
                    >
                      <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 hover:text-white transition-colors">
                        {social[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
