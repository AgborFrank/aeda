"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { colorClasses } from "@/lib/constants"
import Link from "next/link"

interface HeroProps {
  images?: string[]
  title?: string | string[]
  subtitle?: string | string[]
  description?: string | string[]
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Hero({
  images = [],
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  autoPlay = true,
  autoPlayInterval = 4000,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  // Determine the number of slides (max of images length or text content arrays length)
  const titleArray = Array.isArray(title) ? title : [title].filter(Boolean)
  const subtitleArray = Array.isArray(subtitle) ? subtitle : [subtitle].filter(Boolean)
  const descriptionArray = Array.isArray(description) ? description : [description].filter(Boolean)
  const maxSlides = Math.max(images.length, titleArray.length, subtitleArray.length, descriptionArray.length, 1)

  // Auto-play functionality - infinite loop
  React.useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    // Don't start auto-play if disabled or only one slide
    if (!autoPlay || maxSlides <= 1) {
      return
    }

    // Start the interval
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSlides)
    }, autoPlayInterval)

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [autoPlay, autoPlayInterval, maxSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxSlides)
  }

  return (
    <section 
      className="relative w-full min-h-[600px] lg:min-h-[600px] overflow-hidden"
    >
      {/* Background Image Slider */}
      {images.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentIndex % images.length ? "opacity-100 z-0" : "opacity-0 z-0"
              )}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
            </div>
          ))}
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16 h-full">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
            {/* Left Column - Text Content Slider */}
            <div className="flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1 relative z-10">
              <div className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
                {Array.from({ length: maxSlides }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 flex flex-col justify-center space-y-6 lg:space-y-8 transition-all duration-1000 ease-in-out",
                      index === currentIndex
                        ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
                        : "opacity-0 -translate-x-8 z-0 pointer-events-none"
                    )}
                  >
                    
                    
                    {titleArray[index] && (
                      <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold md:leading-14 leading-12 text-white">
                        {titleArray[index]}
                      </h1>
                    )}

                    {descriptionArray[index] && (
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        {descriptionArray[index]}
                      </p>
                    )}

                    {/* CTA Buttons - only show on first slide or if single content */}
                    {index === currentIndex && (primaryCTA || secondaryCTA) && (
                      <div className="flex flex-row gap-4 pt-4 relative z-20">
                        {primaryCTA && (
                          <Button
                            className={cn(
                              "w-auto px-6 py-6 text-base font-bold rounded-md relative z-20",
                              colorClasses.microsoft.blueButton
                            )}
                            asChild
                          >
                            <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
                          </Button>
                        )}
                        
                        {secondaryCTA && (
                          <Button
                          className={cn(
                            "w-auto px-6 py-6 text-base font-bold rounded-md relative z-20",
                            colorClasses.microsoft.blueButton
                          )}
                            asChild
                          >
                            <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              {maxSlides > 1 && (
                <div className="flex items-center gap-4 mt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-0"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {Array.from({ length: maxSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          index === currentIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75 w-2"
                        )}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border-0"
                    onClick={goToNext}
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column - Spacer */}
            <div className="hidden lg:block order-1 lg:order-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

