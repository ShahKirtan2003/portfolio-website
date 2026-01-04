import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kirtan Shah | SDE2 & AWS Solutions Architect",
  description:
    "AWS Certified Solutions Architect building AI-driven cloud infrastructure and high-performance distributed systems. Specialized in Kubernetes, microservices, and real-time analytics.",
  keywords: ["Software Engineer", "AWS", "Cloud Architecture", "Kubernetes", "AI", "DevOps", "Full Stack"],
  authors: [{ name: "Kirtan Shah" }],
  creator: "Kirtan Shah",
  openGraph: {
    type: "website",
    title: "Kirtan Shah | SDE2 & AWS Solutions Architect",
    description:
      "AWS Certified Solutions Architect building AI-driven cloud infrastructure and high-performance distributed systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirtan Shah | SDE2 & AWS Solutions Architect",
    description: "AWS Certified Solutions Architect building AI-driven cloud infrastructure.",
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
