import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Case Studies & Project Portfolio | Loam IT Solutions',
  description: 'Explore our successful AI, blockchain, and AR/VR projects. Real-world case studies showcasing measurable results and business transformation.',
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}