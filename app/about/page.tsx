import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us - Leading AI & Technology Innovation | Loam IT Solutions',
  description: 'Learn about our mission to create intelligent, immersive, and decentralized tech solutions. Meet our team of certified AI/ML engineers and technology experts.',
};

export default function AboutPage() {
  return <AboutContent />;
}