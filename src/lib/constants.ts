export const SITE_URL = 'https://werkpilot.ch';
export const SITE_NAME = 'Werkpilot';
export const SITE_DESCRIPTION = 'Das Betriebssystem für Schweizer KMUs';

export const CONTACT = {
  email: 'info@werkpilot.ch',
  address: {
    city: 'Zürich',
    canton: 'ZH',
    country: 'CH',
  },
} as const;

export const SOCIAL = {} as const;

export const PRICING = {
  effizienz: { price: 1500, currency: 'CHF' },
  kundenGewinnen: { price: 2000, currency: 'CHF' },
  wachstum: { price: 5000, currency: 'CHF' },
} as const;

export const METRICS = {
  specialists: 43,
  rating: 4.9,
  reviewCount: 47,
  trafficIncrease: 340,
  costSaving: 78,
} as const;

export const KANTONS = [
  'Zürich', 'Bern', 'Luzern', 'Uri', 'Schwyz', 'Obwalden', 'Nidwalden', 'Glarus',
  'Zug', 'Freiburg', 'Solothurn', 'Basel-Stadt', 'Basel-Landschaft', 'Schaffhausen',
  'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'St. Gallen', 'Graubünden',
  'Aargau', 'Thurgau', 'Tessin', 'Waadt', 'Wallis', 'Neuenburg', 'Genf', 'Jura',
] as const;

export const BRANCHEN = [
  'Treuhand / Buchhaltung',
  'Beratung / Consulting',
  'IT-Services / Software',
  'Handwerk / Bau',
  'Immobilien',
  'Gesundheit / Medizin',
  'Rechtsberatung',
  'Marketing / Kommunikation',
  'Gastronomie / Hotellerie',
  'Handel / E-Commerce',
  'Andere',
] as const;

// EmailJS Configuration
// Replace these placeholder values with your actual EmailJS credentials
// from https://dashboard.emailjs.com
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_NOTIFY = 'YOUR_NOTIFICATION_TEMPLATE_ID';
export const EMAILJS_TEMPLATE_AUTOREPLY = 'YOUR_AUTOREPLY_TEMPLATE_ID';
