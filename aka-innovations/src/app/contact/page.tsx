import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | AKA Innovations",
  description: "Get in touch with AKA Innovations for your software engineering and product health needs. We are ready to build something intelligent with you.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact AKA Innovations",
    "description": "Contact page for AKA Innovations, offering digital engineering and product solutions.",
    "url": "https://aka-innovations.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "AKA Innovations",
      "email": "hr@akainnovations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "08 Triveni Tower 3rd Floor, Central Avenue, GandhiPutla, Itwari",
        "addressLocality": "Nagpur",
        "postalCode": "440002",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
