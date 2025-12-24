export default function AEDWFeatures() {
  const features = [
    'Launch of the First Ladies Empowerment Fund',
    'African Good Governance Awards',
    'Ministerial & Investors Roundtable Discussions'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-10 text-center">
            Important Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-gray-200 p-8 text-center hover:border-[#56290f] transition-colors bg-white"
              >
                <div className="w-16 h-16 bg-[#56290f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-black text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
