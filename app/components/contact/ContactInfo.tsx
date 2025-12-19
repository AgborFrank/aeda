export default function ContactInfo() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Support */}
            <div className="border border-gray-200 p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-[#56290f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                    SUPPORT
                  </h3>
                  <div className="space-y-2 text-gray-700 text-base lg:text-lg">
                    <p>
                      <strong>Support:</strong>{' '}
                      <a href="tel:+237671223634" className="hover:text-[#56290f] transition-colors">
                        (+237)671223634 / 691653949 / 696630787
                      </a>
                    </p>
                    <p>
                      <strong>Operation:</strong>{' '}
                      <a href="tel:+237671223634" className="hover:text-[#56290f] transition-colors">
                        (+237)671223634 / 691653949 / 696630787
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Headquarters */}
            <div className="border border-gray-200 p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-[#56290f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                    HEADQUARTERS
                  </h3>
                  <div className="space-y-2 text-gray-700 text-base lg:text-lg">
                    <p>
                      The AFRICAN ECONOMIC DEVELOPMENT AGENCY<br />
                      Titi Garage, Rue Polyclinique SENDE, YAOUNDE, CAMEROON
                    </p>
                    <p className="mt-4">
                      Opposite College DE LA SALLE, DOUALA, CAMEROON<br />
                      <a href="tel:+237671223634" className="hover:text-[#56290f] transition-colors">
                        (+237)671223634 / 696630787
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="border border-gray-200 p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-[#56290f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                    QUICK CONTACT
                  </h3>
                  <a
                    href="tel:+237671223634"
                    className="text-gray-700 text-base lg:text-lg hover:text-[#56290f] transition-colors"
                  >
                    (+237) 671223634
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="border border-gray-200 p-6 lg:p-8 md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0">
                  <svg
                    className="w-8 h-8 text-[#56290f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-4">
                    OFFICE HOURS
                  </h3>
                  <p className="text-gray-700 text-base lg:text-lg">
                    Mon – Fri: 9am to 6pm
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
