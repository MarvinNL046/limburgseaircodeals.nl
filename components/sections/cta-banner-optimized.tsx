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
    }, position === 'top' ? 3000 : 8000)

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
    ? 'bg-gray-800/95 backdrop-blur-sm border-b border-gray-700' 
    : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'

  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-700'
  const accentColor = theme === 'dark' ? 'text-orange-400' : 'text-orange-600'

  return (
    <div className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 z-50 ${bgColor} shadow-sm`}>
      <div className="container">
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-3 py-2 px-4">
          {/* Left Content */}
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
              <Zap className={`w-4 h-4 ${accentColor}`} />
            </div>
            <div className={`text-center sm:text-left ${textColor}`}>
              <p className="text-xs sm:text-sm font-medium">
                <span className={`${accentColor} font-semibold`}>Actie:</span> Tot 40% korting op geselecteerde airco's
              </p>
              <p className="text-xs opacity-75 hidden sm:block">
                <Clock className="inline w-3 h-3 mr-1" />
                Beperkte voorraad • Profiteer nu
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className={`${theme === 'dark' 
                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                : 'bg-orange-500 text-white hover:bg-orange-600'} font-medium shadow-sm h-8 px-3 text-xs`}
              onClick={() => window.location.href = 'tel:0462021430'}
            >
              <Phone className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline">Bel Nu</span>
              <span className="sm:hidden">Bel</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className={`${theme === 'dark' 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'} font-medium h-8 px-3 text-xs`}
              onClick={() => window.location.href = '/offerte'}
            >
              Bekijk Actie
            </Button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className={`absolute top-1/2 -translate-y-1/2 right-2 sm:static sm:translate-y-0 p-1 rounded-full transition-colors ${
              theme === 'dark' 
                ? 'hover:bg-gray-700 text-gray-400' 
                : 'hover:bg-gray-100 text-gray-500'
            }`}
            aria-label="Sluit banner"
          >
            <X className="w-3 h-3" />
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