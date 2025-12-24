export default function AEDCCouncils() {
  const councils = [
    'Cameroon Economic Development Council',
    'Nigeria Economic Development Council',
    'Ghana Economic Development Council',
    'Kenya Economic Development Council',
    'South Africa Economic Development Council',
    'Mozambique Economic Development Council',
    'Burkina Faso Economic Development Council',
    'Rwanda Economic Development Council',
    'Mauritius Economic Development Council',
    'Senegal Economic Development Council'
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#56290f] text-3xl lg:text-4xl font-black uppercase mb-10 text-center">
            Current Councils
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {councils.map((council, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 hover:border-[#56290f] transition-colors bg-white flex items-center gap-4"
              >
                <div className="shrink-0 w-10 h-10 bg-[#56290f] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-[#56290f] text-lg lg:text-xl font-black uppercase flex-1">
                  {council}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
