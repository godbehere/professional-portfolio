import { Metadata } from 'next';
import ProjectCards from '@/components/ProjectCards';

export const metadata: Metadata = {
  title: 'Projects | Grant Godbehere',
  description: 'A collection of projects by Grant Godbehere.',
};

export default function ProjectsPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
        <ProjectCards />
    </section>
  );
}