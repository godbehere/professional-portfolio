"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-block px-6 py-3 bg-accent dark:text-white font-semibold rounded-lg hover:bg-accent/80 transition cursor-pointer"
    >
      Download / Print PDF
    </button>
  );
}
