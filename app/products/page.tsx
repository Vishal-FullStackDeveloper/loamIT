import { Metadata } from 'next';
import ProductsContent from './ProductsContent';

export const metadata: Metadata = {
  title: 'AI & Technology Products | Loam IT Solutions',
  description: 'Discover our suite of AI agents, blockchain solutions, AR/VR kits, and custom software products designed to transform your business.',
};

export default function ProductsPage() {
  return <ProductsContent />;
}