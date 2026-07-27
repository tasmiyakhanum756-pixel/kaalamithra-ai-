// app/layout.tsx
import { Analytics } from '@vercel/analytics/next'
import { Poppins, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './theme.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// 1. Import your background grid and mobile navigation components
import BackgroundGrid from '@/components/backgroundGrid'
import FloatingShapes3D from '@/components/floatingShapes3d'
import BottomNav from '@/components/bottomNav'
import ChatBot from '@/components/chatBot'
import PwaInstallPrompt from '@/components/pwaInstallPrompt'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KAALAMITHRA | AI, Automation, CRM & Technology Solutions',
  description: 'Empowering businesses with cutting-edge AI, automation, CRM, and digital marketing solutions. Transform your vision into intelligent, scalable technology.',
  keywords: ['AI Solutions', 'Automation', 'CRM', 'Digital Marketing', 'Technology Consulting', 'KAALAMITHRA'],
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icon-dark-32x32.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/icon-dark-32x32.png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'KAALAMITHRA',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen relative`}>
        {/* Canvas backgrounds at z-0 */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingShapes3D />
          <BackgroundGrid />
        </div>

        {/* Actual content wrapper */}
        <div className="relative z-10">
          <Header />
          <main className="pt-[73px] container-custom">
            {children}
          </main>
          <Footer />
          <BottomNav />
          {process.env.NODE_ENV === 'production' && <Analytics />}
          <PwaInstallPrompt />
          <ChatBot />
        </div>
      </body>
    </html>
  )
}