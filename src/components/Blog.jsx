import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const blogPosts = [
    {
      image: '/images/blog-1.jpg',
      title: 'Far from the countries Vokalia and Consonantia',
      date: 'Jan 5, 2017',
      comments: 3,
      excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however',
    },
    {
      image: '/images/blog-2.jpg',
      title: 'Far from the countries Vokalia and Consonantia',
      date: 'Jan 5, 2017',
      comments: 3,
      excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however',
    },
    {
      image: '/images/blog-3.jpg',
      title: 'Far from the countries Vokalia and Consonantia',
      date: 'Jan 5, 2017',
      comments: 3,
      excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however',
    },
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Post</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
            One day however
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.02,
                  y: -10,
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out',
                });
              }}
            >
              <Link to="/blog-single">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-colors duration-300"></div>
                </div>
              </Link>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  <Link to="/blog-single">{post.title}</Link>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  <span>{post.date}</span> | <span>{post.comments} Comments</span>
                </p>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
