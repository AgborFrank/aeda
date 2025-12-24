import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AEDWCTA() {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#56290f]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-black uppercase mb-8">
            Join Us at the 2nd African Economic Development Week
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#56290f] hover:bg-gray-100 font-bold uppercase px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Register to Attend
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#56290f] hover:bg-white hover:text-[#56290f] font-bold uppercase px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Book A Stand
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#56290f] hover:bg-white hover:text-[#56290f] font-bold uppercase px-8 py-6 text-lg"
            >
              <Link href="#download">
                Download Exhibition Brochure
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-[#56290f] hover:bg-white hover:text-[#56290f] font-bold uppercase px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Become A Sponsor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
