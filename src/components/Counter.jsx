import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserIcon, 
  BuildingOfficeIcon, 
  ScaleIcon, 
  TrophyIcon 
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const [counters, setCounters] = useState([
    { 
      value: 0, 
      target: 2893, 
      label: 'Our Lawyer', 
      icon: UserIcon 
    },
    { 
      value: 0, 
      target: 291, 
      label: 'Our Clients', 
      icon: BuildingOfficeIcon 
    },
    { 
      value: 0, 
      target: 952, 
      label: 'Successful Case', 
      icon: ScaleIcon 
    },
    { 
      value: 0, 
      target: 1921, 
      label: 'Honor & Awards', 
      icon: TrophyIcon 
    },
  ]);
  const counterRef = useRef(null);
  const itemsRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Animate counter items
            itemsRef.current.forEach((item, index) => {
              if (item) {
                gsap.fromTo(
                  item,
                  { y: 50, opacity: 0, scale: 0.8 },
                  {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'back.out(1.7)',
                  }
                );
              }
            });

            // Animate counters
            counters.forEach((counter, index) => {
              const duration = 2;
              const steps = 60;
              const increment = counter.target / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                  setCounters((prev) => {
                    const updated = [...prev];
                    updated[index].value = counter.target;
                    return updated;
                  });
                  clearInterval(timer);
                } else {
                  setCounters((prev) => {
                    const updated = [...prev];
                    updated[index].value = Math.floor(current);
                    return updated;
                  });
                }
              }, (duration * 1000) / steps);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={counterRef}
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/blog-4.jpg)' }}
    >
      <div className="absolute inset-0 bg-primary-900/80"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const IconComponent = counter.icon;
            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-16 h-16 text-primary-200" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-primary-200">
                  {counter.value.toLocaleString()}+
                </div>
                <div className="text-lg md:text-xl font-semibold">{counter.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counter;
