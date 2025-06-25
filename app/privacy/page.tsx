import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Privacyverklaring | Limburgse Airco Deals',
  description: 'Privacyverklaring van Limburgse Airco Deals. Lees hoe wij omgaan met uw persoonsgegevens.',
  alternates: {
    canonical: 'https://limburgseaircodeals.nl/privacy'
  }
}

export default function PrivacyPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacyverklaring</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">
          Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introductie</h2>
        <p>
          Limburgse Airco Deals, onderdeel van StayCool Airco, hecht veel waarde aan de bescherming van uw persoonsgegevens. 
          In deze privacyverklaring leggen we uit hoe wij omgaan met persoonsgegevens die wij verwerken in het kader van onze dienstverlening.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Persoonsgegevens die wij verwerken</h2>
        <p>Wij verwerken de volgende persoonsgegevens:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Voor- en achternaam</li>
          <li>Adresgegevens</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres</li>
          <li>Gegevens over uw woning (voor offerte op maat)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Doeleinden van de verwerking</h2>
        <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Het uitbrengen van offertes</li>
          <li>Het uitvoeren van overeenkomsten</li>
          <li>Het onderhouden van klantcontact</li>
          <li>Het voldoen aan wettelijke verplichtingen</li>
          <li>Het versturen van serviceberichten</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Bewaartermijnen</h2>
        <p>
          Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor deze zijn verstrekt 
          dan wel op grond van de wet is vereist. Voor administratieve gegevens hanteren wij de wettelijke bewaartermijn van 7 jaar.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Delen van persoonsgegevens</h2>
        <p>
          Wij delen uw gegevens alleen met derden als dit noodzakelijk is voor de uitvoering van onze overeenkomst 
          met u of om te voldoen aan een wettelijke verplichting.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Beveiliging</h2>
        <p>
          Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beveiligen 
          tegen verlies of onrechtmatige verwerking.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Uw rechten</h2>
        <p>U heeft de volgende rechten:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Recht op inzage in uw persoonsgegevens</li>
          <li>Recht op rectificatie van onjuiste gegevens</li>
          <li>Recht op verwijdering van gegevens</li>
          <li>Recht op beperking van de verwerking</li>
          <li>Recht op dataportabiliteit</li>
          <li>Recht om bezwaar te maken</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact</h2>
        <p>
          Voor vragen over deze privacyverklaring of het uitoefenen van uw rechten kunt u contact met ons opnemen:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>Limburgse Airco Deals / StayCool Airco</strong></p>
          <p>E-mail: info@staycoolairco.nl</p>
          <p>Telefoon: 046 202 1430</p>
          <p>Adres: Aan de Bogen 11, 6118 AS Nieuwstadt</p>
        </div>
      </div>
    </div>
  )
}