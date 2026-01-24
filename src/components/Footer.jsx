import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const sectionsRef = useRef([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;
    const sections = sectionsRef.current;

    if (footer && sections) {
      gsap.fromTo(
        sections,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div ref={(el) => (sectionsRef.current[0] = el)}>
            <h4 className="text-2xl font-bold text-white mb-6 tracking-tight">Legaloids Law Firm</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              A premier law firm committed to delivering exceptional legal services with integrity, expertise, and strategic thinking. We protect your interests and guide you toward success.
            </p>
          </div>

          <div ref={(el) => (sectionsRef.current[1] = el)}>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/practice" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/expertise" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/people" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  People
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div ref={(el) => (sectionsRef.current[2] = el)}>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="leading-relaxed">
                <strong>Head Office:</strong><br />
                A-59, Sector-27, Noida-201301, India
              </li>
              <li className="leading-relaxed">
                <strong>New Delhi Office:</strong><br />
                A2/69 – Manu Apartment, Mayur Vihar,<br />
                New Delhi, Delhi 110091, India
              </li>
              <li className="leading-relaxed mt-2">
                <strong>Associate Office:</strong><br />
                C-32, Subhash Nagar, Agra-282010, India
              </li>
              <li>
                <a href="tel:+911204157858" className="hover:text-primary-400 transition-colors duration-200 block">
                  +91-120-4157858
                </a>
              </li>
              <li>
                <a href="mailto:admin@legaloids.com" className="hover:text-primary-400 transition-colors duration-200 block">
                  admin@legaloids.com
                </a>
              </li>
            </ul>
          </div>

          <div ref={(el) => (sectionsRef.current[3] = el)}>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider text-sm">Office Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Monday - Thursday: 9:00 AM - 9:00 PM</li>
              <li>Friday: 8:00 AM - 9:00 PM</li>
              <li>Saturday: 9:30 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright &copy; {currentYear} Legaloids Law Firm. All rights reserved.
            </p>
            <div className="flex space-x-3">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social, index) => (
                <a
                  key={index}
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-md flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  aria-label={social}
                >
                  <span className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
