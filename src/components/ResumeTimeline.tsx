"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { timeline } from '@/app/lib/data';
// import { Briefcase, GraduationCap } from 'lucide-react';

export default function ResumePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16">

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Professional Timeline</h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-700">
          {timeline.map((item, index) => (
            <motion.li
              key={index}
              className="mb-10 ml-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-8.5 mt-1.5 flex items-center justify-center w-6 h-6 bg-accent rounded-full">
                {item.icon}
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-base font-normal text-gray-700 dark:text-gray-300">{item.description}</p>
              {item.details ? 
              <button
                className="mt-2 text-sm text-accent hover:underline"
                onClick={() => toggleDetails(index)}
              >
                {expandedIndex === index ? 'Hide Details' : 'Show More'}
              </button>
              : null}
              {expandedIndex === index && (
                <motion.div
                  className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.details ? <ul className="list-disc list-inside">
                    {item.details.map((detail, index) => (
                      <li className="mb-2" key={index}>{detail}</li>
                    ))}
                  </ul> : null}
                </motion.div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
