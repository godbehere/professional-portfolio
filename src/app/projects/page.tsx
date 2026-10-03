import { Metadata } from 'next';
import ProjectCards from '@/components/ProjectCards';

export const metadata: Metadata = {
  title: 'Projects | Grant Godbehere',
  description: 'Personal and professional projects by Grant Godbehere — including AI/LLM tooling, RAG systems, and full-stack web applications.',
};

export default function ProjectsPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
        <ProjectCards />
    </section>
  );
}