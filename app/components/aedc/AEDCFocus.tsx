export default function AEDCFocus() {
  const focusAreas = [
    {
      title: 'Policy Guidance',
      description: 'Advising AEDA on economic policies and continental development frameworks.'
    },
    {
      title: 'Investment Facilitation',
      description: 'Promoting trade, investment, and cross-border partnerships within Africa.'
    },
    {
      title: 'Capacity Building',
      description: 'Supporting member states with research, training, and economic development programs.'
    },
    {
      title: 'Monitoring & Evaluation',
      description: 'Tracking progress of development initiatives and ensuring accountability in economic projects.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-8">
            The AEDCs Focus On
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 lg:p-8 hover:border-[#56290f] transition-colors bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 bg-[#56290f] text-white flex items-center justify-center font-black text-xl rounded">
                    {index + 1}
                  </div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase flex-1">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
