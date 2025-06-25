import { Metadata } from "next"
import { HeroOptimized } from "@/components/sections/hero-optimized"
import { ServicesOptimized } from "@/components/sections/services-optimized"
import { WhyUs } from "@/components/sections/why-us"
import { BrandLogos } from "@/components/sections/brand-logos"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { ContactOptimized } from "@/components/sections/contact-optimized"
import { CTABannerOptimized, StickyCTABanner } from "@/components/sections/cta-banner-optimized"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Limburgse Airco Deals | #1 in Airconditioning ✓',
  description: 'Dé airco specialist van Limburg! Professionele airco installatie voor woning en bedrijf door StayCool Airco. ✓ Gratis offerte ✓ Erkend installateur ✓ Alle topmerken ✓ 5 jaar garantie. Bel: 046 202 1430',
  alternates: {
    canonical: 'https://limburgseaircodeals.nl'
  }
}

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <main>
        <CTABannerOptimized theme="light" position="top" />
        <HeroOptimized />
        <ServicesOptimized />
        <WhyUs />
        <BrandLogos />
        <ProductShowcase />
        <ContactOptimized />
        <CTABannerOptimized theme="dark" position="bottom" />
        <StickyCTABanner />
      </main>
    </>
  )
}
