"use client";
import { projects, timeline } from '@/app/lib/data';
import { motion } from 'framer-motion';
import { Brain, CircuitBoard, Code, Container, Layers, Microscope } from 'lucide-react';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const skills = [
  {
    icon: <Layers className="w-6 h-6 text-accent" />,
    title: 'Technical Leadership',
    description: 'Leading engineering teams, driving project delivery, and fostering collaboration.',
  },
  {
    icon: <Code className="w-6 h-6 text-accent" />,
    title: 'Web & Full-Stack Engineering',
    description: 'Building modern applications using TypeScript, Java, and Node. Hosting on-prem and cloud platforms.',
  },
  {
    icon: <CircuitBoard className="w-6 h-6 text-accent" />,
    title: 'Mechanical Build & Integration',
    description: 'Hands-on experience as a mechanical technologist build lead, coordinating and executing complex builds.',
  },
  {
    icon: <Container className="w-6 h-6 text-accent" />,
    title: 'DevOps & Docker',
    description: 'Implementing CI/CD pipelines, containerization, and cloud deployments for scalable, reliable systems.',
  },
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    title: 'Process Improvement & AI',
    description: 'Driving efficiency through smart tooling, creative solutions, and leveraging modern frameworks and AI to push projects and teams forward.',
  },
  {
    icon: <Microscope className="w-6 h-6 text-accent" />,
    title: 'Research & Development',
    description: 'Innovating through R&D, prototyping new solutions, and exploring emerging technologies to solve complex problems.',
  },
];

const featuredProjects = projects.slice(0, 3);

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
          Engineering leader & full-stack problem solver — crafting scalable software with a focus on developer experience and product impact.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Currently looking for opportunities to lead impactful projects and mentor teams in building innovative solutions.
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

      {/* Featured Projects */}
      <section className="px-6 max-w-5xl mx-auto mb-15">
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
          >
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-accent hover:underline">View All →</Link>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="border border-muted p-4 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-muted mb-2">{project.description}</p>
              <div className="flex gap-3 text-sm">
                {project.github && <a href={project.github} target="_blank" className="text-accent hover:underline">GitHub</a>}
                {project.demo && <a href={project.demo} target="_blank" className="text-accent hover:underline">Demo</a>}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
        <p className="text-muted mb-6">I’m open to leadership opportunities and impactful collaborations.</p>
        <a href="mailto:godbehere@gmail.com" className="bg-accent text-white px-5 py-3 rounded hover:bg-accent/80 transition">
          Contact Me
        </a>
      </motion.section>
      </div>
    );
}