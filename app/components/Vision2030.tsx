import Image from 'next/image';

export default function Vision2030() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-0 lg:px-0">
        <div className="w-full min-h-screen flex flex-col lg:flex-row">
          {/* Left Panel - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-full min-h-[600px] lg:min-h-screen">
              <Image
                src="/img/newban.webp"
                alt="AEDA Vision 2030"
                fill
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Panel - Dark Background with Text */}
          <div className="w-full lg:w-1/2  relative overflow-hidden px-6 py-12 lg:px-12 lg:py-16 flex flex-col justify-between">
           


            {/* Right Panel Content - White Background Section */}
            <div className="relative z-10 mt-12 lg:mt-0">
              {/* Title */}
              <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black mb-6" style={{ fontFamily: "'Red Hat Display', system-ui, sans-serif", fontWeight: 700 }}>
                AEDA VISION 2030
              </h2>

              {/* Introduction Paragraph */}
              <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
                The African Economic development agency(AEDA) to focus on 3 axes in what it calls its 3-Year African Development Plan: The new development plan will focus on three cornerstone axes: Air Mobility in Africa, One African Market, and Agricultural Growth. Together, these pillars reflect AEDA&apos;s commitment to driving sustainable development and strengthening Africa&apos;s socio-economic resilience. These pillars are designed to accelerate regional integration, unlock economic potential, and position Africa as a competitive global player.
              </p>

              {/* Three Detailed Pillars */}
              <div className="space-y-8">
                {/* Pillar 1 */}
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-bold mb-3" style={{ fontFamily: "'Red Hat Display', system-ui, sans-serif", fontWeight: 700 }}>
                    1. Air Mobility in Africa
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    AEDA aims to support initiatives that improve air connectivity across the continent. Enhanced mobility will reduce travel time, expand trade routes, strengthen tourism, and promote business opportunities between African nations. The goal is to help unlock Africa&apos;s vast geography through modern, efficient, and accessible aviation infrastructure.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-bold mb-3" style={{ fontFamily: "'Red Hat Display', system-ui, sans-serif", fontWeight: 700 }}>
                    2. One African Market
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    In alignment with the African Continental Free Trade Area (AfCFTA), AEDA seeks to champion a fully integrated single African market. This includes facilitating cross-border trade, harmonizing regulations, and supporting policies that make it easier for African businesses to operate seamlessly across the continent.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-bold mb-3" style={{ fontFamily: "'Red Hat Display', system-ui, sans-serif", fontWeight: 700 }}>
                    3. Agricultural Growth
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    AEDA will prioritize innovation, investment, and modernization in Africa&apos;s agricultural sector. This axis aims to transform Africa from a raw-material exporter into a global powerhouse of agro-processing, food security, and value-added production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

