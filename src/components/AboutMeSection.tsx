"use client"
import { motion } from 'motion/react';

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
                    I&apos;m a full stack engineer currently at Over99, where I build multi-service
                    platforms for a real-time gaming environment. Over the past year I&apos;ve
                    shipped an entirely new admin platform from scratch — four production
                    services covering authentication, AI-powered data access, LLM orchestration,
                    and a React SPA — alongside a broad range of backend, frontend, and
                    infrastructure work across the broader platform.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    A significant focus of my recent work has been AI and LLM integration. I
                    designed and built a Model Context Protocol server with 30+ data tools, an
                    LLM orchestration backend that streams Anthropic Claude responses token-by-token
                    via SSE, and a zero-trust auth system using Google OAuth 2.0, RS256 JWT, and
                    DB-driven scoped permissions. These systems work together to give admin staff
                    structured, permission-aware access to live operational data through a
                    natural language chat interface.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    I care about architecture that&apos;s designed to scale and security that&apos;s
                    built in from the start. I tend to think carefully up front, then move fast
                    iteratively. I&apos;m comfortable working across the full stack — database schema,
                    LLM agent loops, API design, React UI — and I take accountability seriously
                    in both code and communication.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    My path to software came through mechanical engineering. I spent several
                    years as a build lead and technologist — coordinating multidisciplinary teams,
                    building precision instruments, and doing R&D at the hardware level — before
                    moving into software full-time. That background shapes how I approach complex
                    systems: methodical, hands-on, and focused on what actually ships.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    Outside of work, I recharge through photography, rock climbing, travel, and
                    a good strategy game — whether on a board or behind a screen. These keep me
                    curious, adaptable, and open to new perspectives, which I try to carry into
                    my work as well.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4}}
                    viewport={{ once: true }}
                    className="mb-8 text-lg">
                    I&apos;m always happy to connect with others who share a passion for technology
                    and building things that matter.
                </motion.p>
            </div>
        </section>
    );
}
