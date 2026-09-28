'use client'
import { HatGlasses, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gray-100 dark:bg-gray-accent shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <span className="text-xl font-bold flex items-center gap-2">
                    <HatGlasses className="w-6 h-6" />
                    <span className="hidden sm:inline">
                        <Link href="/">Software Engineer - Lead Developer</Link>
                    </span>
                    <span className="sm:hidden">
                        <Link href="/">Lead Dev</Link>
                    </span>
                </span>
                {/* Desktop links */}
                <div className="space-x-4 hidden sm:flex">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/resume">Resume</Link>
                    {/* <Link href="/contact">Contact</Link> */}
                </div>
                {/* Hamburger menu button */}
                <button
                    className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <div className="sm:hidden bg-gray-100 dark:bg-gray-accent px-4 pb-4">
                    <div className="flex flex-col space-y-2">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link href="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
                        {/* <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link> */}
                    </div>
                </div>
            )}
        </nav>
    );
}