import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Excusas Online - Generador de excusas creativas",
  description: "Generador de excusas creativas para cuando necesitas una salida rápida y divertida",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-excusas-online.png",
  },
  openGraph: {
    title: "Excusas Online",
    description: "Generador de excusas creativas para cuando necesitas una salida rápida y divertida",
    images: [
      {
        url: "/logo-excusas-online.png",
        width: 800,
        height: 800,
        alt: "Logo de Excusas Online",
      },
    ],
  },
  other: {
    "google-adsense-account": "ca-pub-8592906361390983",
  },
  generator: "Agustín Aisen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-excusas-online.png" />
        <link rel="canonical" href="https://www.excusas.online/" />
        <meta name="google-adsense-account" content="ca-pub-8592906361390983" />
      </head>
      <body>
        <Suspense fallback={null}>{children}</Suspense>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Google AdSense Script */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8592906361390983"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />

        {/* Adsterra Scripts */}
        <Script
          id="adsterra-params"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              atOptions = {
                'key' : '0d3d88a411ab4f1d8b8b6f12c21417b6',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
              };
            `,
          }}
        />

        <Script
          id="adsterra-script"
          strategy="afterInteractive"
          src="//www.highperformanceformat.com/0d3d88a411ab4f1d8b8b6f12c21417b6/invoke.js"
        />

        <Script
          src="//pl26906456.profitableratecpm.com/c71edc91f8cbb4a6b12656ad7c672953/invoke.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
      </body>
    </html>
  )
}
