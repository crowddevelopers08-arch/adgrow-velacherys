import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Adgro Skin Velachery ",
  description:
    "Expert Hair Treatments in Velachery",
  generator: 'Nextjs15',
  icons: {
    icon: [
      {
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "any",
      },
      {
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "https://ik.imagekit.io/7yen5ugz0/public/iconed.webp",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className={`${outfit.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QP0P36FHP8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QP0P36FHP8');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}