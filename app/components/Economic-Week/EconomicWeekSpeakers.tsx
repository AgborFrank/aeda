import Image from 'next/image';

export default function EconomicWeekSpeakers() {
  const speakers = [
    {
      name: 'Prof. Fuh Calistus Gentry',
      title: 'Minister of Mines',
      image: '/img/cali.webp' // Placeholder path
    },
    {
      name: 'Luc Magloire Atangana Mbarga',
      title: 'Minister of Trade and Commerce',
      image: '/img/lucma-980x980.webp' // Placeholder path
    },
    {
      name: 'Achille Bassilekin III',
      title: 'Minister of Small and Medium-sized Industries, Social Economy and Handicraft',
      image: '/img/minister-980x980.webp' // Placeholder path
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-4">
            <h2 className="text-[#56290f] text-3xl lg:text-4xl xl:text-5xl font-black uppercase">
              AFRICA INTERNATIONAL TRADE AND INVESTMENT FORUM
            </h2>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-12">
            <h3 className="text-[#56290f] text-2xl lg:text-3xl font-black uppercase">
              KEYNOTE SPEAKERS
            </h3>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="text-center"
              >
                {/* Speaker Image */}
                <div className="relative w-full aspect-square mb-6 mx-auto max-w-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Speaker Name */}
                <h4 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-3">
                  {speaker.name}
                </h4>

                {/* Speaker Title */}
                <p className="text-gray-800 text-base lg:text-lg">
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
