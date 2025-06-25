"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Snowflake } from 'lucide-react'
import Link from 'next/link'

const products = {
  daikin: {
    brand: 'Daikin',
    models: [
      {
        name: 'Comfora',
        images: ['/images/daikin-comfora-left.webp', '/images/daikin-comfora-right.webp'],
        features: ['Fluisterstil', 'A+++', 'WiFi Control', '2-Zone Motion Sensor'],
        description: 'De perfecte balans tussen comfort en energiebesparing',
        price: 'Offerte op maat'
      },
      {
        name: 'Emura',
        images: ['/images/daikin-emura-wit.webp', '/images/daikin-emura-zilver.webp', '/images/daikin-emura-zwart.webp'],
        features: ['Design model', 'A+++', 'WiFi Control', '3D Luchtstroom'],
        description: 'Bekroond design met superieure prestaties',
        price: 'Prijs op aanvraag'
      },
      {
        name: 'Stylish',
        images: ['/images/daikin-stylish-wit.webp', '/images/daikin-stylish-silver.webp', '/images/daikin-stylish-zwart.webp'],
        features: ['Compact design', 'A+++', 'Coanda effect', 'Silence mode'],
        description: 'Stijlvol en compact voor moderne interieurs',
        price: 'Gratis advies'
      },
      {
        name: 'Perfera',
        images: ['/images/daikin-perfera-wit.webp', '/images/Perfera-vloermodel-left.webp'],
        features: ['Vloer- & wandmodel', 'A+++', 'R-32 koudemiddel', 'Flash Streamer'],
        description: 'Topmodel met luchtzuivering en maximale efficiëntie',
        price: 'Vraag offerte'
      },
      {
        name: 'Ururu Sarara',
        images: ['/images/Ururu-Sarara-left.webp', '/images/Ururu-Sarara-right.webp'],
        features: ['Bevochtiging', 'Ontvochtiging', 'Luchtzuivering', 'A+++'],
        description: 'Het meest complete klimaatsysteem met 5-in-1 functionaliteit',
        price: 'Premium model'
      }
    ]
  },
  lg: {
    brand: 'LG',
    models: [
      {
        name: 'ArtCool Mirror',
        images: ['/images/lg-artcool-mirror.webp', '/images/rac-eu-lg-artcool-black.webp'],
        features: ['Spiegel design', 'A++', 'WiFi Control', 'Dual Inverter'],
        description: 'Luxe spiegel afwerking voor een unieke uitstraling',
        price: 'Design model'
      },
      {
        name: 'DualCool Premium',
        images: ['/images/LG-dualcool-indoor-premium.webp', '/images/rac-eu-lg-premium.webp'],
        features: ['Dual Inverter', 'A++', 'Fast Cooling', '10 jaar garantie compressor'],
        description: 'Premium prestaties met lange levensduur',
        price: 'Scherpe prijs'
      }
    ]
  },
  samsung: {
    brand: 'Samsung',
    models: [
      {
        name: 'WindFree Elite',
        images: ['/images/samsung/windfreeElite/WindFree_Elite_S2_Front_Web_RGB.webp'],
        features: ['WindFree koeling', 'A+++', 'AI Auto Cooling', 'PM 1.0 Filter'],
        description: 'Geen directe luchtstroom voor ultiem comfort',
        price: 'Top kwaliteit'
      },
      {
        name: 'WindFree Avant Black',
        images: ['/images/samsung/windreeAvantBlack/WindFree_Avant_Black_Front_Web_RGB.webp'],
        features: ['Premium Black design', 'WindFree', 'A+++', 'Motion Detect'],
        description: 'Elegante zwarte afwerking met WindFree technologie',
        price: 'Exclusief model'
      },
      {
        name: 'Luzon',
        images: ['/images/samsung/luzon/Luzon_S2_Front_Web_RGB.webp'],
        features: ['Betaalbaar', 'A++', 'Fast Cooling', 'Easy Filter Plus'],
        description: 'Uitstekende prijs-kwaliteit verhouding',
        price: 'Budget vriendelijk'
      }
    ]
  },
  mitsubishi: {
    brand: 'Mitsubishi Heavy Industries',
    models: [
      {
        name: 'Diamond Series',
        images: ['/images/Mitsubishi_heavy_indus/ZSX-T-510x512.webp'],
        features: ['Silent Mode', 'A++', 'Allergen Filter', 'Wide Airflow'],
        description: 'Japanse kwaliteit voor optimale betrouwbaarheid',
        price: 'Betrouwbaar'
      },
      {
        name: 'Titanium ZS-W',
        images: ['/images/Mitsubishi_heavy_indus/Mitsubishi-titanium-zs-wft.webp'],
        features: ['Titanium coating', 'A++', 'Self-cleaning', 'Jet Air'],
        description: 'Zelfreinigend met titanium beschermlaag',
        price: 'Gratis advies'
      }
    ]
  },
  toshiba: {
    brand: 'Toshiba',
    models: [
      {
        name: 'Haori',
        images: ['/images/Haori-zwart-vooraanzicht_3_11zon.webp', '/images/Haori-grijs-links_19_11zon.webp'],
        features: ['Textiel design', 'A+++', 'Ultra Silent', 'WiFi Ready'],
        description: 'Unieke stoffering voor perfecte integratie in uw interieur',
        price: 'Exclusief model'
      },
      {
        name: 'Daiseikai 10',
        images: ['/images/Daiseikai_10-Wit-vooraanzicht_4_11zon.webp'],
        features: ['R32 koudemiddel', 'A+++', 'Plasma Filter', 'Hi Power Mode'],
        description: 'Topklasse prestaties met eco-vriendelijk koudemiddel',
        price: 'Populair model'
      },
      {
        name: 'Kazumi Plus',
        images: ['/images/Kazumi-plus-white-vooraanzicht_8_11zon.webp'],
        features: ['Compact', 'A++', 'Quiet Mode', 'Weekly Timer'],
        description: 'Compacte oplossing voor kleinere ruimtes',
        price: 'Beste keuze'
      },
      {
        name: 'Seiya',
        images: ['/images/Seiya-plus-wit-vooraanzicht_12_11zon.webp'],
        features: ['Budget vriendelijk', 'A+', 'Easy Clean', 'Fireproof'],
        description: 'Instapmodel met alle essentiële functies',
        price: 'Instapmodel'
      }
    ]
  },
  tosot: {
    brand: 'Tosot',
    models: [
      {
        name: 'Pular',
        images: ['/images/568-Pular-indoor-vooraanzicht.webp'],
        features: ['WiFi Control', 'A++', 'I Feel functie', 'Turbo Mode'],
        description: 'Slimme airco met uitstekende prijs-kwaliteit',
        price: 'Smart deal'
      },
      {
        name: 'Clivia',
        images: ['/images/724-clivia-wit-vooraanzicht.webp', '/images/712-clivia-zwart-vooraanzicht.webp'],
        features: ['Modern design', 'A++', 'Sleep Mode', 'Self-diagnosis'],
        description: 'Stijlvol design in wit of zwart',
        price: 'Stijlvol'
      },
      {
        name: 'Cosmo',
        images: ['/images/787-cosmo-indoor-vooraanzicht.webp'],
        features: ['Premium model', 'A++', '4D Airflow', 'Golden Fin'],
        description: 'Topmodel met geavanceerde functies',
        price: 'Beste keuze'
      }
    ]
  }
}

const mobileAircos = [
  {
    brand: 'LG',
    name: 'Mobiele Airco',
    images: ['/images/mobiele_airco/lg mobiele airco/lg-mobiele-airco-staycoolairco.webp'],
    features: ['9000 BTU', 'Afstandsbediening', 'Timer functie', 'Ontvochtigen'],
    description: 'Krachtige mobiele koeling zonder installatie',
    price: 'Direct leverbaar'
  },
  {
    brand: 'Tosot',
    name: 'Mobiele Airco',
    images: ['/images/mobiele_airco/tosot mobiele airco/tosot-mobiele-airco-staycoolairco-1.webp'],
    features: ['12000 BTU', 'WiFi Control', '3-in-1 functie', 'Sleep Mode'],
    description: 'Slimme mobiele airco met app bediening',
    price: 'Nu in actie'
  }
]

const aircoCovers = [
  {
    name: 'Airco Cover Wit',
    images: ['/images/airco-covers/aircocover-wit.webp', '/images/airco-covers/aircocover-wit-voorkant.webp'],
    description: 'Stijlvolle witte afdekkap voor uw buitenunit',
    price: 'Op voorraad'
  },
  {
    name: 'Airco Cover Antraciet',
    images: ['/images/airco-covers/aircocover-antraciet.webp', '/images/airco-covers/aircocover-antraciet-vooraanzicht.webp'],
    description: 'Moderne antraciet afdekkap voor uw buitenunit',
    price: 'Op voorraad'
  }
]

export function ProductShowcase() {
  const [selectedBrand, setSelectedBrand] = useState('daikin')
  const [selectedImage, setSelectedImage] = useState<{[key: string]: number}>({})

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ons Complete Airco Assortiment
          </h2>
          <p className="text-lg text-gray-600">
            Ontdek alle topmerken en modellen - Airco kopen in Limburg was nog nooit zo eenvoudig
          </p>
        </div>

        {/* Brand Tabs */}
        <Tabs value={selectedBrand} onValueChange={setSelectedBrand} className="mb-12">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full max-w-4xl mx-auto">
            {Object.keys(products).map((brand) => (
              <TabsTrigger key={brand} value={brand} className="text-sm">
                {products[brand as keyof typeof products].brand}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(products).map(([brandKey, brandData]) => (
            <TabsContent key={brandKey} value={brandKey} className="mt-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {brandData.models.map((model, index) => {
                  const imageIndex = selectedImage[`${brandKey}-${index}`] || 0
                  return (
                    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-64 bg-gray-50">
                        {model.images[imageIndex] && (
                          <Image
                            src={model.images[imageIndex]}
                            alt={`${brandData.brand} ${model.name} airco voor installatie in Limburg`}
                            fill
                            className="object-contain p-4"
                          />
                        )}
                        {model.images.length > 1 && (
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {model.images.map((_, imgIndex) => (
                              <button
                                key={imgIndex}
                                onClick={() => setSelectedImage({...selectedImage, [`${brandKey}-${index}`]: imgIndex})}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  imgIndex === imageIndex ? 'bg-orange-500' : 'bg-gray-300'
                                }`}
                                aria-label={`Bekijk afbeelding ${imgIndex + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{brandData.brand} {model.name}</CardTitle>
                          <Badge className="bg-green-600 text-white font-semibold">{model.price}</Badge>
                        </div>
                        <CardDescription>{model.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {model.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                          <Link href="/offerte">
                            Ontdek Uw Prijs
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Mobile Aircos Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Mobiele Airco's - Direct Verkoeling Zonder Installatie
          </h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {mobileAircos.map((airco, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 bg-gray-50">
                  <Image
                    src={airco.images[0]}
                    alt={`${airco.brand} mobiele airco te koop in Limburg`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{airco.brand} {airco.name}</CardTitle>
                    <Badge className="bg-blue-600 text-white font-semibold">{airco.price}</Badge>
                  </div>
                  <CardDescription>{airco.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {airco.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link href="/contact">Vraag Direct Aan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Airco Covers Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Airco Covers - Bescherm en Verfraai Uw Buitenunit
          </h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {aircoCovers.map((cover, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={cover.images[0]}
                    alt={`${cover.name} voor airco buitenunit bescherming`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{cover.name}</CardTitle>
                    <Badge className="bg-gray-600 text-white font-semibold">{cover.price}</Badge>
                  </div>
                  <CardDescription>{cover.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white" asChild>
                    <Link href="/contact">Check Beschikbaarheid</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Benieuwd naar de Mogelijkheden en Prijzen?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Elke situatie is uniek. Onze experts maken graag een persoonlijke berekening voor u. 
            Ontdek welk model het beste past én wat uw investering wordt - geheel vrijblijvend!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
              <Link href="/offerte">
                <Snowflake className="w-5 h-5 mr-2" />
                Gratis Offerte
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = 'tel:0462021430'}>
              Bel Voor Advies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}