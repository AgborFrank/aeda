"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show immediately on page load
    const rafId = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    // Exit Intent: Show when mouse leaves the window at the top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // Empty dependency array - only run on mount

  const closePopup = () => {
    setIsVisible(false);
    
    // Show again after 30 seconds when closed
    setTimeout(() => {
      setIsVisible(true);
    }, 30000); // 30 seconds
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Close newsletter popup"
          title="Close"
        >
          <X size={24} />
        </button>

        {/* Left Column: Image */}
        <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[400px]">
          <Image
            src="/img/build.jpg"
            alt="Build a Global Brand"
            fill
            className="object-fit"
          />
          {/* Overlay Gradient for text readability if needed, though image seems to have text */}
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
        </div>

        {/* Right Column: Text & Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-blue-900 text-white">
          <div className="mb-2 text-yellow-400 font-bold uppercase tracking-wider text-sm">
            Avicomm Excellence & Innovation
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
            Build a <span className="text-yellow-400">GLOBAL BRAND</span>
          </h2>
          
          <p className="text-lg mb-8 text-blue-100">
            Marketing Strategies for Global Exporters and high achieving Business Leaders.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors uppercase tracking-wide text-lg shadow-md hover:shadow-lg"
            >
              Get the E-Book Now
            </button>
          </form>
          
          <p className="mt-4 text-xs text-blue-200 text-center">
            Join our community of global leaders. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

