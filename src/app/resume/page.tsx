import ResumeTimeline from '@/components/ResumeTimeline';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Resume | Grant Godbehere',
  description: 'Download and view Grant Godbehere’s resume.',
};

export default function ResumePage() {
  return (
    <section className="py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Resume</h1>
        <p className="mb-8 text-lg">You can view or download my resume below:</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-accent dark:text-white font-semibold rounded-lg hover:bg-accent/80 transition"
        >
          Download PDF
        </a>
      </div>

      <ResumeTimeline />
    </section>
  );
}
