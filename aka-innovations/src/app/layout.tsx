import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aka-innovations.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "AKA Innovations | Digital Engineering & Product Solutions",
    template: "%s | AKA Innovations",
  },
  description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering, product health assessments, and digital transformation.",
  keywords: [
    "Software Engineering",
    "Digital Transformation",
    "Product Health",
    "Web Development",
    "Tech Consulting",
    "React Development",
    "Next.js Experts",
    "Cloud Solutions",
    "System Architecture",
    "AI Solutions",
    "Artificial Intelligence"
  ],
  authors: [{ name: "AKA Innovations" }],
  creator: "AKA Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aka-innovations.com",
    siteName: "AKA Innovations",
    title: "AKA Innovations | Digital Engineering & Product Solutions",
    description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering and product health assessments.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AKA Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKA Innovations | Digital Engineering & Product Solutions",
    description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering and product health assessments.",
    // images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "AKA Innovations",
        "url": "https://aka-innovations.com",
        "logo": "https://aka-innovations.com/logo.svg",
        "sameAs": [
          "https://www.linkedin.com/company/aka-innovations"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hr@akainnovations.com",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "name": "AKA Innovations",
        "url": "https://aka-innovations.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://aka-innovations.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
