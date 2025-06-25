import { Metadata } from "next"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { CTABannerOptimized } from "@/components/sections/cta-banner-optimized"

export const metadata: Metadata = {
  title: 'Airco Modellen & Prijzen | Alle Merken | Limburgse Airco Deals',
  description: 'Bekijk ons complete assortiment airco\'s van Daikin, Mitsubishi, LG, Samsung, Toshiba en Tosot. Vergelijk modellen en prijzen. Gratis offerte voor installatie in heel Limburg.',
  alternates: {
    canonical: 'https://limburgseaircodeals.nl/producten'
  }
}

export default function ProductenPage() {
  return (
    <>
      <CTABannerOptimized theme="light" position="top" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Airco Modellen & Prijzen
              <span className="block text-orange-500 mt-2">Alle Topmerken</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ontdek ons uitgebreide assortiment airconditioning systemen. 
              Van budget-vriendelijk tot premium design modellen.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>Daikin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>Mitsubishi</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>LG</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>Samsung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>Toshiba</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl"></span>
                <span>Tosot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />
    </>
  )
}