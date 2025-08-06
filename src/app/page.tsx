// app/page.tsx
// import Link from 'next/link';
import { Metadata } from 'next';
// import { SiGithub, SiLinkedin } from 'react-icons/si';
// import { motion } from 'framer-motion';
// import { Code, Layers, Share2 } from 'lucide-react';
import LandingPage from '@/components/LandingPage';

export const metadata: Metadata = {
  title: 'Grant Godbehere | Software Engineering Leader',
  description: 'Portfolio homepage for Grant Godbehere — engineering leader and software developer.',
};

export default function HomePage() {
  return (
    <main className="py-20 space-y-24">
      <LandingPage />
    </main>
  );
}
