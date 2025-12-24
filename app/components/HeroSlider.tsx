'use client';

import { useState, useEffect } from 'react';

interface Slide {
  title: string;
  titleLine2?: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundColor?: string;
}

interface HeroSliderProps {
  slides?: Slide[];
}





const defaultSlides: Slide[] = [
  {
    title: 'UNLOCKING INVESTMENT OPPORTUNITIES IN THE AFRICAN CONTINENT',
    titleLine2: 'INVESTMENTS',
    subtitle: 'We help you identify the most profitable sectors with high returns on investment.',
    backgroundColor: '#4A7C7E', // Muted teal
    backgroundImage: '/img/photo-output-15-1024x766.jpeg',
  },
  {
    title: 'CREATING SUSTAINABLE PARTNERSHIPS FOR GLOBAL IMPACT',
    titleLine2: 'ACROSS AFRICA',
    subtitle: 'Win-Win Partnerships can go a long way to boost your business. We connect you to like-minded individuals who will help you grow.',
    backgroundColor: '#4A7C7E',
    backgroundImage: '/img/media_115c4b2305f5264bbc93077034e1fbfe1bcef9036.jpeg',
  },
  {
    title: 'YOUR GATEWAY TO DOING BUSINESS IN AFRICA',
    subtitle: 'Accelerating growth in Africa and Economic development in the continent.',
    backgroundColor: '#4A7C7E',
    backgroundImage: '/img/494506511_1247418000724813_1646496292546038084_n.jpeg',
  },
  {
    title: 'BUILDING STRATEGIC PARTNERSHIPS',
    subtitle: 'Creating collaborative networks that drive innovation and economic prosperity.',
    backgroundColor: '#4A7C7E',
    backgroundImage: '/img/494506511_1247418000724813_1646496292546038084_n.jpeg',
  },
];

export default function HeroSlider({ slides = defaultSlides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: currentSlideData.backgroundColor || '#4A7C7E',
          backgroundImage: currentSlideData.backgroundImage
            ? `url(${currentSlideData.backgroundImage})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {currentSlideData.backgroundImage && (
          <div className="absolute inset-0 bg-black/40" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase mb-4 leading-tight">
            {currentSlideData.title}
            {currentSlideData.titleLine2 && (
              <>
                <br />
                
              </>
            )}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal mt-4 max-w-3xl mx-auto">
            {currentSlideData.subtitle}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-colors focus:outline-none"
        aria-label="Previous slide"
      >
        <div className="text-2xl sm:text-3xl font-bold underline">
          {currentSlide === 0 ? slides.length : currentSlide}
        </div>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-200 transition-colors focus:outline-none"
        aria-label="Next slide"
      >
        <div className="text-2xl sm:text-3xl font-bold underline">
          {currentSlide + 2 > slides.length ? 1 : currentSlide + 2}
        </div>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none ${
              index === currentSlide
                ? 'bg-gray-800 scale-125'
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

