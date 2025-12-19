import Image from 'next/image';

export default function EconomicWeekAllSpeakers() {
  const speakers = [
    {
      name: 'H. E Dr. Abdul Manaff',
      title: 'Chief Guest and Keynote Speaker, Chairman of First Holdings',
      image: '/img/H.-E-Dr.-Abdul-Manaff.webp' // Placeholder path
    },
    {
      name: 'Mr. Shinwin Soh Boma',
      title: 'M. D Cameroon Investment Promotion Agency',
      image: '/img/Mr.-Shinwin-Soh-Boma.webp' // Placeholder path
    },
    {
      name: 'Mr. Rajiv Singh',
      title: 'Global Head Investment - RS Valuation Services',
      image: '/img/rs-480x533.webp' // Placeholder path
    },
    {
      name: 'H. E. Vinh Dinh Cuong',
      title: 'President Vietnam International Entrepreneurs Club. Chairman 365 Group',
      image: '/img/H.-E.-Vinh-Dinh-Cuong.webp' // Placeholder path
    },
    {
      name: 'Dr. Anuraag Guglaani',
      title: 'Investor. Managing Partner, Wazir Advisors',
      image: '/img/Dr.-Anuraag-Guglaani-480x543.webp' // Placeholder path
    },
    {
      name: 'Prof. Jean Emmanuel Pondi',
      title: 'Chancellor ICT University',
      image: '/img/Prof.-Jean-Emmanuel-Pondi.webp' // Placeholder path
    },
    {
      name: 'Mr. Saurabh Kumar',
      title: 'V. P Tekmindz',
      image: '/img/sk.webp' // Placeholder path
    },
    {
      name: 'Mr. Fonka Mutta',
      title: 'TV Channel Manager CRTV News, Moderator',
      image: '/img/Mr.-Fonka-Mutta-480x534.webp' // Placeholder path
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase">
              SPEAKERS
            </h2>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="text-center"
              >
                {/* Speaker Image */}
                <div className="relative w-full aspect-square mb-6 mx-auto max-w-[250px] rounded-2xl overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Speaker Name */}
                <h4 className="text-[#56290f] text-lg lg:text-xl font-black uppercase mb-3">
                  {speaker.name}
                </h4>

                {/* Speaker Title */}
                <p className="text-gray-800 text-sm lg:text-base">
                  {speaker.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
