export default function EconomicWeekActivities() {
  const activities = [
    {
      title: 'THE AFRICAN TRADE & INVESTMENT FORUM',
      description: 'A platform for international and African business leaders to discuss trade opportunities, investment strategies, and economic partnerships across the continent.'
    },
    {
      title: 'THE AFRICAN BUSINESS EXCELLENCE AWARDS',
      description: 'Recognizing outstanding achievements and excellence in African businesses that have demonstrated innovation, sustainability, and significant economic impact.'
    },
    {
      title: 'THE AFRICAN WOMEN ECONOMIC & LEADERSHIP FORUM & AWARDS',
      description: 'Celebrating the contributions of African women in business and leadership, fostering gender equality and economic empowerment across the continent.'
    },
    {
      title: 'YOUNG ENTREPRENEURS FORUM',
      description: 'Empowering the next generation of African entrepreneurs with knowledge, networking opportunities, and resources to drive innovation and economic growth.'
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fff4ed]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-4">
              EVENT ACTIVITIES
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto">
              A comprehensive lineup of activities designed to foster economic development and collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 bg-[#56290f] flex items-center justify-center">
                      <span className="text-white text-lg font-black">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase flex-1">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed ml-12">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
