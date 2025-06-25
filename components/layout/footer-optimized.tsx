import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Star } from 'lucide-react'

const footerLinks = {
  diensten: [
    { name: 'Airco Installatie', href: '/diensten/installatie' },
    { name: 'Airco Onderhoud', href: '/diensten/onderhoud' },
    { name: 'Airco Reparatie', href: '/diensten/reparatie' },
  ],
  merken: [
    { name: 'Daikin', href: '/merken/daikin' },
    { name: 'Mitsubishi Electric', href: '/merken/mitsubishi-electric' },
    { name: 'LG', href: '/merken/lg' },
    { name: 'Samsung', href: '/merken/samsung' },
    { name: 'Toshiba', href: '/merken/toshiba' },
    { name: 'Tosot', href: '/merken/tosot' },
  ],
  informatie: [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Kennisbank', href: '/kennisbank' },
    { name: 'Veelgestelde Vragen', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  steden: [
    { name: 'Maastricht', href: '/steden/maastricht' },
    { name: 'Heerlen', href: '/steden/heerlen' },
    { name: 'Sittard', href: '/steden/sittard' },
    { name: 'Roermond', href: '/steden/roermond' },
    { name: 'Alle Steden', href: '/steden' },
  ]
}

export function FooterOptimized() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-1">
                <span className="text-2xl font-bold">Limburgse</span>
                <span className="text-2xl font-bold text-orange-500">Airco Deals</span>
              </Link>
              <p className="mt-2 text-sm text-gray-400">
                Powered by StayCool Airco - Uw specialist in airconditioning
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:0462021430" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-orange-500" />
                <span>046 202 1430</span>
              </a>
              <a 
                href="mailto:info@staycoolairco.nl" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-orange-500" />
                <span>info@staycoolairco.nl</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p>Aan de Bogen 11</p>
                  <p>6118 AS Nieuwstadt</p>
                  <p className="text-xs text-gray-500 mt-1">(Geen bezoekadres)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p>Ma-Vr: 09:00 - 17:00</p>
                  <p>Za-Zo: Gesloten</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Volg ons</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=9m-jkGgfLog"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Diensten
            </h3>
            <ul className="space-y-2">
              {footerLinks.diensten.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Merken
            </h3>
            <ul className="space-y-2">
              {footerLinks.merken.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Informatie
            </h3>
            <ul className="space-y-2">
              {footerLinks.informatie.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.7/5</span>
              </div>
              <p className="text-xs text-gray-400">163 Google Reviews</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">F-Gassen Gecertificeerd</p>
              <p className="text-xs text-gray-400">Erkend installateur</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">5 Jaar Garantie</p>
              <p className="text-xs text-gray-400">Op alle installaties</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">Ma-Vr Service</p>
              <p className="text-xs text-gray-400">09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Limburgse Airco Deals - Een StayCool Airco initiatief. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/voorwaarden" className="hover:text-white transition-colors">
                Voorwaarden
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}