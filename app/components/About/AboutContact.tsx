export default function AboutContact() {
  const contactInfo = [
    {
      type: "headquarters",
      title: "HEADQUARTERS",
      content: "YAOUNDE, CAMEROON. DOUALA Office: Opposite College DE LA SALLE",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      type: "phone",
      title: "Cameroon",
      content: "(+237) 671223634",
      href: "tel:+237671223634",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: "phone",
      title: "Ghana",
      content: "(+233) 272012612",
      href: "tel:+233272012612",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: "phone",
      title: "China",
      content: "+8613922742426",
      href: "tel:+8613922742426",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-8">
              GET IN TOUCH
            </h2>
          </div>
          
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactInfo.map((contact, index) => {
              const CardContent = (
                <div className="border border-gray-200 p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#56290f] flex items-center justify-center text-white">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#56290f] text-xl lg:text-2xl font-black uppercase mb-2">
                        {contact.title}
                      </h3>
                    </div>
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-gray-700 text-base lg:text-lg hover:text-[#56290f] transition-colors mt-auto block"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-base lg:text-lg mt-auto">
                      {contact.content}
                    </p>
                  )}
                </div>
              );

              return contact.href ? (
                <a key={index} href={contact.href} className="block h-full">
                  {CardContent}
                </a>
              ) : (
                <div key={index}>
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

