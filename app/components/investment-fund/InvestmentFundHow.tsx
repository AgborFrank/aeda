export default function InvestmentFundHow() {
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
            HOW WE INVEST
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
            The AEDA Fund invests in African privately-held companies that have economic and trade activities in Africa The guiding principles of the fund include the promotion of investment in Africa, abidance by market regulations and representation of mutual benefits.
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8">
            The fund invests through equity investments, quasi-equity investments and fund investments.
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
            The AEDA Investment Fund gives priority to a number of industries that are central to the development of African countries namely:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-start gap-3">
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
                <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
