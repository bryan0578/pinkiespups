import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pinkies Puppies',
    description: 'Discover your perfect furry companion at our premier dog adoption hub. Unleash joy and loyalty with your new best friend! 🐾 #FurryFriendship',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}