import Image from 'next/image';

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "DR. Ruth Tembe",
      title: "CEO & Founder – Chairperson of the Board",
      img: "/img/ruth-tembe2_final2.webp"
    },
    {
      name: "M. M'boh Marcel",
      title: "President of the Board of Directors",
      img: "/img/marcel-mboh_final.webp"
    },
    {
      name: "M. Pascal Soh Fokam",
      title: "Chief Operating Officer",
      img: "/img/pascal-fokam_final.webp"
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-8">
              OUR TEAM
            </h2>
            
            {/* Introduction Paragraph */}
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Our Founder and Chairperson of the Board cumulates more than 12 years experience helping businesses grow and expand across geographical markets in Africa. Her mastery of the African business terrain including cultural differences and consumer behavioral patterns across the African business landscape makes her an expert business and investment advisor in Africa.
              </p>
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                The board is made of astute Managers who are also accomplished Serial Entrepreneurs with sound Managerial and Leadership skills, responsible for overseeing the African Economic Development (AEDA)'s long-term vision, investment policy and overall Performance.
              </p>
            </div>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className=" p-8 text-center"
              >
                {/* Avatar Image */}
                <div className="relative w-64 h-64 lg:w-64 lg:h-64 mx-auto mb-6">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-[#56290f] text-xl lg:text-xl font-black uppercase mb-3">
                  {member.name}
                </h3>
                
                {/* Title */}
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

