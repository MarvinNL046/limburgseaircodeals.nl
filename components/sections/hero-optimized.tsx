"use client"

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, CheckCircle, Star, Shield, Award } from 'lucide-react'
import { toast } from 'sonner'
import { sendEmail } from '@/lib/emailjs'

const formSchema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Telefoonnummer is verplicht'),
  city: z.string().min(2, 'Woonplaats is verplicht'),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
})

type FormData = z.infer<typeof formSchema>

const rotatingTexts = [
  "Airco Maastricht, Heerlen & Sittard",
  "Split Airco Brunssum & Parkstad",
  "Airco Service Voerendaal & Hoensbroek",
  "Airconditioning Kerkrade & Roermond"
]

export function HeroOptimized() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    const text = rotatingTexts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== text) {
        setDisplayText(text.slice(0, displayText.length + 1))
      } else if (!isDeleting && displayText === text) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText !== '') {
        setDisplayText(displayText.slice(0, -1))
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      await sendEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message
      })
      
      toast.success('Bedankt! We nemen binnen 24 uur contact met u op.')
      reset()
    } catch (error) {
      toast.error('Er ging iets mis. Probeer het later opnieuw.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-[140px]">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-orange-300">🔥 NU: Laagste prijsgarantie</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                #1 Airco Installateur
                <span className="block text-orange-500 mt-2">in Limburg</span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="h-16 flex items-center">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-orange-500 ml-1 animate-blink"></span>
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.7/5 (163 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Erkend installateur</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-blue-400" />
                <span>5 jaar garantie</span>
              </div>
            </div>

            {/* USP List */}
            <ul className="space-y-3">
              {[
                '✓ Laagste prijs garantie - Vind u elders goedkoper bij een BRL 100 & 200 gecertificeerd bedrijf? Wij matchen!',
                '✓ Binnen 3 dagen geïnstalleerd (of sneller bij spoed)',
                '✓ Alle topmerken: Daikin, Mitsubishi, LG & Samsung',
                '✓ Onderhoud vanaf €11/maand - Inclusief 5 jaar garantie'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-200 min-h-[44px]"
                onClick={() => window.location.href = 'tel:0462021430'}
              >
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Bel Direct</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 font-semibold min-h-[44px]"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                <span className="text-sm sm:text-base">Gratis Offerte</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            {/* Ribbon */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="bg-red-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-lg transform rotate-12 animate-pulse">
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span className="text-lg">⚡</span>
                  <span>BEPERKTE ACTIE</span>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div id="contact-form" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Vraag Uw Persoonlijke Offerte Aan</h3>
              <p className="text-gray-300 mb-6">🎯 Nog 8 acties beschikbaar deze maand</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Naam *</Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
                    placeholder="Uw naam"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
                    placeholder="uw@email.nl"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Telefoon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
                    placeholder="06-12345678"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="city" className="text-white">Woonplaats *</Label>
                  <Input
                    id="city"
                    {...register('city')}
                    className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500"
                    placeholder="Bijv. Maastricht"
                  />
                  {errors.city && (
                    <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Bericht *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="bg-white/90 border-white/30 text-gray-900 placeholder:text-gray-500 min-h-[100px]"
                    placeholder="Vertel ons over uw airco wensen..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] min-h-[48px]"
                >
                  {isSubmitting ? 'Verzenden...' : '→ Claim Uw Korting Nu'}
                </Button>

                <p className="text-xs text-gray-300 text-center">
                  Door dit formulier te verzenden gaat u akkoord met onze{' '}
                  <a href="/privacy" className="underline hover:text-white">
                    privacyverklaring
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}