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
    <footer ref={footerRef} className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div ref={(el) => (sectionsRef.current[0] = el)}>
            <h4 className="text-2xl font-bold text-white mb-4">Lawfirm</h4>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts.
            </p>
          </div>

          <div ref={(el) => (sectionsRef.current[1] = el)}>
            <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/practice" className="hover:text-primary-400 transition-colors duration-200">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/won" className="hover:text-primary-400 transition-colors duration-200">
                  Won Cases
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors duration-200">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div ref={(el) => (sectionsRef.current[2] = el)}>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
            <ul className="space-y-2 text-gray-400">
              <li>198 West 21th Street, <br /> Suite 721 New York NY 10016</li>
              <li>
                <a href="tel:+1235235598" className="hover:text-primary-400 transition-colors duration-200">
                  + 1235 2355 98
                </a>
              </li>
              <li>
                <a href="mailto:info@yoursite.com" className="hover:text-primary-400 transition-colors duration-200">
                  info@yoursite.com
                </a>
              </li>
            </ul>
          </div>

          <div ref={(el) => (sectionsRef.current[3] = el)}>
            <h4 className="text-xl font-semibold text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mon - Thu: 9:00 - 21:00</li>
              <li>Fri: 8:00 - 21:00</li>
              <li>Sat: 9:30 - 15:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              Copyright &copy; {currentYear} All rights reserved | This template is made with{' '}
              <span className="text-primary-500">❤</span> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                Colorlib
              </a>
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'Dribbble'].map((social, index) => (
                <a
                  key={index}
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-360"
                  aria-label={social}
                >
                  <span className="text-gray-400 hover:text-white transition-colors">
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
