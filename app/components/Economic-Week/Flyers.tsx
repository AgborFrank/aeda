import Image from 'next/image';

export default function Flyers() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-4 lg:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8">
            <Image src="/img/flyer.webp" alt="Flyer 1" width={600} height={600} />
          </div>
          <div className="bg-white p-8">
            <Image src="/img/F11.webp" alt="Flyer 2" width={600} height={600} />
          </div>
          
        </div>
        </div>
        <div className="container mx-auto">
            <div className="max-w-7xl mx-auto space-y-20 ">
                <div className="heading text-center">
                    <h2 className="text-[#56290f] text-4xl lg:text-5xl font-black uppercase mb-4">
                    OFFICIAL EVENT PROGRAM
                    </h2>
                </div>
                <Image src="/img/ProgramModified.webp" alt="Flyer 1" width={1000} height={1000} className="object-contain mx-auto" />
            </div>

        </div>
    </section>
  );
}