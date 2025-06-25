import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Limburgse Airco Deals',
  description: 'Algemene voorwaarden van Limburgse Airco Deals voor airco installatie, onderhoud en reparatie.',
  alternates: {
    canonical: 'https://limburgseaircodeals.nl/voorwaarden'
  }
}

export default function VoorwaardenPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">
          Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 1 - Definities</h2>
        <p>In deze algemene voorwaarden wordt verstaan onder:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Opdrachtnemer:</strong> Limburgse Airco Deals / StayCool Airco, gevestigd te Nieuwstadt</li>
          <li><strong>Opdrachtgever:</strong> De natuurlijke of rechtspersoon die met opdrachtnemer een overeenkomst aangaat</li>
          <li><strong>Overeenkomst:</strong> De overeenkomst tussen opdrachtnemer en opdrachtgever</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 2 - Toepasselijkheid</h2>
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten 
          van Limburgse Airco Deals / StayCool Airco.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 3 - Offertes</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Alle offertes zijn vrijblijvend en 30 dagen geldig</li>
          <li>Prijzen zijn exclusief BTW tenzij anders vermeld</li>
          <li>Opdrachtnemer behoudt zich het recht voor prijzen te wijzigen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 4 - Uitvoering van de overeenkomst</h2>
        <p>
          Opdrachtnemer zal de overeenkomst naar beste inzicht en vermogen uitvoeren. 
          De opdrachtgever draagt er zorg voor dat alle gegevens en faciliteiten, 
          die opdrachtnemer nodig heeft voor het uitvoeren van de overeenkomst, tijdig beschikbaar zijn.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 5 - Garantie</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>5 jaar garantie op installatie werkzaamheden</li>
          <li>Fabrieksgarantie op geleverde apparatuur</li>
          <li>Garantie vervalt bij ondeskundig gebruik of onderhoud door derden</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 6 - Betaling</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum</li>
          <li>Bij niet tijdige betaling is opdrachtgever in verzuim</li>
          <li>Opdrachtnemer heeft het recht wettelijke rente en incassokosten in rekening te brengen</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 7 - Aansprakelijkheid</h2>
        <p>
          De aansprakelijkheid van opdrachtnemer is beperkt tot het bedrag van de opdracht. 
          Opdrachtnemer is niet aansprakelijk voor gevolgschade.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 8 - Overmacht</h2>
        <p>
          In geval van overmacht is opdrachtnemer niet gehouden tot nakoming van de overeenkomst. 
          Als overmacht situatie langer dan 90 dagen duurt, hebben beide partijen het recht de overeenkomst te ontbinden.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 9 - Klachten</h2>
        <p>
          Klachten dienen binnen 8 dagen na constatering schriftelijk te worden gemeld. 
          Na deze termijn vervalt elke aanspraak.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Artikel 10 - Toepasselijk recht</h2>
        <p>
          Op alle overeenkomsten is Nederlands recht van toepassing. 
          Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Limburg.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mt-8">
          <p><strong>Contact</strong></p>
          <p>Limburgse Airco Deals / StayCool Airco</p>
          <p>E-mail: info@staycoolairco.nl</p>
          <p>Telefoon: 046 202 1430</p>
          <p>KvK-nummer: [KvK nummer]</p>
        </div>
      </div>
    </div>
  )
}