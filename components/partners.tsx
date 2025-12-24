"use client"

import * as React from "react"
import Image from "next/image"

interface PartnersProps {
  images?: string[]
  title?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  itemsPerView?: number
}

export function Partners({
  images = [],
  title = "Our Partners",
  autoPlay = true,
  autoPlayInterval = 3000,
  itemsPerView = 8,
}: PartnersProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)
  const [currentItemsPerView, setCurrentItemsPerView] = React.useState(itemsPerView)

  // If no images provided, use default partner images
  const partnerImages = images.length > 0 
    ? images 
    : Array.from({ length: 12 }, (_, i) => `/img/partners/${i + 1}.png`)

  // Responsive items per view: 6 on mobile, 8 on desktop
  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 1024) {
        setCurrentItemsPerView(5)
      } else {
        setCurrentItemsPerView(itemsPerView)
      }
    }
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [itemsPerView])

  const totalSlides = Math.ceil(partnerImages.length / currentItemsPerView)

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || isHovered || totalSlides <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, totalSlides])

  return (
    <section 
      className="relative w-full py-6 lg:py-8 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-0">
        <div className="max-w-full mx-auto">
         
          {/* Carousel Container */}
          <div className="relative">
            {/* Partner Images Grid */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full shrink-0"
                  >
                    <div className="flex w-full" style={{ gap: 0 }}>
                      {partnerImages
                        .slice(slideIndex * currentItemsPerView, (slideIndex + 1) * currentItemsPerView)
                        .map((image, imgIndex) => {
                          const actualIndex = slideIndex * currentItemsPerView + imgIndex
                          return (
                            <div
                              key={actualIndex}
                              className="h-32 lg:h-40 relative overflow-hidden"
                              style={{ 
                                width: `${100 / currentItemsPerView}%`,
                                flexShrink: 0,
                                margin: 0,
                                padding: 0
                              }}
                            >
                              <Image
                                src={image}
                                alt={`Partner ${actualIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 14vw"
                              />
                            </div>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

