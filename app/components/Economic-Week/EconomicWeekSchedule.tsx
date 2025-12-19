export default function EconomicWeekSchedule() {
  const schedule = [
    {
      day: 'Day 1',
      date: '24th July 2024',
      events: [
        'Opening Ceremony',
        'Keynote Addresses',
        'The African Trade & Investment Forum',
        'Networking Session'
      ]
    },
    {
      day: 'Day 2',
      date: '25th July 2024',
      events: [
        'The African Business Excellence Awards',
        'Panel Discussions',
        'Business Networking',
        'Workshops'
      ]
    },
    {
      day: 'Day 3',
      date: '26th July 2024',
      events: [
        'The African Women Economic & Leadership Forum & Awards',
        'Young Entrepreneurs Forum',
        'Closing Ceremony',
        'Gala Dinner'
      ]
    },
    {
      day: 'Day 4',
      date: '27th July 2024',
      events: [
        'Site Visits',
        'Cultural Events',
        'Optional Tours'
      ]
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-4">
              EVENT SCHEDULE
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              24th – 27th July 2024 | Yaoundé, Cameroon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6"
              >
                <div className="mb-4">
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-2">
                    {day.day}
                  </h3>
                  <p className="text-gray-600 text-base font-semibold">
                    {day.date}
                  </p>
                </div>
                <ul className="space-y-3">
                  {day.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start gap-2">
                      <span className="text-[#56290f] font-bold mt-1">•</span>
                      <span className="text-gray-700 text-sm lg:text-base">
                        {event}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
