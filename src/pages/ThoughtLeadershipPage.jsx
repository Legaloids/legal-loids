import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Blog from '../components/Blog';
import GoToTop from '../components/GoToTop';

gsap.registerPlugin(ScrollTrigger);

const ThoughtLeadershipPage = () => {
  const heroRef = useRef(null);
  const publicationsRef = useRef([]);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
      );
    }
  }, []);

  const publications = [
    {
      title: 'The Future of Corporate Law in India',
      author: 'John Smith',
      date: 'Jan 15, 2024',
      category: 'Corporate Law',
      excerpt: 'An in-depth analysis of emerging trends and regulatory changes affecting corporate legal practice.',
    },
    {
      title: 'Navigating M&A Transactions in 2024',
      author: 'Jane Doe',
      date: 'Jan 10, 2024',
      category: 'M&A',
      excerpt: 'Key considerations and best practices for successful mergers and acquisitions.',
    },
    {
      title: 'Digital Transformation in Legal Services',
      author: 'Robert Johnson',
      date: 'Jan 5, 2024',
      category: 'Technology',
      excerpt: 'How technology is reshaping the legal industry and client expectations.',
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-4">Thought Leadership</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
            Leveraging insight to script legal discourse
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            We contribute meaningfully to the discourse on legal developments and trends in the practices and sectors we work in. We actively author articles, create client engagement, engage with regulators and create various other forms of publications and commentary to contribute on matters of legal significance and policy.
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 px-4 sm:px-0">Publications</h2>
            <Link
              to="/blog"
              className="text-xs sm:text-sm md:text-base text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 px-4 sm:px-0"
            >
              View All
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                ref={(el) => (publicationsRef.current[index] = el)}
                className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <span className="text-xs sm:text-sm text-primary-600 font-semibold">{pub.category}</span>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mt-2 sm:mt-3 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">{pub.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{pub.excerpt}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-[10px] sm:text-xs md:text-sm text-gray-500">
                  <span>{pub.author}</span>
                  <span>{pub.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      {/* Podcast Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center px-4">Podcast</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Legal Insights Podcast</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6">
                Join our experts as they discuss the latest developments in law, share insights, and explore the future of legal practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-colors">
                  Listen Now
                </button>
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoToTop />
    </>
  );
};

export default ThoughtLeadershipPage;

