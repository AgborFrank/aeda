import Image from 'next/image';

export default function EconomicWeekHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="relative w-full h-[500px] lg:h-[700px]">
              <Image
                src="/img/econweek.webp"
                alt="The African Economic Development Week"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col space-y-8">
              {/* Event Header - Date and Location */}
              <div>
                <h1 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-4">
                  THE AFRICAN ECONOMIC DEVELOPMENT WEEK
                </h1>
                <h3 className="text-[#56290f] text-2xl lg:text-3xl font-black uppercase">
                  YAOUNDE, 24TH – 27TH JULY 2024
                </h3>
              </div>

              {/* Section Title */}
              <div>
                <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-6">
                  GENERAL OVERVIEW
                </h2>
              </div>

              {/* Main Content Paragraph */}
              <div className="space-y-4">
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                  According to the World Bank, Sub-Saharan Africa's economic growth dropped to 3.6% in 2022 from 4.1% in 2021 and is expected to dip to 3.1% in 2023. Global economic sluggishness, lingering inflation, and tough financial conditions with high debt contribute to this decline. In a bid therefore to accelerate socio-economic development in the African continent, the African Economic Development Agency in conjunction with the Cameroon Government is pleased to organize the first AFRICAN ECONOMIC DEVELOPMENT WEEK which will run from the 24th to the 27th of July 2024 in Yaoundé, Cameroon, under the theme:{' '}
                  <strong className="text-[#56290f] font-bold">
                    Restoring, Reforming and Ensuring Resilient Economic Policies for Shared Prosperity
                  </strong>. The 3-day event which will bring together International and African economic experts, thought Leaders and Business Leaders will have the following lineup of activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
