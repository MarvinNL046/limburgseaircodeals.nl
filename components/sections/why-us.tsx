"use client"

import { Button } from '@/components/ui/button'
import { FileText, Users, Clock, Shield, Award, Phone, Zap, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: FileText,
    title: 'Gratis Offerte',
    description: 'Vrijblijvende offerte met heldere prijzen. Geen verborgen kosten, altijd transparant.',
    highlight: true
  },
  {
    icon: Users,
    title: 'Gecertificeerde Monteurs',
    description: 'Al onze monteurs zijn F-gassen gecertificeerd en werken volgens de hoogste standaarden.',
    highlight: false
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Bereikbaar tijdens kantooruren ma-vr 09:00-17:00. Snelle responstijd bij storingen.',
    highlight: false
  },
  {
    icon: Shield,
    title: '5 Jaar Garantie',
    description: 'Uitgebreide garantie op alle installaties. Uw investering is bij ons gewaarborgd.',
    highlight: true
  },
  {
    icon: Award,
    title: 'Topmerken',
    description: 'Wij werken met A-merken zoals Daikin, Mitsubishi, LG en Samsung voor beste kwaliteit.',
    highlight: false
  },
  {
    icon: Zap,
    title: 'Snelle Installatie',
    description: 'Installatie binnen 3-5 werkdagen. Professioneel en met minimale overlast.',
    highlight: false
  },
  {
    icon: ThumbsUp,
    title: '4.7/5 Klantbeoordeling',
    description: 'Op basis van 163 Google reviews. Onze klanten waarderen onze service en kwaliteit.',
    highlight: true
  },
  {
    icon: Phone,
    title: 'Persoonlijk Advies',
    description: 'Deskundig advies op maat. We helpen u de beste keuze te maken voor uw situatie.',
    highlight: false
  }
]

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            <span className="text-sm font-semibold">✅ 500+ tevreden klanten in 2024</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Waarom 93% Voor Ons Kiest
          </h2>
          <p className="text-lg text-gray-600">
            <strong>4.7 ⭐ Google score</strong> • 163 reviews • Meest gekozen in Limburg
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`relative p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                  benefit.highlight 
                    ? 'bg-blue-50 border-blue-200 hover:border-blue-300' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  benefit.highlight ? 'bg-blue-600' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    benefit.highlight ? 'text-white' : 'text-gray-700'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>

                {/* Highlight Badge */}
                {benefit.highlight && (
                  <div className="absolute -top-2 -right-2">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Jaar Ervaring</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Installaties per Jaar</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">Ma-Vr</div>
              <p className="text-gray-600">09:00 - 17:00</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.7/5</div>
              <p className="text-gray-600">Klantbeoordeling</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Airco Limburg Aanbieding - Vraag Nu Offerte
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Binnen 24 uur ontvangt u een persoonlijke offerte op maat. 
            Geen verplichtingen, wel de beste service van Limburg.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg px-8"
              asChild
            >
              <Link href="/offerte">
                Vraag Gratis Offerte Aan
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
              onClick={() => window.location.href = 'tel:0462021430'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel 046 202 1430
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}