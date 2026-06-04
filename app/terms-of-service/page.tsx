import { Metadata } from 'next';
import TermsOfServiceContent from './TermsOfServiceContent';

export const metadata: Metadata = {
  title: 'Terms & Service - Loam IT Solutions',
  description: 'Read our terms of service for the Loam IT Solutions website and demo application.',
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
