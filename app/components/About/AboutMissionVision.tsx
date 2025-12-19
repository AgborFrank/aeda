// Mission and Vision combined component
export default function AboutMissionVision() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Column */}
            <div className="border border-gray-200 p-8 lg:p-10">
              <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
                OUR MISSION
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                To drive sustainable growth into Africa's private sector by consolidating foreign direct investments and promoting international trade exchanges and partnerships for socio-economic impact.
              </p>
            </div>
            
            {/* Vision Column */}
            <div className="border border-gray-200 p-8 lg:p-10">
              <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
                OUR VISION
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6">
                To be the go-to investment and trade promotion agency in Africa, working closely with the private sector and African governments to enable economic development and transformation of African states.
              </p>
              
              {/* Regional Communities */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-[#56290f] text-lg lg:text-xl font-bold uppercase mb-4">
                  Regional Economic Communities
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  AEDA created three regional economic communities:
                </p>
                <ul className="space-y-2 text-gray-600 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-[#56290f] font-bold">•</span>
                    <span><strong className="text-[#56290f]">CHINA – AFRICA TRADE & INVESTMENT COUNCIL</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#56290f] font-bold">•</span>
                    <span><strong className="text-[#56290f]">ASIA-AFRICA TRADE & INVESTMENT COUNCIL</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#56290f] font-bold">•</span>
                    <span><strong className="text-[#56290f]">AFRICA-SOUTH SOUTH CO-OPERATION</strong></span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  These bring together African and Asian businessmen with privately held companies in varied sectors for business exchange and networking purposes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

