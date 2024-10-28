import { HeroCarousel } from '@/components/hero-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { PriceTable } from '@/components/price-table'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      
      <div className="container py-16">
        <section id="gallery" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
          <GalleryGrid />
        </section>

        <section id="prices" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Prices</h2>
          <div className="max-w-2xl mx-auto">
            <PriceTable />
          </div>
        </section>
      </div>
    </>
  )
}