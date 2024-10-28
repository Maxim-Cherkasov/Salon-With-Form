"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?q=80&w=2070",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070",
]

export function HeroCarousel() {
  return (
    <div className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="h-[calc(100vh-64px)]">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="w-full h-full bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">Premium Hair Styling</h2>
                      <p className="text-xl md:text-2xl">Discover your perfect look</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}