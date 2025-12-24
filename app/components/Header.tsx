'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about-us', label: 'ABOUT US' },
    { href: '/economic-week', label: 'ECONOMIC WEEK' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/doing-business', label: 'DOING BUSINESS' },
    { href: '/investment-fund', label: 'INVESTMENT FUND' },
    { href: '/news-hub', label: 'NEWS HUB' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Top and Middle Rows - Not Sticky */}
      <header className="w-full bg-white">
        <div className="bg-blue-600 border-b border-blue-400 ">
           {/* Top Row - Contact Banner */}
           <div className="flex h-12 items-center justify-center px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm lg:text-base text-blue-100">
              <a href="tel:+237671223624" className="hover:text-white transition-colors">
                Cameroon: +237671223624
              </a>
              <a href="tel:+8613922742426" className="hover:text-white transition-colors">
                China: +8613922742426
              </a>
              <a href="tel:+233272012612" className="hover:text-white transition-colors">
                Ghana: +233272012612
              </a>
              <a href="mailto:contact@aeda.craigsmunitions.com" className="hover:text-white transition-colors">
                contact@aeda.investments.com
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6  mt-4">
            <div className="col-span-2">
              <Link href="/african-economic-development-week" className="hover:opacity-80 transition-opacity">
                <Image src="/img/BUSINESS-scaled.webp" alt="AEDA Logo" width={450} height={300} className="w-full h-auto object-contain" />
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/economic-development-councils" className="hover:opacity-80 transition-opacity flex flex-col items-center justify-center">
                <Image src="/img/box1w.webp" alt="AEDA Logo" width={500} height={300} className="w-full h-auto object-contain" />
                <span className="text-black text-lg font-bold mt-2">Get Access</span> 
              </Link>
            </div>
            <div className="col-span-1">
              <Link href="/apsim" className="hover:opacity-80 transition-opacity flex flex-col items-center justify-center">
                <Image src="/img/box1wp.webp" alt="AEDA Logo" width={500} height={300} className="w-full h-auto object-contain" />
                <span className="text-black text-lg font-bold mt-2">Get Access</span> 
              </Link>
            </div>
           
          </div>
         

          {/* Middle Row - Logo */}
          <div className="flex h-28 items-center justify-center py-4 lg:h-24">
            <Link href="/">
              <Image src="/img/aedalogosmall.webp" alt="AEDA Logo" width={250} height={100} className="h-24 w-62lg:h-24 lg:w-62 object-contain" />
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Row - Navigation (Sticky) */}
      <nav className={`sticky top-0 z-50 w-full bg-[#56290f] transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between text-white">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-base font-black tracking-wide transition-colors ${
                    isActive
                      ? 'text-white dark:text-white'
                      : 'text-white hover:text-[#eec963] dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <span className="text-base font-bold text-white">Menu</span>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-white transition-colors hover:text-white focus:outline-none dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-white py-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
        </div>
      </nav>
    </>
  );
}

