import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"


const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SmartTech Academy - Professional Tech Skills Training",
  description:
    "Learn Frontend, Backend, Fullstack Development & UI/UX Design with job-ready training, mentorship, and career support.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased bg-black text-white min-h-screen">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
