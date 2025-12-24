export default function AEDCAbout() {
  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
                About AEDCs
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                The <strong>African Economic Development Councils (AEDCs)</strong> are specialized advisory and strategic bodies under the <strong>African Economic Development Agency (AEDA)</strong>, tasked with driving sustainable economic growth and regional integration across Africa.
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                They serve as platforms for policy coordination, investment promotion, and stakeholder engagement, bringing together government officials, private sector leaders, and development experts to formulate actionable strategies that advance trade, industrialization, and socio-economic development.
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                By aligning national and regional priorities, the AEDCs aim to accelerate Africa's economic transformation, enhance competitiveness, and strengthen the continent's position in the global economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
