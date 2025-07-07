import { Metadata } from 'next';
import SupportContent from './SupportContent';

export const metadata: Metadata = {
  title: 'Support Center - Get Help with Your Technology Solutions | Loam IT Solutions',
  description: 'Access our support center for technical assistance, troubleshooting guides, and client resources. Submit tickets and get expert help 24/7.',
};

export default function SupportPage() {
  return <SupportContent />;
}