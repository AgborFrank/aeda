export default function EconomicWeekStats() {
  const stats = [
    {
      number: '500+',
      label: 'Participants Expected'
    },
    {
      number: '25',
      label: 'International Speakers'
    },
    {
      number: '30',
      label: 'Awardees'
    },
    {
      number: '4',
      label: 'International Business Forums'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 lg:p-8 text-center"
              >
                <div className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-800 text-sm lg:text-base font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
