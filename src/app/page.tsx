// app/page.tsx
// import Link from 'next/link';
import { Metadata } from 'next';
// import { SiGithub, SiLinkedin } from 'react-icons/si';
// import { motion } from 'framer-motion';
// import { Code, Layers, Share2 } from 'lucide-react';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Grant Godbehere | Full Stack Engineer',
  description: 'Portfolio of Grant Godbehere — Full Stack Software Engineer specializing in AI-powered platforms, multi-service architecture, and LLM tooling.',
};

export default function HomePage() {
  return (
    <main className="py-20 space-y-24">
      <LandingPage />
    </main>
  );
}
