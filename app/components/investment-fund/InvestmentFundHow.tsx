export default function InvestmentFundHow() {
  const investmentTypes = [
    {
      title: 'Equity Investments',
      description: 'Direct ownership stakes in African companies with growth potential',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Quasi-Equity Investments',
      description: 'Flexible financing structures that combine debt and equity features',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Fund Investments',
      description: 'Strategic investments in specialized funds focused on African markets',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const industries = [
    'Agriculture and manufacturing',
    'Infrastructure and related industries such as electric power, energy facilities, transportation and urban water supply',
    'Mining',
    'Natural resources such as oil, gas and minerals',
    'Industrial parks',
    'Healthcare',
    'Education',
    'Retail',
    'Media & Communications',
    'Technology',
    'Fashion & Beauty',
    'Financing'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[#56290f] text-3xl lg:text-4xl xl:text-5xl font-black uppercase mb-6">
              HOW WE INVEST
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              The AEDA Fund invests in African privately-held companies that have economic and trade activities in Africa. The guiding principles of the fund include the promotion of investment in Africa, abidance by market regulations and representation of mutual benefits.
            </p>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              The fund invests through equity investments, quasi-equity investments and fund investments.
            </p>
          </div>

          {/* Investment Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {investmentTypes.map((type, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 lg:p-8 hover:border-[#56290f] transition-colors bg-white"
              >
                <div className="text-[#56290f] mb-4">
                  {type.icon}
                </div>
                <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="bg-gray-50 p-8 lg:p-12">
            <h3 className="text-[#56290f] text-2xl lg:text-3xl font-black uppercase mb-6 text-center">
              Priority Industries
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The AEDA Investment Fund gives priority to a number of industries that are central to the development of African countries:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded border border-gray-200 hover:border-[#56290f] transition-colors"
                >
                  <div className="shrink-0 mt-1">
                    <div className="w-5 h-5 bg-[#56290f] rounded flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
