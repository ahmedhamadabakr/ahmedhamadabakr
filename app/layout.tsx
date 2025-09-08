import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ahmed Hamada Bakr - Full Stack Developer",
  description:
    "Full Stack Developer with expertise in building dynamic web and mobile applications using React.js, Next.js, Node.js, and Flutter.",
  generator: "ahmedhamadabakr",
  keywords: ["Ahmed Hamada Bakr", "Full Stack Developer", "React.js", "Next.js", "Node.js", "Flutter"],
  authors: [{ name: "Ahmed Hamada Bakr" }],
  openGraph: {
    title: "Ahmed Hamada Bakr - Full Stack Developer",
    description:
      "Full Stack Developer with expertise in building dynamic web and mobile applications using React.js, Next.js, Node.js, and Flutter.",
    type: "website",
    locale: "en",
    siteName: "Ahmed Hamada Bakr - Full Stack Developer",
    url: "https://ahmedhamadabakr.vercel.app/",
    images: [
      {
        url: "https://ahmedhamadabakr.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Hamada Bakr - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Ahmed Hamada Bakr - Full Stack Developer",
    description:
      "Full Stack Developer with expertise in building dynamic web and mobile applications using React.js, Next.js, Node.js, and Flutter.",
    card: "summary_large_image",
    images: [
      {
        url: "https://ahmedhamadabakr.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Hamada Bakr - Full Stack Developer",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${montserrat.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
