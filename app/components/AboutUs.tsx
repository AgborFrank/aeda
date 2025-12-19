import Link from 'next/link';

export default function AboutUs() {
  const services = [
    'Investment Strategy',
    'Risk Management',
    'Business Expansion and Development',
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-[#fdf7f3] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-[#56290f] text-3xl lg:text-5xl font-black uppercase mb-4">
                ABOUT US
              </h2>
            </div>

            {/* Mission Statement */}
            <div>
              <p className="text-gray-700 text-xl lg:text-2xl font-normal leading-relaxed">
                Accelerating Growth and Economic Development in the Continent, driving Foreign Direct Investment into Africa.
              </p>
            </div>

            {/* Experience Section */}
            <div className="flex flex-col">
              <div className="text-[#56290f] text-6xl lg:text-7xl font-black mb-2">
                15
              </div>
              <p className="text-gray-600 text-sm lg:text-base uppercase tracking-wide">
                YEARS EXPERIENCE IN BUSINESS CONSULTING
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#D4AF37]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.83-.01-1.54-.85-2.48-3.51-3.19z" />
                    </svg>
                  </div>
                  <div className="flex-1 border-b border-gray-300 pb-2">
                    <span className="text-gray-700 text-base lg:text-lg">
                      {service}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore More Button */}
            <div className="pt-4">
              <Link
                href="/about-us"
                className="inline-block bg-[#56290f] text-white px-8 py-3 rounded-lg font-semibold text-base lg:text-lg hover:bg-[#4d2510] transition-colors"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            {/* Heading */}
            <div>
              <h3 className="text-gray-700 text-2xl lg:text-3xl font-semibold leading-tight">
                Africa & China Based Consulting Firm
              </h3>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Supporting long-term growth of Small and Medium Size Enterprises in the private sector especially is crucial to developing economies globally.
              </p>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                As the world becomes a global village, it is imperative that businesses leverage on globalization to expand and gain larger market share across territories.
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-[#ffffff] p-6 lg:p-8 rounded-lg mt-8">
              <div className="space-y-4">
                <blockquote className="text-[#6b3418] text-lg lg:text-2xl font-medium leading-relaxed italic">
                  &ldquo;Time has never been perfect to Invest in Africa...the fastest-growing economy.&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-[#6b3418]">
                  <p className="text-[#6b3418] font-bold text-base lg:text-lg uppercase">
                    DR. RUTH TEMBE
                  </p>
                  <p className="text-[#6b3418] text-sm lg:text-base mt-1">
                    CEO & Founder of AEDA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

