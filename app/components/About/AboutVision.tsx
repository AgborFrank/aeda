export default function AboutVision() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-[#fdf7f3] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">Our Future</span>
            </div>
            <h2 className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4">
              OUR VISION
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-[#D4AF37]"></div>
              <div className="h-1 w-6 bg-[#56290f]"></div>
            </div>
          </div>
          
          {/* Vision Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Statement */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border-l-4 border-[#D4AF37]">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#56290f]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#56290f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-800 text-lg lg:text-xl font-semibold leading-relaxed">
                To be the go-to investment and trade promotion agency in Africa, working closely with the private sector and African governments to enable economic development and transformation of African states.
              </p>
            </div>
            
            {/* Regional Communities */}
            <div className="bg-gradient-to-br from-[#56290f] to-[#8B4513] rounded-2xl p-8 lg:p-10 shadow-lg text-white">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11H1m2.055 0c-.01.15-.055.3-.055.5v1.5c0 .828.672 1.5 1.5 1.5h3.5m0 0v-3a2 2 0 012-2h2.5m-4.5 3h4.5m0 0v3a2 2 0 01-2 2H9.5m-6-6h6m6 0h6m-6 0v-3a2 2 0 012-2h2.5m-4.5 3h4.5m0 0v3a2 2 0 01-2 2H15.5m-6-6h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-black uppercase mb-4">Regional Economic Communities</h3>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-4">
                AEDA created three regional economic communities:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold mt-1">•</span>
                  <span className="text-white/90"><strong>CHINA – AFRICA TRADE & INVESTMENT COUNCIL</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold mt-1">•</span>
                  <span className="text-white/90"><strong>ASIA-AFRICA TRADE & INVESTMENT COUNCIL</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4AF37] font-bold mt-1">•</span>
                  <span className="text-white/90"><strong>AFRICA-SOUTH SOUTH CO-OPERATION</strong></span>
                </li>
              </ul>
              <p className="text-white/80 text-sm lg:text-base mt-4 leading-relaxed">
                These bring together African and Asian businessmen with privately held companies in varied sectors for business exchange and networking purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

