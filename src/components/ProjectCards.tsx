"use client";
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';
import { projects } from '@/app/lib/data';

export default function ProjectCards() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A selection of projects I’ve built or contributed to recently.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-accent rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3 justify-center">
                {project.tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex flex-col items-center text-2xl px-2 py-1 text-accent-pop"
                    title={tag.label}
                    style={{ cursor: "default" }}
                  >
                    <tag.icon />
                    {/* Show label below icon on mobile, hide on desktop */}
                    <span className="block text-xs mt-1 sm:hidden">{tag.label}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <SiGithub className="w-5 h-5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}