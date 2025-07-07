import { Metadata } from 'next';
import ProductsManagement from './ProductsManagement';

export const metadata: Metadata = {
  title: 'Products Management - Admin Panel',
  description: 'Manage products and categories',
};

export default function ProductsPage() {
  return <ProductsManagement />;
}