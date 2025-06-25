"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Navigation } from 'lucide-react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

const formSchema = z.object({
  name: z.string().min(2, 'Naam moet minimaal 2 karakters bevatten'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Telefoonnummer is verplicht'),
  subject: z.string().min(3, 'Onderwerp is verplicht'),
  message: z.string().min(10, 'Bericht moet minimaal 10 karakters bevatten'),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefoon',
    content: '046 202 1430',
    description: 'Ma-Vr: 09:00-17:00',
    action: 'tel:0462021430',
    color: 'text-blue-600'
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'info@staycoolairco.nl',
    description: 'Antwoord binnen 24 uur',
    action: 'mailto:info@staycoolairco.nl',
    color: 'text-green-600'
  },
  {
    icon: MapPin,
    title: 'Adres',
    content: 'Aan de Bogen 11',
    description: '6118 AS Nieuwstadt',
    action: null,
    color: 'text-orange-600'
  },
  {
    icon: Clock,
    title: 'Openingstijden',
    content: 'Ma-Vr: 09:00-17:00',
    description: 'Za-Zo: Gesloten',
    action: null,
    color: 'text-purple-600'
  }
]

export function ContactOptimized() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
          to_name: 'StayCool Airco',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      toast.success('Bericht verzonden! We nemen spoedig contact met u op.')
      reset()
    } catch (error) {
      toast.error('Er ging iets mis. Probeer het later opnieuw of bel ons direct.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Installatie Limburg - Contact
          </h2>
          <p className="text-lg text-gray-600">
            Airco kopen Limburg? Vraag direct een vrijblijvende offerte aan voor uw woning of bedrijf
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <Card className="shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Contactgegevens</CardTitle>
                <CardDescription>
                  Bereik ons via telefoon, e-mail of bezoek ons kantoor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Items */}
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        {item.action ? (
                          <a 
                            href={item.action}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-medium">{item.content}</p>
                        )}
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  )
                })}

                {/* WhatsApp CTA */}
                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                    Direct contact via WhatsApp
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Stuur ons een bericht voor snelle hulp
                  </p>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.open('https://wa.me/31462021430', '_blank')}
                  >
                    Open WhatsApp
                  </Button>
                </div>

                {/* Map Note */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <Navigation className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Let op:</strong> Aan de Bogen 11 is geen bezoekadres. 
                      Voor afspraken komen wij graag naar u toe!
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                ✓ 100% Gratis & Vrijblijvend
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Start Uw Aanvraag - 2 Minuten</CardTitle>
                <CardDescription>
                  <span className="font-semibold text-orange-600">⏱️ Gemiddelde reactietijd: 2 uur</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Naam *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Uw naam"
                        className="mt-1"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefoon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="06-12345678"
                        className="mt-1"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="uw@email.nl"
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Onderwerp *</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="Bijv. Offerte aanvraag airco installatie"
                      className="mt-1"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Bericht *</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Vertel ons meer over uw wensen..."
                      className="mt-1 min-h-[120px]"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      'Verzenden...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Ontvang Uw Offerte →
                      </>
                    )}
                  </Button>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        ✓ <span className="font-medium">Gratis offerte</span>
                      </span>
                      <span className="flex items-center gap-1">
                        ✓ <span className="font-medium">Geen verplichtingen</span>
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Door dit formulier te verzenden gaat u akkoord met onze{' '}
                      <a href="/privacy" className="text-blue-600 hover:underline">
                        privacyverklaring
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}