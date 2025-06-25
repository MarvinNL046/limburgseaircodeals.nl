"use client"

import { useEffect, useRef } from 'react'

const brands = [
  { name: 'Daikin', logo: '/images/brands/daikin.png', models: ['Comfora', 'Emura', 'Stylish', 'Perfera', 'Ururu Sarara'] },
  { name: 'LG', logo: '/images/brands/lg.png', models: ['ArtCool', 'DualCool Premium'] },
  { name: 'Samsung', logo: '/images/brands/samsung.png', models: ['WindFree series', 'Luzon'] },
  { name: 'Mitsubishi', logo: '/images/brands/mitsubishi.png', models: ['Heavy Industries'] },
  { name: 'Toshiba', logo: '/images/brands/toshiba.png', models: ['Haori', 'Daiseikai', 'Kazumi', 'Seiya'] },
  { name: 'Tosot', logo: '/images/brands/tosot.png', models: ['Pular', 'Clivia', 'Cosmo'] },
]

export function BrandLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const elements = container.querySelectorAll('.brand-item')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        if (isVisible) {
          element.classList.add('animate-fadeIn')
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Daikin & Mitsubishi Airco Limburg
          </h2>
          <p className="text-lg text-gray-600">
            Officieel dealer van topmerken - Airco kopen en laten installeren in heel Limburg
          </p>
        </div>

        {/* Brands Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="brand-item opacity-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                <div className="relative w-full h-20 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {/* Placeholder voor logo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                      {brand.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Models Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Airco Kopen en Laten Installeren Limburg
          </h3>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {brand.name}
                </h4>
                <ul className="space-y-1">
                  {brand.models.map((model, idx) => (
                    <li key={idx} className="text-sm text-gray-600 pl-4">
                      • {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Products */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Ook leverbaar:</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">Mobiele airco's van LG en Tosot</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">Airco covers in wit en antraciet</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Niet zeker welk merk het beste bij uw situatie past?
          </p>
          <a 
            href="/merken" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Bekijk alle merken en modellen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}