import { Metadata } from 'next';
import ContactsManagement from './ContactsManagement';

export const metadata: Metadata = {
  title: 'Contact Submissions - Admin Panel',
  description: 'Manage contact form submissions and inquiries',
};

export default function ContactsPage() {
  return <ContactsManagement />;
}