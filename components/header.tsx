"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { colorClasses } from "@/lib/constants"
import Image from "next/image"

// Social Media Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const mainNavItems = [
    { title: "About Us", href: "/about-us" },
    {
      title: "Powerlists",
      items: [
        { title: "100 Global Business Leaders", description: "Celebrating the world's most influential business visionaries", href: "/powerlists/100-global-business-leaders" },
        { title: "Africa's 100 Leading Women", description: "Honoring exceptional women shaping Africa's future", href: "/powerlists/africas-100-leading-women" },
        { title: "Cameroon 40 Under 40 Achievers", description: "Recognizing Cameroon's rising stars and innovators", href: "/powerlists/cameroon-40-under-40-achievers" },
        { title: "Top 50 Global Leading SMEs", description: "Showcasing the world's most successful small businesses", href: "/powerlists/top-50-global-leading-smes" },
      ],
    },
    
    { title: "Conferences", href: "/conferences" },
    { title: "Travel & Tours", href: "/travel-tours" },
    { title: "Avicomm Capital", href: "/avicomm-capital" },
    { title: "Avicomm Air", href: "/avicomm-air" },
    { title: "Trainings", href: "/training-development" },
  ]

  return (
    <header 
      className={cn("sticky top-0 z-50 w-full bg-[#183c8f] font-sans")}
    >
      {/* TOP BAR - Logo, Social Icons, Action Button */}
      <div className="border-">
        <div className="container mx-auto flex h-auto py-2 lg:h-20 items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className=" shrink-0">
           <Image src="/img/newlogojoin.jpg" alt="Avicomm" width={200} height={100} className="w-[200px] lg:w-[200px] h-auto object-contain" />
          </Link>

          {/* Contact Info Section - Desktop */}
          <div className="hidden xl:flex items-center gap-16 mx-auto">
             <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase">Headquarters</span>
                  <span className="text-xs text-gray-200 font-default font-medium max-w-[160px] leading-tight">Rue Richard Bell, Akwa,<br/>Douala, Cameroon</span>
                </div>
             </div>

             <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase">Int&apos;l Offices</span>
                  <span className="text-xs text-gray-200 font-default font-medium leading-tight">China & Dubai</span>
                </div>
             </div>

             <div className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase">Call / Whatsapp</span>
                  <div className="text-xs text-gray-200 font-default font-medium leading-tight flex flex-col">
                    <span>+237 6 71 22 36 34</span>
                    <span>+8618620176205</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Side Actions - Social Icons + Action Button */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Desktop Actions - Social Media Icons */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:text-red-600"
              asChild
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:text-red-600"
              asChild
            >
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:text-red-600"
              asChild
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-white hover:text-red-600"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </Button>

            {/* Action Button */}
            <Button
              className={cn("hidden sm:flex font-extrabold font-default", colorClasses.microsoft.redButton)}
              asChild
            >
              <Link href="/signup" className="font-extrabold">Get in Touch</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"  className="md:hidden text-white hover:text-red-600 hover:bg-transparent">
                  <Menu className="h-9 w-9" />
                  <span className="text-white text-lg font-bold">Menu</span>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {/* Mobile Navigation */}
                  <div className="flex flex-col w-full">
                    {mainNavItems.map((item) => (
                      item.items ? (
                        <Accordion type="single" collapsible className="w-full" key={item.title}>
                          <AccordionItem value={item.title} className="border-b">
                            <AccordionTrigger className="text-xl font-normal text-gray-700 py-3 font-sans">
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col gap-2 pb-2">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className={cn("block py-2 text-xl hover:text-gray-900", pathname === subItem.href ? "text-red-500" : "text-gray-600")}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="font-medium font-sans">{subItem.title}</div>
                                    <div className="text-xs text-gray-500 mt-0.5 font-default">
                                      {subItem.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={item.title}
                          href={item.href!}
                          className={cn("py-3 text-xl font-normal border-b font-sans", pathname === item.href ? "text-red-500" : "text-gray-700")}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )
                    ))}
                  </div>

                  {/* Support Link */}
                  <Link
                    href="/contact"
                    className={cn("py-3 text-xl font-normal border-b font-sans", pathname === "/contact" ? "text-red-500" : "text-gray-700")}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  {/* Mobile Actions */}
                  <div className="flex flex-col gap-3 pt-4 border-t">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-700 hover:bg-transparent"
                        asChild
                      >
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <FacebookIcon className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-700 hover:bg-transparent"
                        asChild
                      >
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <TwitterIcon className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-700 hover:bg-transparent"
                        asChild
                      >
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <InstagramIcon className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-700 hover:bg-transparent"
                        asChild
                      >
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <LinkedInIcon className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      className="justify-start text-sm font-normal font-default"
                      asChild
                    >
                      <Link href="/signin" onClick={() => setMobileMenuOpen(false)}>
                        Sign in
                      </Link>
                    </Button>

                    <Button
                      className={cn("w-full font-default", colorClasses.microsoft.redButton)}
                      asChild
                    >
                      <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                        Sign up
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION BAR - Full Width Navigation */}
      <div className="hidden md:block  w-full bg-[#123076] py-1">
        <nav className="container mx-auto">
          <ul className="flex w-full justify-between items-center m-0 p-0 list-none uppercase">
            <li className="flex-1">
              <Link href="/" className={cn("w-full h-12 flex items-center justify-center text-sm tracking-wide font-bold uppercase hover:text-white/80 hover:bg-white/10 transition-colors font-sans", pathname === "/" ? "text-red-500" : "text-white")}>
              Home
              </Link>
            </li>
            {mainNavItems.map((item) => (
              item.items ? (
                <li key={item.title} className="flex-1 group relative">
                  <button 
                    className="w-full h-12 flex items-center justify-center gap-1 text-sm tracking-wide font-bold uppercase text-white hover:text-white/80 hover:bg-white/10 transition-colors font-sans cursor-pointer outline-none"
                  >
                    {item.title}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 pt-1">
                    <div className="w-[600px] bg-white rounded-md shadow-xl border border-gray-200 p-4 overflow-hidden">
                      <ul className="grid grid-cols-2 gap-4">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              href={subItem.href}
                              className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground", pathname === subItem.href ? "bg-red-50" : "")}
                            >
                              <div className={cn("text-md font-medium leading-none font-sans", pathname === subItem.href ? "text-red-600" : "text-slate-900")}>{subItem.title}</div>
                              <p className="line-clamp-2 text-sm capitalize leading-snug text-slate-500 font-default mt-1">
                                {subItem.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.title} className="flex-1">
                  <Link 
                    href={item.href!} 
                    className={cn("w-full h-12 flex items-center justify-center text-sm tracking-wide font-bold uppercase hover:text-white/80 hover:bg-white/10 transition-colors font-sans", pathname === item.href ? "text-red-500" : "text-white")}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            ))}

            <li className="flex-1">
              <Link 
                href="/contact" 
                className={cn("w-full h-12 flex items-center justify-center text-sm tracking-wide font-bold hover:text-white/80 hover:bg-white/10 transition-colors font-sans", pathname === "/contact" ? "text-red-500" : "text-white")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
