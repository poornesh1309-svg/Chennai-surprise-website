import React, { useEffect } from 'react';
import { FAQS } from '../data';

export default function SEOHelmet() {
  useEffect(() => {
    // 1. LocalBusiness Schema (Rich Snippets for Business Info)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Chennai Surprise Planners",
      "image": "https://ais-pre-5fo244uk2yrdmirx7gp3qp-119892219702.asia-southeast1.run.app/beach.jpg",
      "@id": "https://ais-pre-5fo244uk2yrdmirx7gp3qp-119892219702.asia-southeast1.run.app",
      "url": "https://ais-pre-5fo244uk2yrdmirx7gp3qp-119892219702.asia-southeast1.run.app",
      "telephone": "+919791117291",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No: 116, Venkateshwara Colony 6th St, Sharma Nagar, Vyasarpadi",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600039",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.1186, 
        "longitude": 80.2548
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "100"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://instagram.com/chennaisurpriseplanners"
      ]
    };

    // 2. FAQPage Schema (Rich Snippets for FAQs in Search Results)
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // 3. WebSite Schema (Sitelinks Search Box)
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Chennai Surprise Planners",
      "url": "https://ais-pre-5fo244uk2yrdmirx7gp3qp-119892219702.asia-southeast1.run.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ais-pre-5fo244uk2yrdmirx7gp3qp-119892219702.asia-southeast1.run.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Helper to inject script
    const injectScript = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    };

    injectScript('schema-local-business', localBusinessSchema);
    injectScript('schema-faq', faqSchema);
    injectScript('schema-website', websiteSchema);

    // Cleanup not strictly necessary for SPA where these remain valid globally,
    // but good practice if routes change in the future.
    return () => {
      document.getElementById('schema-local-business')?.remove();
      document.getElementById('schema-faq')?.remove();
      document.getElementById('schema-website')?.remove();
    };
  }, []);

  return null; // This component does not render any visible UI
}
