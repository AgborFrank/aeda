export default function AEDWOutcomes() {
  const outcomes = [
    'Agree on concrete regional infrastructure initiatives (transport corridors, logistics hubs, transnational roads/rail) to improve connectivity.',
    'Secure investment pledges (public and private) for trade-related infrastructure, industrial zones, and cross-border projects.',
    'Outline joint strategies and policy frameworks for customs harmonization, trade facilitation, and regulatory alignment across participating nations.',
    'Strengthen networks and partnerships among governments, development finance institutions, investors, and regional trade organizations — enabling follow-through on trade and investment plans.',
    'Promote value-added production capacities — encouraging manufacturing, agro-processing, and regional supply-chain development rather than commodity export alone, boosting intra-African trade.'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
            Expected Outcomes & Deliverables
          </h2>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-8 max-w-3xl">
            By the end of the 2nd Africa Development Week, stakeholders and participants may aim to:
          </p>
          
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 border-l-4 border-[#56290f] pl-6 py-2">
                <div className="shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-[#56290f]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
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
