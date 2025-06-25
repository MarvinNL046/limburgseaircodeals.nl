import { Metadata } from "next"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { PriceCalculator } from "@/components/calculators/price-calculator"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Gratis Airco Offerte Limburg → Binnen 2 Uur Reactie | -30% Korting",
  description: "📋 Vraag NU gratis offerte aan! ✓ Persoonlijk advies ✓ Scherpe prijzen ✓ Binnen 2 uur reactie ✓ Geen kleine lettertjes. Profiteer van onze winteractie!",
}

export default function OffertePage() {
  const breadcrumbItems = [
    { label: "Offerte", href: "/offerte" }
  ]

  return (
    <div className="container py-12">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Vraag een Vrijblijvende Offerte Aan
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ontvang binnen 24 uur een offerte op maat voor uw airconditioning project
          </p>
          
          <PriceCalculator />
        </div>

        <div>
          <div className="sticky top-24">
            <h2 className="text-2xl font-bold mb-6">
              Direct Contact
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
