import Image from "next/image";

export default function InvestmentFundHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row mx-auto">
          <div className="md:w-1/2 w-full">
          <Image src="/img/adea_invstment_fund-550x550-1.webp" alt="Investment Fund" width={500} height={500} />
          </div>
          <div className="md:w-1/2 w-full">
          <h1 className="text-[#56290f] text-2xl lg:text-3xl xl:text-4xl font-black uppercase mb-8">
            INVESTMENT FUND
          </h1>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
            AEDA Investment fund is an equity investment fund which was established in November 2023 under the Cameroon Company Act,
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
            AEDA Investment Fund focuses on investments in Africa. The fund supports African SMEs and accompanies foreign companies in their investment in Africa.
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
            It was created by and it is operated by the African Economic Development Agency pursuing a need to grow small businesses in the private sector which could contribute significantly to Africa's socio-economic development.
          </p>
          <p className="text-gray-700 text-base lg:text-lg leading-relaxed mt-6">
            The investments within the AEDA Investment fund are concentrated in industries and fields that help promote Africa's economic development, and impacts positively the livelihood of African communities such as agriculture, manufacturing, infrastructure, health care, technology, education, Finances.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
