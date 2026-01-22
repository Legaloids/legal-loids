import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Always show disclaimer on page load/reload
    setShowDisclaimer(true);
  }, []);

  useEffect(() => {
    if (showDisclaimer && modalRef.current) {
      // Animate modal entrance
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 }
      );

      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
        }
      );

      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, [showDisclaimer]);

  const handleAccept = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          setShowDisclaimer(false);
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  if (!showDisclaimer) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      ></div>

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div ref={contentRef} className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Disclaimer
            </h2>
            <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg font-semibold text-gray-900">
              The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
            </p>

            <p>
              By accessing this website, <strong>www.lawmaker.com</strong>, you acknowledge and confirm that you are seeking information relating to Lawmaker of your own accord and that there has been no form of solicitation, advertisement or inducement by Lawmaker or its members.
            </p>

            <p>
              The content of this website is for <strong>informational purposes only</strong> and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice.
            </p>

            <p>
              <strong>Lawmaker shall not be liable</strong> for consequences of any action taken by relying on the material/information provided on this website.
            </p>

            <p>
              The contents of this website are the <strong>intellectual property of Lawmaker</strong>.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg mt-6">
              <p className="text-primary-900 font-semibold">
                I accept the above.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleAccept}
              className="flex-1 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onMouseEnter={(e) => {
                gsap.to(e.target, { scale: 1.05, duration: 0.2 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, { scale: 1, duration: 0.2 });
              }}
            >
              I Accept
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Proceed to Website
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            Please accept the above to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

