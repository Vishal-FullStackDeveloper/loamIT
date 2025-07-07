import { Metadata } from 'next';
import AdminDashboard from './AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Loam IT Solutions',
  description: 'Admin dashboard for managing website content',
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}