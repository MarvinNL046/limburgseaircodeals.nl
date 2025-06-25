"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Wrench, Shield, Thermometer, Clock, CheckCircle, Play } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Thermometer,
    title: 'Airco Installatie',
    description: 'Professionele installatie van split-unit en multi-split systemen voor optimaal comfort.',
    features: [
      'Gratis inmeting & advies',
      'Binnen 3-5 werkdagen geïnstalleerd',
      'Alle topmerken leverbaar',
      '5 jaar installatiegarantie'
    ],
    link: '/diensten/installatie'
  },
  {
    icon: Shield,
    title: 'Onderhoud & Service',
    description: 'Regelmatig onderhoud voor optimale prestaties en langere levensduur van uw airco.',
    features: [
      'Jaarlijkse onderhoudsbeurt',
      'Filter reiniging & vervanging',
      'Koelvloeistof controle',
      'Onderhoudscontract mogelijk'
    ],
    link: '/diensten/onderhoud'
  },
  {
    icon: Wrench,
    title: 'Reparatie & Storing',
    description: 'Professionele storingsdienst voor snelle oplossing van airco problemen in heel Limburg.',
    features: [
      'Bereikbaar tijdens kantooruren',
      'Snelle responstijd',
      'Ervaren monteurs',
      'Transparante prijzen'
    ],
    link: '/diensten/reparatie'
  }
]

export function ServicesOptimized() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Service Limburg
          </h2>
          <p className="text-lg text-gray-600">
            Uw airco specialist in Zuid-Limburg - Van Maastricht tot Roermond, van Heerlen tot Sittard
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                {/* Icon Header */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700" />
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Meer informatie
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Airco Service Sittard, Geleen & Heerlen
              </h3>
              <p className="text-gray-600 mb-6">
                Ontdek hoe we airco's installeren in Brunssum, Landgraaf, Kerkrade en heel Parkstad. 
                Van split airco tot klimaatbeheersing - wij zijn uw aircospecialist in Zuid-Limburg.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">3 minuten kijktijd</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Gecertificeerde installateurs aan het werk</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Zie ons installatieproces</span>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-gray-900">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9m-jkGgfLog" 
                title="StayCool Airco Bedrijfsvideo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Wilt u meer weten over onze services of direct een afspraak maken?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
              onClick={() => window.location.href = 'tel:0462021430'}
            >
              Bel Direct: 046 202 1430
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
              asChild
            >
              <Link href="/offerte">Vraag Offerte Aan</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}