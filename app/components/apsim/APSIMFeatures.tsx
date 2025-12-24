export default function APSIMFeatures() {
  const participants = [
    'Private sector leaders',
    'Investors',
    'Government representatives',
    'Development agencies',
    'Industry experts'
  ];

  const formats = [
    'Panel discussions',
    'Keynote presentations',
    'Pitch sessions for innovative enterprises',
    'Networking sessions',
    'Sector-specific roundtables'
  ];

  const focusAreas = [
    {
      title: 'Investment Opportunities',
      description: 'Across key sectors (agriculture, energy, technology, infrastructure, and manufacturing)'
    },
    {
      title: 'Public-Private Partnerships',
      description: 'Promoting PPPs to drive infrastructure and development projects'
    },
    {
      title: 'Regional Trade & Market Integration',
      description: 'Facilitating cross-border trade and market connectivity'
    },
    {
      title: 'Sustainable & Inclusive Business Practices',
      description: 'Encouraging responsible and inclusive economic growth'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-10">
            Key Features
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Participants */}
            <div>
              <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                Participants
              </h3>
              <ul className="space-y-3">
                {participants.map((participant, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#56290f]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {participant}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Format */}
            <div>
              <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                Format
              </h3>
              <ul className="space-y-3">
                {formats.map((format, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-[#56290f]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {format}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-6">
              Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-6 hover:border-[#56290f] transition-colors bg-white"
                >
                  <h4 className="text-[#56290f] text-lg lg:text-xl font-black uppercase mb-3">
                    {area.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
