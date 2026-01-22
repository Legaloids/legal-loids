import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blog from '../components/Blog';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const NewsEventsPage = () => {
  const heroRef = useRef(null);
  const eventsRef = useRef([]);

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
        className="relative h-[60vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center text-white"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">News & Events</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with our latest news and upcoming events
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                ref={(el) => (eventsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-sm text-primary-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary-600 text-white rounded-lg p-6 text-center min-w-[120px]">
                      <div className="text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
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

