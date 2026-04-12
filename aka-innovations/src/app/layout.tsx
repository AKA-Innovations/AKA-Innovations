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
  metadataBase: new URL('https://www.akainnovations.com'),
  title: {
    default: "AKA Innovations | Digital Engineering & Product Solutions",
    template: "%s | AKA Innovations",
  },
  description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering, product health assessments, and digital transformation.",
  keywords: [
    "Software Engineering Team",
    "Digital Transformation",
    "Product Health",
    "Enterprise SaaS Development",
    "Scalable System Architecture",
    "React & Next.js Development",
    "Cloud Infrastructure (AWS/Google Cloud)",
    "Secure Data Pipelines",
    "Backend Optimization",
    "Product Engineering",
    "MVP Development"
  ],
  authors: [{ name: "AKA Innovations" }],
  creator: "AKA Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.akainnovations.com",
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
  verification: {
    google: "7AVqDZIJQYuXaxH0ktbLhuscrCCuXUG4UZtbUKeUOMw",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKA Innovations | Digital Engineering & Product Solutions",
    description: "Transforming ideas into digital reality. AKA Innovations specializes in high-quality software engineering and product health assessments.",
    images: ["/og-image.jpg"],
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
        "url": "https://www.akainnovations.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.akainnovations.com/logo.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.linkedin.com/company/akainnovations.com"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hr@akainnovations.com",
          "contactType": "customer service"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "About Us",
            "url": "https://www.akainnovations.com/#team"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Services",
            "url": "https://www.akainnovations.com/services"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Solutions",
            "url": "https://www.akainnovations.com/producthealth"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Contact Us",
            "url": "https://www.akainnovations.com/contact"
          }
        ]
      },
      {
        "@type": "WebSite",
        "name": "AKA Innovations",
        "url": "https://www.akainnovations.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.akainnovations.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
