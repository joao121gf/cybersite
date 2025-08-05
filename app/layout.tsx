import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cybersite.com.br"),
  title: {
    default: "Cybersite - Criação de Sites Profissionais | A partir de R$40/mês",
    template: "%s | Cybersite - Criação de Sites Profissionais",
  },
  description:
    "🏆 Cybersite é líder em criação de sites profissionais no Brasil. ✅ Sites responsivos ✅ SEO otimizado ✅ Performance máxima ✅ Suporte 24/7. Planos a partir de R$40/mês. Transforme seu negócio online!",
  keywords: [
    "Cybersite",
    "criação de sites",
    "desenvolvimento web",
    "sites profissionais",
    "sites responsivos",
    "webdesign",
    "SEO",
    "marketing digital",
    "e-commerce",
    "loja virtual",
    "sites baratos",
    "programação web",
    "agência digital",
    "landing page",
    "otimização de sites",
  ],
  authors: [{ name: "Cybersite", url: "https://cybersite.com.br" }],
  creator: "Cybersite",
  publisher: "Cybersite",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  colorScheme: "dark light",
  category: "Web Development",
  classification: "Business",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cybersite.com.br",
    siteName: "Cybersite",
    title: "Cybersite - Criação de Sites Profissionais | Líder no Brasil",
    description:
      "Líder em criação de sites profissionais no Brasil. Sites responsivos, otimizados para SEO e com máxima performance. Planos a partir de R$40/mês.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersite - Criação de Sites Profissionais",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cybersite",
    creator: "@cybersite",
    title: "Cybersite - Criação de Sites Profissionais",
    description:
      "Líder em criação de sites profissionais no Brasil. Sites a partir de R$40/mês com máxima performance.",
    images: {
      url: "/twitter-image.jpg",
      alt: "Cybersite - Criação de Sites Profissionais",
    },
  },
  alternates: {
    canonical: "https://cybersite.com.br",
    languages: {
      "pt-BR": "https://cybersite.com.br",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
  other: {
    "google-site-verification": "google-verification-code",
    "msvalidate.01": "bing-verification-code",
    "yandex-verification": "yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* DNS Prefetch and Preconnect */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/logo1.ico" sizes="any" />
        <link rel="icon" href="/logo1.ico" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme and Browser Config */}
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#1e40af" />

        {/* Performance Hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://cybersite.com.br/#organization",
              name: "Cybersite",
              url: "https://cybersite.com.br",
              logo: {
                "@type": "ImageObject",
                url: "https://cybersite.com.br/logo.png",
                width: 512,
                height: 512,
              },
              image: "https://cybersite.com.br/logo.png",
              description:
                "Líder em criação de sites profissionais no Brasil. Desenvolvemos sites responsivos, otimizados para SEO e com máxima performance.",
              foundingDate: "2020",
              founders: [
                {
                  "@type": "Person",
                  name: "Cybersite Team",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "SP",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+55-11-99999-9999",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: ["Portuguese"],
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "08:00",
                    closes: "18:00",
                  },
                },
              ],
              sameAs: [
                "https://www.facebook.com/cybersite",
                "https://www.instagram.com/cybersite",
                "https://www.linkedin.com/company/cybersite",
                "https://twitter.com/cybersite",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Criação de Sites",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Criação de Sites Profissionais",
                      description: "Desenvolvimento de sites responsivos e otimizados para SEO",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://cybersite.com.br/#website",
              url: "https://cybersite.com.br",
              name: "Cybersite - Criação de Sites Profissionais",
              description: "Líder em criação de sites profissionais no Brasil",
              publisher: {
                "@id": "https://cybersite.com.br/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://cybersite.com.br/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
              inLanguage: "pt-BR",
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://cybersite.com.br/#service",
              name: "Criação de Sites Profissionais",
              description:
                "Desenvolvimento de sites responsivos, otimizados para SEO e com alta performance para empresas de todos os portes",
              provider: {
                "@id": "https://cybersite.com.br/#organization",
              },
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Planos de Criação de Sites",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Plano Essencial",
                    description: "Site profissional de até 5 páginas",
                    price: "40",
                    priceCurrency: "BRL",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "40",
                      priceCurrency: "BRL",
                      billingIncrement: "P1M",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Plano Profissional",
                    description: "Site personalizado de até 10 páginas",
                    price: "80",
                    priceCurrency: "BRL",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "80",
                      priceCurrency: "BRL",
                      billingIncrement: "P1M",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Plano Premium",
                    description: "Site completo com e-commerce",
                    price: "150",
                    priceCurrency: "BRL",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "150",
                      priceCurrency: "BRL",
                      billingIncrement: "P1M",
                    },
                  },
                ],
              },
              serviceType: "Web Development",
              category: "Technology",
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://cybersite.com.br",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
