interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11H1m2.055 0c-.01.15-.055.3-.055.5v1.5c0 .828.672 1.5 1.5 1.5h3.5m0 0v-3a2 2 0 012-2h2.5m-4.5 3h4.5m0 0v3a2 2 0 01-2 2H9.5m-6-6h6m6 0h6m-6 0v-3a2 2 0 012-2h2.5m-4.5 3h4.5m0 0v3a2 2 0 01-2 2H15.5m-6-6h6"
        />
      </svg>
    ),
    title: 'GET ACCESS TO AFRICAN MARKETS',
    description:
      "With a growing population of over 1.7 billion by 2030 coupled with free trade zones under the AFCFTA Africa's economic future is buoyant.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: 'HIGH GROWTH SECTORS',
    description:
      "The continent's potential to become major participant in global supply chain across diverse sectors can not be ignored.",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'EASE OF DOING BUSINESS',
    description:
      'With a high demand for the advancement of Industrialization and Technology, African governments have made the ease of Doing Business a priority and prerequisite for attracting FDIs.',
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'FASTEST GROWING ECONOMY GLOBALLY',
    description:
      'Africa is set to outperform the rest of the world in economic growth over the next five years, with real gross domestic product (GDP) averaging around 4% in 2023 and 2024.',
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-lg p-6 lg:p-8 flex flex-col items-start"
            >
              {/* Icon */}
              <div className="text-[#8B4513] mb-4 border-2 border-[#8B4513] rounded p-2">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#8B4513] font-black uppercase text-base lg:text-lg mb-3 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#242424] text-sm lg:text-base leading-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

