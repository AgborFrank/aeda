'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EconomicWeekPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      name: 'BIAKA UNIVERSITY INSTITUTE OF BUEA',
      logo: '/img/p14.webp',
      alt: 'BUIB Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p10.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p15.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p1.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p9.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p11.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'WOMEN ENTREPRENEURSHIP DEVELOPMENT ORGANISATION',
      logo: '/img/p13.webp',
      alt: 'WEDO Logo'
    },
    {
      name: 'SHE FINANCE',
      logo: '/img/p17.webp',
      alt: 'SHE FINANCE Logo'
    },
    {
      name: 'VISIONARY WOMEN CIRCLE',
      logo: '/img/p4.webp',
      alt: 'WVC Logo'
    },
    {
      name: 'FIRST HOLDINGS',
      logo: '/img/p18.webp',
      alt: 'FIRST HOLDINGS Logo'
    },
    {
      name: 'INVESTMENT PROMOTION AGENCY CAMEROON',
      logo: '/img/p2.webp',
      alt: 'IPA Cameroon Logo'
    }
  ];

  const itemsPerView = 5; // Number of logos visible at once
  const maxIndex = Math.max(0, partners.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 1000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase">
              OUR PARTNERS
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Previous partners"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Partners Grid */}
            <div className="overflow-hidden mx-12 lg:mx-16">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                }}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="shrink-0 px-4"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="flex flex-col items-center justify-center h-[200px] lg:h-[250px]">
                      <div className="relative w-full h-full max-w-[200px] max-h-[150px]">
                        <Image
                          src={partner.logo}
                          alt={partner.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-600  hidden text-xs lg:text-sm text-center mt-4 max-w-[200px]">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              aria-label="Next partners"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#56290f]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
