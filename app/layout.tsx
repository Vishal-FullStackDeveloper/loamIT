import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Future-Ready AI & Software Solutions | Loam IT Solutions',
  description: 'We deliver cutting-edge AI solutions, web and mobile apps, AR/VR experiences, and blockchain systems. Book a call today to transform your digital journey.',
  keywords: 'AI development company, custom software solutions, blockchain development, AR VR developers, mobile app agency, GPT agent builders, AI consulting, metaverse software',
  openGraph: {
    title: 'AI-Driven Custom Software Solutions',
    description: 'Building immersive, intelligent systems for the future',
    url: 'https://loamitsolutions.com',
    siteName: 'Loam IT Solutions',
    images: [
      {
        url: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'AI-Driven Custom Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Driven Custom Software Solutions',
    description: 'Building immersive, intelligent systems for the future',
    images: ['https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}