import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

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
    generator: 'v0.dev'
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
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8592906361390983"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
