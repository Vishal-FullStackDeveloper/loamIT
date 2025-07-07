import { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers - Join Our Innovation Team | Loam IT Solutions',
  description: 'Join our team of AI, blockchain, and AR/VR experts. Explore career opportunities and help us build the future of technology.',
};

export default function CareersPage() {
  return <CareersContent />;
}