"use client"

import { useState, useEffect } from 'react'
import { X, Phone, Clock, Zap, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CTABannerProps {
  theme?: 'light' | 'dark'
  position?: 'top' | 'bottom'
}

export function CTABannerOptimized({ theme = 'light', position = 'top' }: CTABannerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Check if user has already closed the banner
    const bannerClosed = localStorage.getItem('cta-banner-closed')
    if (bannerClosed) {
      setHasInteracted(true)
      return
    }

    // Show banner after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, position === 'top' ? 1000 : 5000)

    return () => clearTimeout(timer)
  }, [position])

  const handleClose = () => {
    setIsVisible(false)
    setHasInteracted(true)
    localStorage.setItem('cta-banner-closed', 'true')
    // Dispatch storage event for other components
    window.dispatchEvent(new Event('storage'))
  }

  if (!isVisible || hasInteracted) return null

  const bgColor = theme === 'dark' 
    ? 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900' 
    : 'bg-gradient-to-r from-orange-500 to-orange-600'

  const textColor = 'text-white'

  return (
    <div className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 z-50 ${bgColor} shadow-lg`}>
      <div className="container">
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-4">
          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className={`text-center sm:text-left ${textColor}`}>
              <p className="text-sm sm:text-base font-semibold">
                🔥 ACTIE: Tot 40% korting op geselecteerde airco's + vakkundige installatie!
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                <Clock className="inline w-3 h-3 mr-1 animate-pulse" />
                <span className="font-bold">Beperkte voorraad</span> • Profiteer van de laagste prijzen
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-sm"
              onClick={() => window.location.href = 'tel:0462021430'}
            >
              <Phone className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Bel Nu</span>
              <span className="sm:hidden">Bel</span>
            </Button>
            <Button
              size="sm"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 font-semibold"
              onClick={() => window.location.href = '/offerte'}
            >
              Claim Korting
            </Button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className={`absolute top-2 right-2 sm:static p-1 rounded-full hover:bg-white/20 transition-colors ${textColor}`}
            aria-label="Sluit banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Sticky CTA Banner Component
export function StickyCTABanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 50% of the page
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercentage > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-scaleIn max-w-[calc(100vw-2rem)]">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl shadow-2xl p-4 sm:p-6 w-64 sm:w-72 relative overflow-hidden">
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transform rotate-12 shadow-md">
          ACTIE!
        </div>
        <div className="text-center mb-4">
          <p className="text-base sm:text-lg font-bold mb-1">💬 Persoonlijk advies?</p>
          <p className="text-sm opacity-90">Profiteer van onze actie</p>
        </div>
        <div className="space-y-3">
          <Button
            size="default"
            className="bg-white text-orange-600 hover:bg-gray-100 w-full font-semibold shadow-sm"
            onClick={() => window.location.href = 'tel:0462021430'}
          >
            <Phone className="w-4 h-4 mr-2" />
            Bel 046 202 1430
          </Button>
          <Button
            size="default"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/20 w-full font-semibold"
            onClick={() => window.open('https://wa.me/31636481054', '_blank')}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
          aria-label="Sluit"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}