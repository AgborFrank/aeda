export default function APSIMOutcomes() {
  const outcomes = [
    'Increased awareness of investment opportunities within Africa',
    'Strengthened cross-border partnerships and collaborations',
    'Mobilization of capital for African enterprises',
    'Enhanced policy dialogue between private sector and governments'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-8">
            Expected Outcomes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-l-4 border-[#56290f] pl-6 py-4 bg-gray-50"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 bg-[#56290f] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">{index + 1}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed flex-1">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
