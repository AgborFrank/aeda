import Image from 'next/image';
import Link from 'next/link';

export default function EconomicWeek() {
  const activities = [
    'THE AFRICAN TRADE & INVESTMENT FORUM',
    'THE AFRICAN BUSINESS EXCELLENCE AWARDS',
    'THE AFRICAN WOMEN ECONOMIC & LEADERSHIP FORUM & AWARDS',
    'YOUNG ENTREPRENEURS FORUM'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="relative w-full h-[500px] lg:h-[700px]">
              <Image
                src="/img/fly1.webp"
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
                <h3 className="text-[#56290f] text-2xl lg:text-3xl font-black uppercase mb-6">
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

              {/* Activities List */}
              <div className="pt-4">
                <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-6">
                  Activities
                </h3>
                <ul className="space-y-4">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 bg-[#56290f] flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {activity}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-6">
                <Link
                  href="/register"
                  className="inline-block bg-[#56290f] text-white px-8 py-4 font-bold text-base lg:text-lg hover:bg-[#4d2510] transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

