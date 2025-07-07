import { Metadata } from 'next';
import ProjectsManagement from './ProjectsManagement';

export const metadata: Metadata = {
  title: 'Projects Management - Admin Panel',
  description: 'Manage projects and case studies',
};

export default function ProjectsPage() {
  return <ProjectsManagement />;
}