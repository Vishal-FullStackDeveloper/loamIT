import { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy - Loam IT Solutions',
  description: 'Read our privacy policy for information about how we collect, use, and protect information on this website.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
