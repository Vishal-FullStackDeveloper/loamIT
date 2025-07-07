import { Metadata } from 'next';
import CareersManagement from './CareersManagement';

export const metadata: Metadata = {
  title: 'Careers Management - Admin Panel',
  description: 'Manage job openings and applications',
};

export default function CareersPage() {
  return <CareersManagement />;
}