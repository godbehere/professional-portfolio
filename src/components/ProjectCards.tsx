"use client";
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Organ-AI-zer",
        description: "AI-powered file organization tool that uses AI to categorize and sort files.",
        github: "https://github.com/godbehere/organ-ai-zer",
        demo: "https://www.npmjs.com/package/organ-ai-zer",
        tech: ["TypeScript", "Anthropic API", "OpenAi API"],
    },
    {
        title: "Photography Booking Site",
        description: "Custom-built portfolio and client booking system.",
        github: "https://github.com/godbehere/photo-portfolio",
        demo: "https://photography.lostlight.ca",
        tech: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
        title: "Professional Portfolio",
        description: "Modern, responsive portfolio site showcasing my projects and skills.",
        github: "https://github.com/godbehere/professional-portfolio",
        demo: "https://github.com/godbehere/professional-portfolio",
        tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
];

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
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
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
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {tag}
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