import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, Space_Mono } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-dm-serif',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Pioneer Your Creative — Clear the Noise. Do the Work That Matters.',
  description: 'Built for creative professionals navigating the AI shift. Structured sprints, immersive audio, and an AI coach that actually knows you. Start free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
