import * as React from "react";
import { siteConfig } from "@/content/site-config";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.png`,
    image: `${siteConfig.siteUrl}/images/roger-venkatesh.jpg`,
    telephone: siteConfig.phone.mobile,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.suburb,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -36.9082,
      longitude: 174.6853,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    employee: [
      {
        "@type": "Person",
        name: "Roger Venkatesh",
        jobTitle: "Director and Financial Adviser",
        identifier: "FSP 539026",
      },
      {
        "@type": "Person",
        name: "Kiri Venkatesh",
        jobTitle: "Key Account Manager and Financial Adviser",
        identifier: "FSP 1007043",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
