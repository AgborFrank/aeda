export default function DoingBusinessRegulations() {
  const regulations = [
    {
      title: 'Open Trade',
      description: 'Avg tariff 9.9%, regional blocs simplify procedures, AfCFTA boosts intra-African trade by 30% (2030).'
    },
    {
      title: 'Global Stage',
      description: 'Trade volume $1.7 trillion, top partners EU, China, US. Asia\'s rise diversifies partnerships.'
    },
    {
      title: 'Navigating the Maze',
      description: 'Expert guidance, online resources, local connections key for success.'
    },
    {
      title: 'Future Promise',
      description: 'Respect regulations, embrace change, build sustainable partnerships.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-8 text-center">
            Import-Export Regulations in Africa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {regulations.map((regulation, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 lg:p-8"
              >
                <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                  {regulation.title}
                </h3>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  {regulation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
