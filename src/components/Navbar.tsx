import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <span className="text-xl font-bold">Grant Godbehere</span>
            <div className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/resume">Resume</Link>
                {/* <Link href="/contact">Contact</Link> */}
            </div>
            </div>
        </nav>
    );
}