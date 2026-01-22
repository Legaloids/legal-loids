import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (section && image && content) {
      gsap.fromTo(
        image,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        content.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="lg:col-span-6">
            <img
              src="/images/hero_1.jpg"
              alt="Legal office"
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
          <div ref={contentRef} className="lg:col-span-6 space-y-6">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Excellence in Legal Practice Since Our Inception
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a premier law firm committed to delivering exceptional legal services. Our team of experienced attorneys combines deep industry knowledge with strategic thinking to provide comprehensive solutions tailored to our clients' unique needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a proven track record of success across diverse practice areas, we have built lasting relationships with clients ranging from emerging businesses to established corporations, always prioritizing their success and protecting their interests.
            </p>
            <div className="pt-4">
              <button
                className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-sm uppercase tracking-wide"
                onMouseEnter={(e) => {
                  gsap.to(e.target, { scale: 1.02, x: 2, duration: 0.2 });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { scale: 1, x: 0, duration: 0.2 });
                }}
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
