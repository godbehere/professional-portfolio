import PrintButton from '@/components/PrintButton';
import ResumeDocument from '@/components/ResumeDocument';
import ResumeTimeline from '@/components/ResumeTimeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Grant Godbehere',
  description: 'Resume and career timeline for Grant Godbehere, Full Stack Software Engineer.',
};

export default function ResumePage() {
  return (
    <>
      {/* Page title and print button — hidden when printing */}
      <div className="no-print text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-muted mb-6">Print or save as PDF using your browser&apos;s print dialog.</p>
        <PrintButton />
      </div>

      {/* Resume document — the only thing that prints */}
      <div className="px-4 pb-12">
        <ResumeDocument />
      </div>

      {/* Timeline — hidden when printing */}
      <div className="no-print">
        <div className="max-w-3xl mx-auto px-4 mb-4">
          <hr className="border-gray-200 dark:border-gray-700" />
          <h2 className="text-2xl font-semibold mt-10 mb-2">Full Career Timeline</h2>
          <p className="text-muted text-sm">The expandable timeline below includes additional detail for each role.</p>
        </div>
        <ResumeTimeline />
      </div>
    </>
  );
}
