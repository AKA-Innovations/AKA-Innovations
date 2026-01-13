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
    "System Architecture"
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
        url: "/og-image.jpg", // We should ensure this image exists or is added later
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      </body>
    </html>
  );
}
