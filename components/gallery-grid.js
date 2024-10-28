"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const works = [
  "https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?q=80&w=800",
  "https://images.unsplash.com/photo-1605497787865-e6d2510c63d5?q=80&w=800",
  "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=800",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800",
  "https://images.unsplash.com/photo-1601597659193-307e80b033e6?q=80&w=800",
  "https://images.unsplash.com/photo-1633679317861-47f2882c6b8b?q=80&w=800",
]

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {works.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <AspectRatio ratio={1}>
              <img
                src={image}
                alt={`Hairstyle ${index + 1}`}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}