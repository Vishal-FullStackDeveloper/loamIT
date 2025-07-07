import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us - Schedule Your Technology Consultation | Loam IT Solutions',
  description: 'Get in touch with our expert team. Schedule a consultation, request a quote, or start your AI, blockchain, or AR/VR project today.',
};

export default function ContactPage() {
  return <ContactContent />;
}