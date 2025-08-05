"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';


const timeline = [
  {
    title: 'Lead Developer @ TD Bank',
    date: 'April 2022 - Present',
    description: 'Leading API development and contributing to scalable banking solutions.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
    details: [
      'Lead cross-functional teams in gathering and defining API requirements, ensuring seamless collaboration and optimal integration between frontend and backend systems while mentoring team members on best practices.',
      'Oversee the design, development, and maintenance of robust and scalable NodeJS and Java APIs, guiding the team in applying secure coding principles to deliver high-quality solutions.',
      'Direct the updating and maintenance of OpenAPI 3 specifications, supporting team members in accurately documenting Java API endpoints, data models, request/response formats, and authentication mechanisms.',
      'Mentor engineers through comprehensive JUnit testing processes, promoting a culture of quality and reliability across unit, integration, and functional tests for Java APIs.',
      'Introduced our team to Docker for development environment consistency, and coaching the team in effective containerization strategies to enhance productivity throughout the development lifecycle.',
      'Coordinate the implementation of GitHub Actions pipelines, empowering team members to orchestrate efficient software deployments and maintain a continuous integration and delivery pipeline for Java APIs.',
      'Provide leadership in troubleshooting and resolving API-related issues, fostering a collaborative approach to identifying root causes and implementing effective, team-driven solutions.'
    ]
  },
  {
    title: 'Breadboard Build Lead – Mechanical Technologist @ Sciex',
    date: 'January 2018 - December 2021',
    description: 'Led a multidisciplinary team in the development of complex scientific instruments.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
    details: [
      'Led a multidisciplinary team as Breadboard Build Lead, coordinating efforts to develop the Instrument Logbook & Configuration Application. This initiative not only resulted in significant time savings and minimized configuration errors but also fostered a collaborative environment that encouraged team members to share insights and best practices.',
      'Oversaw and mentored team members in troubleshooting complex mechanical and electrical issues, facilitating knowledge transfer and ensuring effective problem-solving across the group.',
      'Directed the development and implementation of visual management tools and processes for instrument build phases, guiding the team through each stage and cultivating a culture of continuous improvement.',
      'Supervised R&D activities, including data collection for patent applications, the development of an ion motion simulator (Python), and hardware modifications. Supported professional growth among team members by assigning roles aligned with their strengths and encouraging innovation throughout the project lifecycle.'
    ]
  },
  {
    title: 'Application Designer @ StackTeck Systems Ltd.',
    date: 'September 2016 - January 2018',
    description: 'Developed plastic parts for injection molding machines.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    title: 'Junior Designer @ Intex Tooling Technologies',
    date: 'April 2015 - May 2016',
    description: 'Injection mold tooling design.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    title: 'Mechanical Engineering Technology Diploma',
    date: 'September 2012 - June 2015',
    description: 'Durham College',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    details: [
      'Ontario Power Generation Scholarship for highest GPA - 2013',
      'Ontario Power Generation Scholarship for highest GPA - 2014',
      '4.85/5.00 GPA',
    ]
  },
  {
    title: 'Opto-Mechanical Assembly Technician @ L-3 WESCAM',
    date: 'January 2011 - August 2013',
    description: 'Injection mold tooling design.',
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
];

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
