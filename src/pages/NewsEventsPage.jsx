import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blog from '../components/Blog';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const NewsEventsPage = () => {
  const heroRef = useRef(null);
  const eventsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

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

  const events = [
    {
      date: '2024-01-15',
      title: 'Annual Legal Conference 2024',
      location: 'New York',
      description: 'Join us for our annual conference featuring keynote speakers and networking opportunities.',
    },
    {
      date: '2024-02-20',
      title: 'Corporate Law Seminar',
      location: 'Online',
      description: 'Expert insights on the latest developments in corporate law and regulations.',
    },
    {
      date: '2024-03-10',
      title: 'Client Appreciation Event',
      location: 'Chicago',
      description: 'Celebrating our clients and the successful year we\'ve had together.',
    },
  ];

  const news = [
    {
      title: 'Legaloids Law Firm Wins Prestigious Legal Award',
      date: 'Jan 10, 2024',
      category: 'Awards',
    },
    {
      title: 'New Partner Joins Corporate Practice',
      date: 'Jan 5, 2024',
      category: 'People',
    },
    {
      title: 'Major M&A Transaction Completed',
      date: 'Dec 20, 2023',
      category: 'Transactions',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">News & Events</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
            Stay updated with our latest news and upcoming events
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 px-4">Latest News</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {news.slice(0, isMobile ? 6 : news.length).map((item, index) => (
              <div
                key={index}
                ref={(el) => (eventsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-xs sm:text-sm text-primary-600 font-semibold">{item.category}</span>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mt-1 sm:mt-2 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">{item.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 px-4">Upcoming Events</h2>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-600 text-white rounded-lg p-4 sm:p-5 md:p-6 text-center min-w-[100px] sm:min-w-[120px]">
                      <div className="text-2xl sm:text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs sm:text-sm uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">{event.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <span>📍 {event.location}</span>
                      <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      <GoToTop />
    </>
  );
};

export default NewsEventsPage;

