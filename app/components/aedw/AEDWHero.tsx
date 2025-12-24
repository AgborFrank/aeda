import Image from "next/image";
    export default function AEDWHero() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row mx-auto">
          <div className="md:w-1/2 w-full">
          <Image src="/img/BUSINESS-scaled.webp" alt="AEDA Logo" width={450} height={300} className="w-full h-auto object-contain" />
          </div>
          <div className="md:w-1/2 w-full">
          <h1 className="text-[#56290f] text-4xl lg:text-5xl xl:text-6xl font-black uppercase mb-6">
            The 2nd African Economic Development Week
          </h1>
          <p className="text-gray-700 text-xl lg:text-2xl font-semibold leading-relaxed">
            Accelerating trade integration and investment flows across Central and West Africa
          </p>
          </div>
        </div>
       
      </div>
    </section>
  );
}
