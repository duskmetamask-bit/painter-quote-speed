import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "QuoteSpeed — AI for Painters",
  description: "Stop losing painting jobs to silence. QuoteSpeed AI calls your prospects automatically when quotes go cold.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
