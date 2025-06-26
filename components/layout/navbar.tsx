"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Producten', href: '/producten' },
  {
    name: 'Diensten',
    href: '/diensten',
    submenu: [
      { name: 'Airco Installatie', href: '/diensten/installatie' },
      { name: 'Airco Onderhoud', href: '/diensten/onderhoud' },
      { name: 'Airco Reparatie', href: '/diensten/reparatie' },
    ]
  },
  {
    name: 'Merken',
    href: '/merken',
    submenu: [
      { name: 'Daikin', href: '/merken/daikin' },
      { name: 'Mitsubishi Electric', href: '/merken/mitsubishi-electric' },
      { name: 'Mitsubishi Heavy', href: '/merken/mitsubishi-heavy' },
      { name: 'LG', href: '/merken/lg' },
      { name: 'Samsung', href: '/merken/samsung' },
      { name: 'Toshiba', href: '/merken/toshiba' },
      { name: 'Tosot', href: '/merken/tosot' },
    ]
  },
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Kennisbank', href: '/kennisbank' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasCTABanner, setHasCTABanner] = useState(true)
  
  // Determine if we're on the homepage based on pathname
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Check if CTA banner is closed
    const checkCTABanner = () => {
      const bannerClosed = localStorage.getItem('cta-banner-closed')
      setHasCTABanner(!bannerClosed)
    }

    checkCTABanner()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('storage', checkCTABanner)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('storage', checkCTABanner)
    }
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        hasCTABanner ? 'top-[52px]' : 'top-0'
      } ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className={`text-xl lg:text-2xl font-bold transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white drop-shadow-md'
            }`}>
              Limburgse
            </span>
            <span className={`text-xl lg:text-2xl font-bold text-orange-500 ${
              !isScrolled && isHomePage ? 'drop-shadow-md' : ''
            }`}>
              Airco Deals
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className={`font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${
                            isScrolled || !isHomePage
                              ? 'text-gray-700 hover:text-orange-500' 
                              : 'text-white drop-shadow-sm hover:text-orange-400'
                          } transition-colors`}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.name}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium ${
                          isScrolled || !isHomePage ? 'text-gray-700' : 'text-white drop-shadow-sm'
                        } hover:text-orange-500 transition-colors`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={`font-medium ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10 bg-white/10 backdrop-blur-sm'
                }`}
                onClick={() => window.location.href = 'tel:0462021430'}
              >
                <Phone className="w-4 h-4 mr-2" />
                046 202 1430
              </Button>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg"
                asChild
              >
                <Link href="/offerte">Gratis Offerte</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-md min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container py-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer min-h-[44px]">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md min-h-[44px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                asChild
              >
                <Link href="/offerte">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = 'tel:0462021430'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Bel 046 202 1430
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}