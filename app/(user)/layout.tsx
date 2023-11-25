import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../globals.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <body className={`${inter.className} bg-gradient-to-r from-white to-pink-100 h-screen`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
