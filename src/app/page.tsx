import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Grant Godbehere | Software Engineer',
  description: 'Portfolio site of Grant Godbehere, Software Engineer.',
};

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Grant Godbehere</h1>
      <p className="text-xl md:text-2xl text-accent">Software Engineer - Lead Developer</p>
      <p className="mt-6 max-w-xl mx-auto">
        Building performant, modern web applications and thoughtful user experiences.
      </p>
    </section>
  );
}