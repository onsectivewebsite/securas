import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Security Services in Brampton, ON`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "security company Brampton",
    "CCTV monitoring Brampton",
    "security alarm systems",
    "security guard services GTA",
    "fire monitoring company",
    "mobile patrol security",
    "access control systems",
    "Securas Security Group",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Security Services in Brampton, ON`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Security Services in Brampton, ON`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-mist-50">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SecurityService",
            name: siteConfig.legalName,
            image: `${siteConfig.url}/og-image.jpg`,
            url: siteConfig.url,
            telephone: siteConfig.phoneHref,
            email: siteConfig.email,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: siteConfig.address.street,
              addressLocality: siteConfig.address.city,
              addressRegion: siteConfig.address.region,
              postalCode: siteConfig.address.postalCode,
              addressCountry: siteConfig.address.country,
            },
            areaServed: siteConfig.serviceArea,
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.instagram,
              siteConfig.social.linkedin,
            ],
            description: siteConfig.description,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-navy-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
