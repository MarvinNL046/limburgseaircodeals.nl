import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Sitemap | Limburgse Airco Deals',
  description: 'Overzicht van alle paginas op Limburgse Airco Deals website.',
  alternates: {
    canonical: 'https://limburgseaircodeals.nl/sitemap'
  }
}

export default function SitemapPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Hoofdpagina's */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Hoofdpagina's</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link href="/over-ons" className="text-blue-600 hover:underline">Over Ons</Link></li>
            <li><Link href="/contact" className="text-blue-600 hover:underline">Contact</Link></li>
            <li><Link href="/offerte" className="text-blue-600 hover:underline">Offerte Aanvragen</Link></li>
            <li><Link href="/faq" className="text-blue-600 hover:underline">Veelgestelde Vragen</Link></li>
          </ul>
        </div>

        {/* Diensten */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Diensten</h2>
          <ul className="space-y-2">
            <li><Link href="/diensten" className="text-blue-600 hover:underline">Alle Diensten</Link></li>
            <li><Link href="/diensten/installatie" className="text-blue-600 hover:underline">Airco Installatie</Link></li>
            <li><Link href="/diensten/onderhoud" className="text-blue-600 hover:underline">Airco Onderhoud</Link></li>
            <li><Link href="/diensten/reparatie" className="text-blue-600 hover:underline">Airco Reparatie</Link></li>
          </ul>
        </div>

        {/* Merken */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Merken</h2>
          <ul className="space-y-2">
            <li><Link href="/merken" className="text-blue-600 hover:underline">Alle Merken</Link></li>
            <li><Link href="/merken/daikin" className="text-blue-600 hover:underline">Daikin</Link></li>
            <li><Link href="/merken/mitsubishi-electric" className="text-blue-600 hover:underline">Mitsubishi Electric</Link></li>
            <li><Link href="/merken/mitsubishi-heavy" className="text-blue-600 hover:underline">Mitsubishi Heavy</Link></li>
            <li><Link href="/merken/lg" className="text-blue-600 hover:underline">LG</Link></li>
            <li><Link href="/merken/samsung" className="text-blue-600 hover:underline">Samsung</Link></li>
            <li><Link href="/merken/toshiba" className="text-blue-600 hover:underline">Toshiba</Link></li>
            <li><Link href="/merken/tosot" className="text-blue-600 hover:underline">Tosot</Link></li>
          </ul>
        </div>

        {/* Steden */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Populaire Steden</h2>
          <ul className="space-y-2">
            <li><Link href="/steden" className="text-blue-600 hover:underline">Alle Steden</Link></li>
            <li><Link href="/steden/maastricht" className="text-blue-600 hover:underline">Maastricht</Link></li>
            <li><Link href="/steden/heerlen" className="text-blue-600 hover:underline">Heerlen</Link></li>
            <li><Link href="/steden/sittard" className="text-blue-600 hover:underline">Sittard</Link></li>
            <li><Link href="/steden/roermond" className="text-blue-600 hover:underline">Roermond</Link></li>
            <li><Link href="/steden/venlo" className="text-blue-600 hover:underline">Venlo</Link></li>
          </ul>
        </div>

        {/* Kennisbank */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Kennisbank</h2>
          <ul className="space-y-2">
            <li><Link href="/kennisbank" className="text-blue-600 hover:underline">Alle Artikelen</Link></li>
            <li><Link href="/kennisbank/hoe-werkt-airco" className="text-blue-600 hover:underline">Hoe Werkt een Airco?</Link></li>
            <li><Link href="/kennisbank/energiebesparing" className="text-blue-600 hover:underline">Energiebesparing</Link></li>
            <li><Link href="/kennisbank/onderhoud-tips" className="text-blue-600 hover:underline">Onderhoud Tips</Link></li>
            <li><Link href="/kennisbank/klimaatbeheersing" className="text-blue-600 hover:underline">Klimaatbeheersing</Link></li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Blog</h2>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-blue-600 hover:underline">Alle Blogs</Link></li>
            <li><Link href="/blog/voordelen-van-airconditioning" className="text-blue-600 hover:underline">Voordelen van Airconditioning</Link></li>
          </ul>
        </div>

        {/* Juridisch */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-orange-600">Juridisch</h2>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-blue-600 hover:underline">Privacyverklaring</Link></li>
            <li><Link href="/voorwaarden" className="text-blue-600 hover:underline">Algemene Voorwaarden</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>XML Sitemap voor zoekmachines:</strong>{' '}
          <a href="/sitemap.xml" className="text-blue-600 hover:underline">sitemap.xml</a>
        </p>
      </div>
    </div>
  )
}