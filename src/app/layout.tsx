import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, Space_Mono, Inter_Tight } from 'next/font/google'

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

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'Pioneer Your Creative — Pioneer a path AI can\'t replace.',
  description: 'An app for creative professionals navigating the AI shift. Put on headphones. Go through immersive audio sessions that change your state. Meet an AI coach that actually learns about you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${spaceMono.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
