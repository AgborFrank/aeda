export default function AEDWHighlights() {
  const highlights = [
    {
      title: 'Major Investment Commitments',
      description: 'As in the first edition, significant funding pledges may be announced (e.g. multi-billion dollar funds dedicated to infrastructure, trade corridors, value-chain development, and support for SMEs and youth/entrepreneurship).'
    },
    {
      title: 'High-level Public-Private Roundtables & B2B Meetings',
      description: 'The event convenes government officials, regional institutions, private investors, business leaders, entrepreneurs and youth, to open dialogue, forge partnerships, and build networks for trade & investment.'
    },
    {
      title: 'Focus on Trade Corridor & Infrastructure Plans',
      description: 'Proposals around building or improving transport corridors (roads, rail, logistical hubs) linking Central and West Africa; aimed at facilitating cross-border trade and reducing barriers to movement of goods.'
    },
    {
      title: 'Promotion of Intra-African Trade',
      description: 'Emphasis on regulatory harmonization, trade facilitation and leveraging regional agreements to deepen integration across countries in Central and West Africa.'
    },
    {
      title: 'Support for Value-Addition & Industrial Development',
      description: 'Encouraging investment not just in raw trade, but in manufacturing, agro-processing, small/medium enterprises, and local industry — to create jobs and build economic resilience.'
    },
    {
      title: 'Inclusion of Youth & Women Entrepreneurs',
      description: 'Giving opportunities to young entrepreneurs and women-led ventures to attract investment and integrate them in regional value chains, which helps ensure inclusive growth.'
    },
    {
      title: 'Commitment to Institutional & Policy Reforms',
      description: 'Using the summit as a platform to push for stronger institutional capacity, improved regulatory frameworks, ease-of-doing-business reforms, and transparent mechanisms to attract and secure foreign and intra-African investments.'
    },
    {
      title: 'Showcase of Africa\'s Investment Potential',
      description: 'Presenting Africa\'s opportunities: demographic dividend, natural resources, growing markets, regional connectivity — to domestic and international investors, highlighting why Africa is a strategic investment destination.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-10">
            Key Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 lg:p-8 hover:border-[#56290f] transition-colors"
              >
                <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
