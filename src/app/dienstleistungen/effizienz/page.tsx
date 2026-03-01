import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Effizienz — Werkpilot',
  description:
    'Das beliebteste Paket für etablierte KMUs: Komplettes Marketing + Backoffice-Automatisierung. 20+ AI-Agenten für CHF 3\'500/Monat. CRM, Support, Rechnungen und mehr.',
  openGraph: {
    title: 'Effizienz — Werkpilot',
    description: 'Marketing + Backoffice. Komplett automatisiert. Ab CHF 3\'500/Monat.',
    images: ['/og-image.png'],
  },
};

const agents = [
  {
    category: 'Marketing (aus "Kunden gewinnen")',
    items: [
      'Google Ads Manager',
      'Lead Generator',
      'Content Creator',
      'SEO Specialist',
      'Email Marketer',
      'Social Media Manager',
      'Conversion Optimizer',
      'Landing Page Builder',
    ],
  },
  {
    category: 'Backoffice & Automatisierung',
    items: [
      'Customer Support Agent — Beantwortet Kundenanfragen 24/7',
      'Document Manager — Verwaltet und archiviert alle Dokumente',
      'Invoice Automation — Erstellt und versendet Rechnungen automatisch',
      'Payment Tracker — Überwacht Zahlungseingänge und Mahnwesen',
      'Contract Manager — Verwaltet Verträge und Fristen',
      'Team Coordinator — Koordiniert interne Aufgaben und Deadlines',
      'Meeting Scheduler — Plant und organisiert Termine',
      'Data Analyst — Analysiert Geschäftsdaten und erstellt Insights',
    ],
  },
  {
    category: 'Erweiterte Features',
    items: [
      'CRM Advanced — Komplettes Kundenmanagement mit Automationen',
      'Advanced Analytics — Detaillierte Geschäftsanalysen und Forecasts',
      'Multi-Channel Support — Email, Chat, Telefon-Integration',
      'Workflow Automation — Individuelle Prozess-Automatisierungen',
    ],
  },
];

const results = [
  {
    metric: '8-12h',
    label: 'Zeit gespart pro Woche',
  },
  {
    metric: '-70%',
    label: 'Administrative Kosten',
  },
  {
    metric: '99.9%',
    label: 'Uptime Garantie',
  },
];

const testimonials = [
  {
    quote: 'Seit wir Werkpilot nutzen, läuft unser gesamtes Backoffice automatisch. Rechnungen, Mahnwesen, Support — alles ohne dass ich mich darum kümmern muss. Das ist wie ein komplettes Team für einen Bruchteil der Kosten.',
    author: 'Geschäftsführer',
    company: 'Schreinerei, Luzern',
  },
  {
    quote: 'Als wachsendes Unternehmen brauchten wir eine Lösung, die skaliert. Werkpilot gibt uns die Struktur eines grossen Unternehmens, ohne die hohen Personalkosten. Absolute Empfehlung!',
    author: 'Inhaberin',
    company: 'Marketingagentur, Basel',
  },
];

const comparisonFeatures = [
  { name: 'Alle Marketing-Features', basic: false, effizienz: true },
  { name: 'Customer Support 24/7', basic: false, effizienz: true },
  { name: 'Automatische Rechnungen', basic: false, effizienz: true },
  { name: 'Dokumentenmanagement', basic: false, effizienz: true },
  { name: 'Advanced CRM', basic: false, effizienz: true },
  { name: 'Team Koordination', basic: false, effizienz: true },
  { name: 'Business Analytics', basic: false, effizienz: true },
  { name: 'Workflow Automationen', basic: false, effizienz: true },
];

export default function EffizienzPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Effizienz Paket',
    description: 'Komplette Marketing- und Backoffice-Automatisierung für Schweizer KMUs',
    brand: {
      '@type': 'Organization',
      name: 'Werkpilot',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CHF',
      price: '3500',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '3500',
        priceCurrency: 'CHF',
        unitText: 'MONTH',
      },
      availability: 'https://schema.org/InStock',
      url: 'https://werkpilot.ch/dienstleistungen/effizienz',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://werkpilot.ch',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Dienstleistungen',
        item: 'https://werkpilot.ch/dienstleistungen',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Effizienz',
        item: 'https://werkpilot.ch/dienstleistungen/effizienz',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navigation />
      <main id="main-content">
        {/* Hero Section */}
        <section
          className="pt-32 pb-20"
          style={{ backgroundColor: 'var(--color-bg)' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/dienstleistungen"
                className="inline-flex items-center gap-2 text-sm mb-6 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-accent)' }}
              >
                ← Zurück zu allen Paketen
              </Link>

              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                }}
              >
                BELIEBTESTE WAHL — FÜR ETABLIERTE KMUS
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Effizienz
              </h1>

              <p
                className="text-xl mb-8"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Ihr komplettes Backoffice auf Autopilot. Marketing, Vertrieb,
                Kundenservice, Administration — alles automatisiert durch 20+
                spezialisierte AI-Agenten. Mehr Zeit für das, was wirklich zählt.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/fitness-check" className="btn btn-primary">
                  Gratis Fitness-Check starten →
                </Link>
                <Link href="/preise" className="btn btn-secondary">
                  Preise ansehen
                </Link>
              </div>

              <div className="flex items-center gap-8 flex-wrap">
                <div>
                  <div
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    CHF 3&apos;500
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    pro Monat, keine Setup-Gebühr
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
                      fill="var(--color-success)"
                    />
                  </svg>
                  <span
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Monatlich kündbar
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
                      fill="var(--color-success)"
                    />
                  </svg>
                  <span
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    99.9% Uptime garantiert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section
          className="py-20"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Der Unterschied, den Sie spüren werden
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {results.map((result, idx) => (
                  <div
                    key={idx}
                    className="card p-8 text-center"
                    style={{ backgroundColor: 'var(--color-bg)' }}
                  >
                    <div
                      className="text-5xl font-bold mb-2"
                      style={{
                        fontFamily: 'var(--font-jakarta)',
                        color: 'var(--color-success)',
                      }}
                    >
                      {result.metric}
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-3xl font-bold mb-4 text-center"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Alles inklusive
              </h2>
              <p
                className="text-lg mb-12 text-center max-w-3xl mx-auto"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Das Effizienz-Paket enthält alle Features aus &ldquo;Kunden gewinnen&rdquo; plus
                umfassende Backoffice-Automatisierung.
              </p>

              <div className="space-y-8">
                {agents.map((section, idx) => (
                  <div
                    key={idx}
                    className="card p-8"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <h3
                      className="text-xl font-bold mb-6"
                      style={{
                        fontFamily: 'var(--font-jakarta)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {section.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            <path
                              d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
                              fill="var(--color-success)"
                            />
                          </svg>
                          <span
                            className="text-sm"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section
          className="py-20"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Vergleich: Kunden gewinnen vs. Effizienz
              </h2>

              <div
                className="card overflow-hidden"
                style={{ backgroundColor: 'var(--color-bg)' }}
              >
                <div className="grid grid-cols-3 gap-4 p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <div></div>
                  <div className="text-center">
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: 'var(--font-jakarta)',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      Kunden gewinnen
                    </div>
                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      CHF 1&apos;500/Mt.
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="font-bold"
                      style={{
                        fontFamily: 'var(--font-jakarta)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      Effizienz
                    </div>
                    <div className="text-sm" style={{ color: 'var(--color-accent)' }}>
                      CHF 3&apos;500/Mt.
                    </div>
                  </div>
                </div>

                {comparisonFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-3 gap-4 p-6 border-b"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <div
                      className="text-sm"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {feature.name}
                    </div>
                    <div className="text-center">
                      {feature.basic ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                          aria-label="Inkludiert"
                        >
                          <path
                            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
                            fill="var(--color-success)"
                          />
                        </svg>
                      ) : (
                        <span style={{ color: 'var(--color-text-secondary)' }}>—</span>
                      )}
                    </div>
                    <div className="text-center">
                      {feature.effizienz && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-auto"
                          aria-label="Inkludiert"
                        >
                          <path
                            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z"
                            fill="var(--color-success)"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Perfekt für diese Situationen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="card p-8"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="text-4xl mb-4" role="img" aria-label="Wachstum">
                    📈
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Sie wachsen schnell
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Ihr Unternehmen wächst, aber Sie haben keine Zeit, ein grosses Team
                    aufzubauen. Werkpilot gibt Ihnen die Struktur, ohne die Kosten.
                  </p>
                </div>

                <div
                  className="card p-8"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="text-4xl mb-4" role="img" aria-label="Admin">
                    📋
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Admin frisst Ihre Zeit
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Sie verbringen mehr Zeit mit Rechnungen, Emails und Admin als mit
                    Ihrem Kerngeschäft. Zeit, das zu ändern.
                  </p>
                </div>

                <div
                  className="card p-8"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="text-4xl mb-4" role="img" aria-label="Team">
                    👥
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Kleine Teams, grosse Ziele
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Ihr Team ist klein, aber die Aufgaben sind viele. Werkpilot
                    multipliziert Ihre Kapazität ohne neue Mitarbeiter.
                  </p>
                </div>

                <div
                  className="card p-8"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div className="text-4xl mb-4" role="img" aria-label="Professionalität">
                    ⭐
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Sie wollen professionell wirken
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    24/7 Support, automatische Rechnungen, schnelle Antworten — wirken
                    Sie wie ein grosses Unternehmen, bleiben Sie agil wie ein Startup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="py-20"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2
                className="text-3xl font-bold mb-12 text-center"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Was unsere Kunden sagen
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="card p-8"
                    style={{ backgroundColor: 'var(--color-bg)' }}
                  >
                    <div className="mb-4">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8ZM8 14C6.9 14 6 14.9 6 16C6 17.1 6.9 18 8 18C9.1 18 10 17.1 10 16C10 14.9 9.1 14 8 14ZM24 6C22.9 6 22 6.9 22 8C22 9.1 22.9 10 24 10C25.1 10 26 9.1 26 8C26 6.9 25.1 6 24 6ZM24 14C22.9 14 22 14.9 22 16C22 17.1 22.9 18 24 18C25.1 18 26 17.1 26 16C26 14.9 25.1 14 24 14Z"
                          fill="var(--color-accent)"
                          opacity="0.2"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-base mb-6 italic"
                      style={{ color: 'var(--color-text)' }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div
                        className="font-bold"
                        style={{
                          fontFamily: 'var(--font-jakarta)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        {testimonial.author}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-4xl font-bold mb-6"
                style={{
                  fontFamily: 'var(--font-jakarta)',
                  color: 'var(--color-primary)',
                }}
              >
                Bereit für maximale Effizienz?
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Starten Sie mit unserem kostenlosen Fitness-Check und entdecken Sie,
                wie viel Zeit und Geld Sie mit Werkpilot sparen können.
              </p>
              <Link href="/fitness-check" className="btn btn-primary">
                Gratis Fitness-Check starten →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
