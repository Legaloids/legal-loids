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
      icon: BriefcaseIcon,
      title: 'General Corporate Advisory & Legal Drafting',
      description: 'Expert guidance on company incorporation, filings, compliances, due diligence, and business development. We draft board and shareholder resolutions, negotiate deals, and ensure adherence to corporate laws, SEBI regulations, and RBI requirements.',
    },
    {
      icon: ScaleIcon,
      title: 'Commercial & Civil Litigation',
      description: 'Our litigation practice covers civil disputes, domestic and international arbitrations, statutory proceedings, and criminal matters in a corporate context. We formulate strategies for foreign investments, transactions, and resolutions.',
    },
    {
      icon: LockClosedIcon,
      title: 'Banking & Finance',
      description: 'We advise on full-spectrum financing transactions, including corporate facilities, leveraged finance, derivatives, trade finance, project finance, asset finance, and restructurings. Our team secures governmental approvals and coordinates with regulators.',
    },
  ];

  const extendedPracticeAreas = [
    ...practiceAreas,
    {
      icon: LockClosedIcon,
      title: 'Corporate Criminal Matters',
      description: 'Specializing in white-collar crime, anti-corruption, and ethical practices, we conduct investigations, pre-investment due diligence, compliance workshops, and litigation.',
    },
    {
      icon: HeartIcon,
      title: 'Intellectual Property Rights',
      description: 'Our IP practice encompasses prosecution, enforcement, transactions, and litigation for patents, trademarks, copyrights, designs, geographical indications, and domain names.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Mergers and Acquisitions',
      description: 'We guide clients through M&A transactions, spin-offs, reorganizations, entry strategies, fund formations, and tax-efficient structures. Our advisory includes private equity deals and cross-border taxation.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Information Technology and Cyber Crimes',
      description: 'We advise on the Information Technology Act, blockchain, RBI guidelines, big data, cryptocurrencies, and cyber crimes. Services include compliance, dispute resolution, and protection against digital threats.',
    },
    {
      icon: ScaleIcon,
      title: 'Taxation Laws',
      description: 'Excelling in direct and indirect taxation, we provide advisory on corporate tax, M&A tax, international taxation, private client trusts, estate planning, and disputes.',
    },
    {
      icon: HeartIcon,
      title: 'Real Estate Laws',
      description: 'Comprehensive support for property transactions, including vetting, drafting, registrations, title searches, due diligence for builders, and disputes resolution.',
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
