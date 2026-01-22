import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const toggleButtonRef = useRef(null);
  const searchRef = useRef(null);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'People', path: '/people' },
    { label: 'News & Events', path: '/news-events' },
    { label: 'Legacy', path: '/legacy' },
    { label: 'Thought Leadership', path: '/thought-leadership' },
    { label: 'Practice Areas', path: '/practice' },
    { label: 'Won Cases', path: '/won' },
    { label: 'Gallery', path: '/gallery' },
    {
      label: 'Blog',
      path: '/blog',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Posts', path: '/blog' },
        { label: 'Legal Updates', path: '/blog?category=legal-updates' },
        { label: 'Case Studies', path: '/blog?category=case-studies' },
        { label: 'Podcast', path: '/blog?category=podcast' },
      ],
    },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power2.out',
        }
      );

      gsap.to(toggleButtonRef.current, {
        rotation: 90,
        duration: 0.3,
        ease: 'power2.out',
      });

      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
      });

      gsap.to(toggleButtonRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      gsap.fromTo(
        searchRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' }
      );
      searchRef.current.querySelector('input')?.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Fixed Header with Logo, Search, and Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300 tracking-tight"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.02, duration: 0.3, ease: 'power2.out' });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, duration: 0.3, ease: 'power2.out' });
              }}
            >
              Legaloids
            </Link>

            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-300"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              {/* Menu Toggle Button */}
              <button
                ref={toggleButtonRef}
                onClick={toggleMenu}
                className="relative z-50 w-11 h-11 flex items-center justify-center bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 top-2.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`absolute top-5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 top-2.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-start justify-center pt-32 px-4 backdrop-blur-sm">
          <div
            ref={searchRef}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-8"
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our website..."
                className="w-full px-6 py-4 pr-14 text-base border border-gray-300 rounded-md focus:border-primary-600 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                minLength={3}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-md flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </form>
            <div className="mt-6 text-xs text-gray-500 uppercase tracking-wider">
              <p>Filters: All | People | Expertise | Insights | News</p>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/50 z-40 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onClick={closeMenu}
      ></div>

      {/* Right Side Navigation Panel */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 shadow-2xl z-50 overflow-y-auto ${
          isMenuOpen ? '' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full p-10 pt-28">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div className="group">
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-6 py-3.5 text-white text-base font-medium rounded-md transition-all duration-300 hover:bg-primary-700/50 hover:translate-x-1 hover:shadow-md ${
                        isActive(item.path) ? 'bg-primary-700/60 shadow-md' : ''
                      }`}
                      onMouseEnter={(e) => {
                        gsap.to(e.target, {
                          x: 5,
                          scale: 1.02,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                      onMouseLeave={(e) => {
                        gsap.to(e.target, {
                          x: 0,
                          scale: 1,
                          duration: 0.2,
                          ease: 'power2.out',
                        });
                      }}
                    >
                      {item.label}
                      <span className="ml-2 inline-block">→</span>
                    </Link>
                    <ul className="ml-4 mt-2 space-y-1 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300">
                      {item.dropdownItems.map((dropdownItem, dIndex) => (
                        <li key={dIndex}>
                          <Link
                            to={dropdownItem.path}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-primary-200 text-sm rounded-md hover:bg-primary-700 hover:text-white transition-all duration-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-6 py-3.5 text-white text-base font-medium rounded-md transition-all duration-300 hover:bg-primary-700/50 hover:translate-x-1 hover:shadow-md relative ${
                      isActive(item.path) ? 'bg-primary-700/60 shadow-md' : ''
                    }`}
                    onMouseEnter={(e) => {
                      gsap.to(e.target, {
                        x: 5,
                        scale: 1.02,
                        duration: 0.2,
                        ease: 'power2.out',
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.target, {
                        x: 0,
                        scale: 1,
                        duration: 0.2,
                        ease: 'power2.out',
                      });
                    }}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info Section */}
          <div className="mt-auto pt-10 border-t border-primary-700/50">
            <div className="space-y-5 text-primary-200">
              <div>
                <p className="text-sm font-semibold text-white mb-3 tracking-wide uppercase">Contact Us</p>
                <p className="text-sm leading-relaxed">198 West 21th Street</p>
                <p className="text-sm leading-relaxed">Suite 721 New York NY 10016</p>
              </div>
              <div>
                <a
                  href="tel:+1235235598"
                  className="text-sm hover:text-white transition-colors duration-200 block mb-1"
                >
                  + 1235 2355 98
                </a>
                <a
                  href="mailto:info@yoursite.com"
                  className="text-sm hover:text-white transition-colors duration-200 block"
                >
                  info@yoursite.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
