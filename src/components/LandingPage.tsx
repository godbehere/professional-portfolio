"use client";
import { timeline } from '@/app/lib/data';
import { motion } from 'motion/react';
import { Brain, Code, Container, Layers, Microscope, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import FeaturedProjects from '@/components/FeaturedProjects';

const skills = [
  {
    icon: <Layers className="w-6 h-6 text-accent" />,
    title: 'Technical Leadership',
    description: 'Leading engineering teams, driving multi-repo feature delivery, and shipping production systems end-to-end.',
  },
  {
    icon: <Code className="w-6 h-6 text-accent" />,
    title: 'Platform & API Engineering',
    description: 'Building multi-service backends in TypeScript and Node.js — REST APIs, versioned routing, microservice integration, and MCP.',
  },
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    title: 'AI & LLM Integration',
    description: 'Designing LLM agent loops, Model Context Protocol tooling, and real-time SSE streaming interfaces powered by Anthropic Claude.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent" />,
    title: 'Auth & Security Systems',
    description: 'Zero-trust JWT architecture, Google OAuth 2.0 with PKCE, RS256 key pairs, JWKS endpoints, and scope-filtered permissions.',
  },
  {
    icon: <Container className="w-6 h-6 text-accent" />,
    title: 'DevOps & Infrastructure',
    description: 'AWS ECS Fargate deployments, Cloudflare Tunnel, Docker, and GitHub Actions CI/CD for containerized production services.',
  },
  {
    icon: <Microscope className="w-6 h-6 text-accent" />,
    title: 'Research & Development',
    description: 'Innovating through prototyping and emerging technology — from AI tooling experiments to ion physics simulations.',
  },
];

const techStack = [
  { category: 'Runtime',  items: ['TypeScript', 'Node.js', 'JavaScript', 'Python', 'Java'] },
  { category: 'Backend',  items: ['Hono', 'Express.js', 'Prisma ORM', 'REST APIs', 'OpenAPI'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Vite', 'TanStack Query', 'Tailwind CSS'] },
  { category: 'AI & LLM', items: ['Anthropic Claude', 'OpenAI API', 'Model Context Protocol', 'SSE Streaming'] },
  { category: 'Data',     items: ['PostgreSQL', 'Redis', 'StarRocks'] },
  { category: 'Auth',     items: ['Google OAuth 2.0', 'RS256 JWT', 'JWKS', 'PKCE'] },
  { category: 'Infra',    items: ['AWS ECS Fargate', 'Cloudflare Tunnel', 'Docker', 'GitHub Actions'] },
];

const timelinePreview = timeline.slice(0, 2);

export default function LandingPage() {
    return (
    <div>
      <section className="text-center px-6 mb-15">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m Grant Godbehere
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Full stack engineer specializing in AI-powered platforms and multi-service architecture — building production systems that combine TypeScript, LLM tooling, and real-time interfaces.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Currently at Over99, shipping AI-driven admin tooling and platform infrastructure for a real-time gaming platform.
        </motion.p>
        <motion.div 
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          >
          <a href="/resume.pdf" className="bg-accent dark:text-white px-5 py-2 rounded hover:bg-accent/80 transition">View Resume</a>
          <a href="https://github.com/godbehere" target="_blank" rel="noreferrer" aria-label="GitHub">
            <SiGithub className="w-6 h-6 hover:text-accent transition" />
          </a>
          <a href="https://linkedin.com/in/grant-godbehere" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <SiLinkedin className="w-6 h-6 hover:text-accent transition" />
          </a>
        </motion.div>
      </section>

      {/* Focus Area Cards */}
      <section className="px-6 max-w-5xl mx-auto mb-15">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-center">
            Core Focus Areas
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-muted/10 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-accent-pop">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 max-w-5xl mx-auto mb-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Tech I Work With
        </motion.h2>
        <div className="space-y-3">
          {techStack.map((row, idx) => (
            <motion.div
              key={row.category}
              className="flex flex-wrap items-start gap-x-3 gap-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-muted uppercase tracking-wider w-20 shrink-0 pt-1">{row.category}</span>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-muted/10 border border-muted/20 text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Resume Snapshot */}
      <section className="px-6 max-w-4xl mx-auto mb-15">
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
          >
          <h2 
            className="text-2xl font-semibold">
              Career Snapshot
          </h2>
          <Link href="/resume" className="text-accent hover:underline">View Full Timeline →</Link>
        </motion.div>
        <ul className="space-y-6">
          {timelinePreview.map((entry, idx) => (
            <motion.li
              key={idx}
              className="border-l-4 border-accent-pop pl-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg">{entry.title}</h3>
              <time className="block text-sm text-muted">{entry.date}</time>
              <p className="text-sm text-muted mt-1">{entry.description}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <motion.section
        className="text-center px-6 mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4}}
        viewport={{ once: true }}
        >
        <h2 className="text-2xl font-semibold mb-4">Let’s build something together</h2>
        <p className="text-muted mb-6">I’m always happy to connect with fellow engineers and builders.</p>
        <a href="mailto:godbehere@gmail.com" className="bg-accent text-white px-5 py-3 rounded hover:bg-accent/80 transition">
          Contact Me
        </a>
      </motion.section>
      </div>
    );
}