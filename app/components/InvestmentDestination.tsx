import Image from 'next/image';

export default function InvestmentDestination() {
  const stats = [
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'Business Spending to reach $3.5 trillion by 2025',
    },
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'High Demand For Goods & Services',
    },
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'Intra-African Trade is Projected to increase by 81%',
    },
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'Consumer and business spending projected to reach $6.7 trillion by 2030',
    },
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'Exports to non-African countries to rise by 19%',
    },
    {
      icon: (
        <div className="w-4 h-4 bg-[#8B4513] rounded-sm"></div>
      ),
      text: 'Increasing Population Growth',
    },
  ];

  const legendItems = [
    { color: 'bg-black', label: 'Oil' },
    { color: 'bg-green-600', label: 'Food / Drink' },
    { color: 'bg-orange-500', label: 'Metals / Minerals' },
    { color: 'bg-red-600', label: 'Precious Metals / Minerals' },
    { color: 'bg-amber-800', label: 'Wood Products' },
    { color: 'bg-orange-300', label: 'Textile / Apparel' },
    { color: 'bg-blue-300', label: 'Machinery / Transportation' },
    { color: 'bg-gray-500', label: 'Electronics Related' },
    { color: 'bg-purple-500', label: 'Other' },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8 lg:mb-12 max-w-xl mx-auto">
          <h2 className="text-[#56290f] text-2xl lg:text-3xl xl:text-5xl font-black">
            Most preferred Investment Destination
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Stats Boxes - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 w-64 z-10">
            {stats.slice(0, 3).map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-1">{stat.icon}</div>
                  <p className="text-[#8B4513] text-sm lg:text-base font-semibold leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Map Area */}
          <div className="flex justify-center items-center min-h-[500px] lg:min-h-[700px] px-0 lg:px-64">
            <div className="relative w-full max-w-4xl h-full min-h-[500px] lg:min-h-[700px]">
              <Image
                src="/img/africa-opportunities_new1-1-1-980x1186.webp"
                alt="Africa Investment Map"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Stats Boxes - Right Side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 w-64 z-10">
            {stats.slice(3, 6).map((stat, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-1">{stat.icon}</div>
                  <p className="text-[#8B4513] text-sm lg:text-lg font-semibold leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stats - Below Map */}
        <div className="lg:hidden mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md border border-gray-200"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-1">{stat.icon}</div>
                <p className="text-[#8B4513] text-lg font-semibold leading-relaxed">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 lg:mt-12">
          <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
            <h3 className="text-gray-800 text-lg lg:text-xl font-bold mb-4">
              Legend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-4 h-4 ${item.color} rounded-sm flex-shrink-0`}></div>
                  <span className="text-gray-700 text-sm lg:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm lg:text-base">
            Source: CIA Factbook, Source: McKinsey GlobalPulse
          </p>
        </div>
      </div>
    </section>
  );
}

