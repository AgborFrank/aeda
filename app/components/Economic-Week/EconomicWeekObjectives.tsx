export default function EconomicWeekObjectives() {
  const leftObjectives = [
    "To instigate riveting discussions concerning Africa's future and economic growth, among other issues, including the proliferation of international trade and a call for the continent's economic co-operation.",
    "Increase awareness of local programs that create jobs, advance career development opportunities, and improve the quality of life in communities.",
    "Find solutions for resilient Entrepreneurship Practices in Africa."
  ];

  const rightObjectives = [
    "To seek ways to harness the power of Technology to advance socio-economic systems and bring African Enterprises up to global standards.",
    "To ease the practice and ease of Doing Business in the continent.",
    "To promote financial inclusion and female Entrepreneurship and Leadership in Africa.",
    "To drive Foreign Direct Investment in Africa that will make grow African value chains exponentially."
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Event Location and Date */}
              <div>
                <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
                  YAOUNDE, 24TH – 27TH JULY 2024
                </h2>
              </div>

              {/* Section Heading */}
              <div>
                <h3 className="text-[#56290f] text-2xl lg:text-3xl font-black uppercase mb-6">
                  OUR OBJECTIVES
                </h3>
              </div>

              {/* Objectives List */}
              <div className="space-y-4">
                {leftObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#56290f] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-1">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Spacer to align with left column content */}
              <div className="h-[120px] lg:h-[140px]"></div>

              {/* Objectives List */}
              <div className="space-y-4">
                {rightObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-5 h-5 bg-[#56290f] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-1">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
