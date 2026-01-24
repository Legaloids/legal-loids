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
  LockClosedIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
  ScaleIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const ExpertisePage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const cardsRef = useRef([]);
  const industryCardsRef = useRef([]);

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
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.08,
            ease: 'power3.out',
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

  useEffect(() => {
    const industryCards = industryCardsRef.current;
    
    industryCards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
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

  const services = [
    {
      icon: BriefcaseIcon,
      title: 'General Corporate Advisory & Legal Drafting',
      description: 'Expert guidance on company incorporation, filings, compliances, due diligence, and business development. We draft board and shareholder resolutions, negotiate deals, and ensure adherence to corporate laws, SEBI regulations, and RBI requirements.',
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
    },
    {
      icon: ScaleIcon,
      title: 'Commercial & Civil Litigation',
      description: 'Our litigation practice covers civil disputes, domestic and international arbitrations, statutory proceedings, and criminal matters in a corporate context. We formulate strategies for foreign investments, transactions, and resolutions.',
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Banking & Finance',
      description: 'We advise on full-spectrum financing transactions, including corporate facilities, leveraged finance, derivatives, trade finance, project finance, asset finance, and restructurings. Our team secures governmental approvals and coordinates with regulators.',
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
    },
    {
      icon: LockClosedIcon,
      title: 'Corporate Criminal Matters',
      description: 'Specializing in white-collar crime, anti-corruption, and ethical practices, we conduct investigations, pre-investment due diligence, compliance workshops, and litigation. Our experience includes advising multinational corporations on fraud and financial crime.',
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
    },
    {
      icon: DocumentTextIcon,
      title: 'Intellectual Property Rights',
      description: 'Our IP practice encompasses prosecution, enforcement, transactions, and litigation for patents, trademarks, copyrights, designs, geographical indications, and domain names. We handle licensing, assignments, franchising, and renewals.',
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
    },
    {
      icon: ArrowsRightLeftIcon,
      title: 'Mergers and Acquisitions',
      description: 'We guide clients through M&A transactions, spin-offs, reorganizations, entry strategies, fund formations, and tax-efficient structures. Our advisory includes private equity deals, transfer pricing, and cross-border taxation.',
      color: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600',
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Information Technology and Cyber Crimes',
      description: 'With India\'s booming IT sector, we advise on the Information Technology Act, blockchain, RBI guidelines, big data, cryptocurrencies, and cyber crimes. Services include compliance, dispute resolution, and protection against digital threats.',
      color: 'bg-teal-50 border-teal-200',
      iconColor: 'text-teal-600',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Corporate Legal Services Outsourcing',
      description: 'We offer outsourced legal support for startups and enterprises, handling day-to-day agreements, compliances, funding rounds, and regulatory filings like income tax returns, digital signatures, TIN, and DIN.',
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600',
    },
    {
      icon: UsersIcon,
      title: 'Labour Laws',
      description: 'Our dedicated practice manages employment agreements, consultant engagements, executive compensation, statutory compliances, HR policies, disputes, employee claims, ESOPs, and industrial relations. We advise on restructurings and terminations.',
      color: 'bg-cyan-50 border-cyan-200',
      iconColor: 'text-cyan-600',
    },
    {
      icon: ChartBarIcon,
      title: 'Taxation Laws',
      description: 'Excelling in direct and indirect taxation, we provide advisory on corporate tax, M&A tax, international taxation, private client trusts, estate planning, and disputes. Services include advance rulings, VAT, service tax, SEZs, and export incentives.',
      color: 'bg-amber-50 border-amber-200',
      iconColor: 'text-amber-600',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Customized Legal Services',
      description: 'Tailored solutions for unique needs, including due diligence, insurance sector advisory, education law, hospitality, property laws, environment law (NGT disputes, CSR), and infrastructure (RERA, title clearance).',
      color: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600',
    },
    {
      icon: HomeIcon,
      title: 'Real Estate Laws',
      description: 'Comprehensive support for property transactions, including vetting, drafting, registrations, title searches, due diligence for builders, and disputes resolution.',
      color: 'bg-rose-50 border-rose-200',
      iconColor: 'text-rose-600',
    },
  ];

  const industries = [
    {
      name: 'Automotive',
      description: 'Specialized legal support for contracts, IP protection, and regulatory compliance in the automotive sector.',
    },
    {
      name: 'Banking',
      description: 'Consulting covers banking regulations, finance transactions, and debt recovery for financial institutions.',
    },
    {
      name: 'Energy & Utilities',
      description: 'Advising on project finance, environmental compliance, and infrastructure deals for energy and utility companies.',
    },
    {
      name: 'Fintech',
      description: 'Specializing in RBI guidelines, blockchain, cryptocurrencies, and data privacy for fintech companies.',
    },
    {
      name: 'Healthcare',
      description: 'Services include regulatory approvals, M&A, and compliance with health laws for healthcare organizations.',
    },
    {
      name: 'Industrials',
      description: 'Handling corporate transactions, labour issues, and supply chain legalities for industrial companies.',
    },
    {
      name: 'Infrastructure & Transport',
      description: 'Providing advisory on public-private partnerships, contracts, and disputes for infrastructure projects.',
    },
    {
      name: 'Robotics',
      description: 'IP and tech law expertise supporting innovation and commercialization in robotics and automation.',
    },
    {
      name: 'Telecoms',
      description: 'Advising on licensing, data protection, and mergers for telecommunications companies.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Multidisciplinary Team',
      description: 'Our team of lawyers, company secretaries, and chartered accountants combines deep industry knowledge with strategic insights.',
    },
    {
      title: 'Full-Service Approach',
      description: 'From corporate advisory to litigation, we provide end-to-end legal solutions tailored to your business needs.',
    },
    {
      title: 'Industry Expertise',
      description: 'We understand the industries and sectors our clients operate in, applying years of experience to advise leading companies.',
    },
    {
      title: 'Strategic Partnerships',
      description: 'We focus on long-term partnerships, providing personalized service with commercial acumen.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-200 uppercase tracking-wider">Our Expertise</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Comprehensive Legal Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-6 leading-relaxed">
            Delivering integrated legal solutions tailored to complex commercial challenges
          </p>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Legaloids Law Offices provides comprehensive legal consulting services across key practice areas, designed to support businesses at every stage. Our expertise spans corporate governance, dispute resolution, regulatory compliance, and specialized sector advisory.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Legal Solutions for Modern Business
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As a trusted partner for businesses in India and internationally, we deliver integrated legal solutions tailored to complex commercial challenges. Our multidisciplinary team combines deep industry knowledge with strategic insights to drive client success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of legal services, optimized for international standards and client-centric outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`bg-white rounded-lg border-2 ${service.color} p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
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
                  <div className={`mb-6 transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                    <IconComponent className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section ref={industriesRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Industries</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Legaloids Law Offices partners with diverse industries, providing sector-specific legal consulting to navigate regulatory complexities and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                ref={(el) => (industryCardsRef.current[index] = el)}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                  });
                }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Approach
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Our approach emphasizes thorough due diligence, strategic planning, and proactive risk management to resolve issues without litigation whenever possible. However, we are prepared to aggressively advocate for our clients' rights in court if necessary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-200 mb-2">1</div>
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-300 text-sm">Comprehensive analysis and strategic planning for optimal outcomes</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-200 mb-2">2</div>
                <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                <p className="text-gray-300 text-sm">Proactive risk identification and mitigation strategies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-200 mb-2">3</div>
                <h3 className="text-xl font-semibold mb-3">Client Advocacy</h3>
                <p className="text-gray-300 text-sm">Aggressive representation when litigation becomes necessary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Discuss Your Legal Needs?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our experienced legal team is here to provide strategic counsel and comprehensive solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-primary-600 font-semibold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide text-sm"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/practice"
                className="px-10 py-4 bg-primary-800 text-white font-semibold rounded-md shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide text-sm border-2 border-white/20"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default ExpertisePage;
