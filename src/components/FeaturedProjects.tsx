"use client";
import { projects } from '@/app/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

const featuredProjects = projects.slice(0, 3);

export default function FeaturedProjects() {
    return (
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
    );
}