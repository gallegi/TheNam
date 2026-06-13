import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nam Nguyen | ML Engineer & Tech Writer',
  description: 'Personal website of Nam Nguyen, Vietnamese ML Engineer and Tech Writer. Building ML systems and writing about AI/ML.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
