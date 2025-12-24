export default function AEDWThemes() {
  const themes = [
    {
      title: 'Regional Infrastructure & Connectivity',
      description: 'Promoting development of physical trade routes (roads, rail, corridors) to ease movement of goods and people across Central and West Africa.'
    },
    {
      title: 'Trade Facilitation & Regulatory Harmonization',
      description: 'Supporting reforms to customs, cross-border trade protocols, and adoption of digital trade facilitation tools.'
    },
    {
      title: 'Mobilization of Investment',
      description: 'Catalysing public and private investments into trade-promoting infrastructure, industrial zones, logistics hubs, and value-addition sectors.'
    },
    {
      title: 'Value Chains & Industrialisation',
      description: 'Encouraging local industrial capacity and intra-African manufacturing to reduce reliance on raw-material export, add value locally, and supply regional markets.'
    },
    {
      title: 'Regional Integration & Market Expansion',
      description: 'Leveraging regional trade frameworks to strengthen intra-African trade, connecting producers, consumers, and investors across countries.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-8">
            Key Themes & Priorities
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-10 max-w-3xl">
            Under the overarching theme, the summit will likely concentrate on several interlinked priorities:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 lg:p-8 hover:border-[#56290f] transition-colors bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-8 h-8 bg-[#56290f] text-white flex items-center justify-center font-black text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase flex-1">
                    {theme.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
