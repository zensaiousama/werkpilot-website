import Script from 'next/script';

/**
 * Google Tag Manager — www.werkpilot.ch
 * Container: GTM-MD3222GV (info@werkpilot.ch)
 *
 * GA4 wird als Tag in GTM konfiguriert:
 * - Tag-Typ: Google Analytics: GA4 Configuration
 * - Measurement ID: G-XXXXXXXXXX (aus GA4 Property)
 * - Trigger: All Pages
 * - Consent: Require "analytics_storage"
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-MD3222GV';

export function GoogleTagManagerHead() {
  return (
    <>
      {/* Google Consent Mode v2 — defaults BEFORE GTM loads */}
      <Script
        id="gtm-consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted',
              'wait_for_update': 500,
              'region': ['CH', 'AT', 'DE', 'EU']
            });
          `,
        }}
      />
      {/* GTM Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
