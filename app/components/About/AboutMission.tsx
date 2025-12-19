export default function AboutMission() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#56290f]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider">Our Purpose</span>
            </div>
            <h2 className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-4">
              OUR MISSION
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-12 bg-[#D4AF37]"></div>
              <div className="h-1 w-6 bg-[#56290f]"></div>
            </div>
          </div>
          
          {/* Mission Statement Card */}
          <div className="bg-gradient-to-br from-[#fdf7f3] to-white rounded-2xl p-8 lg:p-16 shadow-xl border border-[#56290f]/10 relative">
            {/* Decorative Corner */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#56290f] rounded-br-2xl"></div>
            
            <div className="relative z-10">
              <p className="text-gray-800 text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed text-center">
                To drive sustainable growth into Africa's private sector by consolidating foreign direct investments and promoting international trade exchanges and partnerships for socio-economic impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

