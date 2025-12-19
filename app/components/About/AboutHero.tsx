import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Title */}
            <h1 className="text-[#56290f] text-4xl lg:text-4xl xl:text-4xl font-black uppercase leading-tight">
              Experts in Providing Investment Consulting Services
            </h1>
            
            {/* Introduction Paragraph */}
            <p className="text-gray-700 text-xl lg:text-2xl font-semibold leading-relaxed">
              We empower the private sector by helping them secure funding for growth and expansion.
            </p>
            
            {/* Description Paragraphs */}
            <div className="space-y-4 pt-4">
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                The AFRICAN ECONOMIC DEVELOPMENT AGENCY – AEDA registered in Cameroon under the Company's act RC/DLA/2023/B/6785 and in China as an independent international organization working to boost economic development in the African continent by promoting foreign investments and international trade.
              </p>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                We help businesses expand into different geographical markets globally, providing the necessary strategy, resources and information needed to achieve maximum growth and profitability.
              </p>
            </div>
          </div>
          
          {/* Right Column - Image Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] xl:h-[600px] flex items-center justify-center">
           <Image src="/img/award_final_1.webp" alt="About Hero" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
