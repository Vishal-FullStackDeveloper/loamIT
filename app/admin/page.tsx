import { Metadata } from 'next';
import AdminLogin from './components/AdminLogin';

export const metadata: Metadata = {
  title: 'Admin Login - Loam IT Solutions',
  description: 'Admin panel login for managing website content',
};

export default function AdminPage() {
  return <AdminLogin />;
}