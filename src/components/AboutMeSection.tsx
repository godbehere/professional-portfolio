"use client"
import { motion } from 'framer-motion';

export default function AboutMeSection() {
    return (
        <section className="py-16">
            <div className="text-justify flex flex-col items-center max-w-3xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-6"
                    >
                        About Me
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    I’m a software engineer with a strong foundation in backend 
                    development and systems design, currently leading the development
                    of critical APIs at TD Bank. My day-to-day includes implementing
                    robust solutions in Java and JavaScript, orchestrating deployments
                    using Docker, and coordinating closely with QE teams and stakeholders
                    to ensure delivery of high-quality, scalable software.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    Beyond code, I take on a variety of cross-functional
                    responsibilities—from planning release cycles and
                    training peers in containerization best practices,
                    to organizing team-building and innovation events that foster creativity
                    and collaboration. I genuinely enjoy mentoring others and creating space
                    for new ideas to thrive. These experiences have helped me grow into
                    someone who leads not only through technical know-how, but also by
                    building trust, encouraging initiative, and cultivating strong team
                    dynamics.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    I’m especially passionate about modern frameworks and the
                    evolving role of AI in the development lifecycle. Whether it’s finding
                    creative technical solutions or driving efficiency through smart
                    tooling, I’m always looking for ways to push projects and teams
                    forward.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    As a developer, I’m known for being highly collaborative,
                    solutions-oriented, and quick to pick up new technologies. I take
                    accountability seriously and value transparency in both code and
                    communication.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    Outside of work, I recharge through photography,
                    rock climbing, travel, and a good strategy game—whether on a board
                    or behind a screen. These hobbies keep me curious, adaptable, and
                    open to new perspectives—traits I bring into my professional life
                    as well.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    I’m always excited to connect with others who share a passion
                    for technology, creativity, and building something meaningful—whether
                    that’s as part of a new team or through ongoing collaboration.
                </motion.p>
            </div>
        </section>
    );
}