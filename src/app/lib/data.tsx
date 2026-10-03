import { BrainCircuit, Briefcase, GraduationCap } from "lucide-react";
import { HiCommandLine } from "react-icons/hi2";
import { RiAnthropicFill, RiFirebaseFill } from "react-icons/ri";
import { SiAxios, SiDocker, SiNextdotjs, SiNodedotjs, SiNumpy, SiOpenai, SiPostgresql, SiPython, SiReact, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SlGraph } from "react-icons/sl";

export const timeline = [
  {
    title: 'Full Stack Software Engineer @ Over99',
    date: 'December 2025 - Present',
    description: 'Building multi-service platforms and AI-powered tooling for a real-time gaming platform.',
    icon: <Briefcase className="w-5 h-5 text-accent" />,
    details: [
      'Designed and shipped a new admin platform from scratch across four simultaneous production service launches: Google Workspace SSO auth API (RS256 JWT, PKCE, atomic refresh token rotation), a Model Context Protocol server with 30+ data tools and scope-filtered tool registration, an LLM orchestration backend (Anthropic Claude, SSE streaming), and a React SPA with an AI-powered chat interface — deployed to AWS ECS Fargate via Cloudflare Tunnel with zero public internet exposure.',
      'Designed an AI-powered natural language query system: integrated Anthropic Claude with a custom MCP server; implemented auto-pagination, cross-turn context chaining, and ID hallucination prevention via system prompt hardening. Grew the toolset from 19 to 30+ tools covering casino, sportsbook, NGR, player cohorts, and wager reports.',
      'Built a full Account Manager workspace spanning four services: player management with bulk data batching (replacing N+1 fan-out), notes and reminders, churn and potential scoring, activity heatmaps, transaction drilldowns, and platform-wide audit logging.',
      'Implemented zero-trust JWT permission architecture with DB-driven scopes (service:permission:resource format), JWKS-based downstream validation, scope-filtered MCP tool registration, and a Permissions UI backed by a scope_registry table.',
      'Delivered the Wager Bonus product end-to-end across five repositories: DB schema, claim logic with grace period handling, admin controls, and a user-facing VIP center with countdown timers.',
      'Designed and implemented the User Status Match service — period-based VIP status tracking migrated across all services with transactional safety; added an Intercom integration endpoint for external VIP status triggers.',
      'Rebuilt the admin panel with versioned API architecture (v2/v3), migrated user statistics to an external microservice, and delivered game statistics analytics with date filtering, CSV exports, and per-user drill-down views.',
      'Led mobile-first consumer app navigation redesign through 14+ iterative releases; delivered the Nations/World Cup promotional feature across multiple services.',
    ]
  },
  {
    title: 'Lead Developer @ TD Bank',
    date: 'April 2022 - November 2025',
    description: 'Leading API development and contributing to scalable banking solutions.',
    icon: <Briefcase className="w-5 h-5 text-accent" />,
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
    icon: <Briefcase className="w-5 h-5 text-accent" />,
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
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Junior Designer @ Intex Tooling Technologies',
    date: 'April 2015 - May 2016',
    description: 'Injection mold tooling design.',
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
  {
    title: 'Mechanical Engineering Technology Diploma',
    date: 'September 2012 - June 2015',
    description: 'Durham College',
    icon: <GraduationCap className="w-5 h-5 text-accent" />,
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
    icon: <Briefcase className="w-5 h-5 text-accent" />,
  },
];

export const projects = [
    {
        title: "Over99 Admin Platform",
        description: "New admin platform built from scratch across four production services: Google SSO auth, MCP tooling server with 30+ data tools, LLM orchestration backend with SSE streaming, and a React SPA with an AI-powered chat interface. Deployed on AWS ECS Fargate via Cloudflare Tunnel.",
        tech: [
          { icon: SiTypescript, label: "TypeScript" },
          { icon: SiNodedotjs, label: "Node.js" },
          { icon: SiReact, label: "React" },
          { icon: RiAnthropicFill, label: "Anthropic" },
          { icon: SiPostgresql, label: "PostgreSQL" },
          { icon: SiRedis, label: "Redis" },
        ],
    },
    {
        title: "RAG Project",
        description: "A Retrieval-Augmented Generation (RAG) backend for document ingestion, semantic search, and LLM-powered question answering.",
        github: "https://github.com/godbehere/rag-project",
        demo: "https://hub.docker.com/r/godbehere/rag-server",
        // tech: ["TypeScript", "OpenAi API", "Natural Language Processing", "Docker"],
        tech: [
          {
            icon: SiTypescript,
            label: "TypeScript"
          },
          {
            icon: SiOpenai,
            label: "OpenAI API"
          },
          {
            icon: BrainCircuit,
            label: "NLP"
          },
          {
            icon: SiDocker,
            label: "Docker"
          }
        ],
    },
    {
        title: "RAGGED CLI",
        description: "A CLI Application for interacting with RAG Project. Allows users to populate vector store, and perform queries.",
        github: "https://github.com/godbehere/ragged-cli",
        demo: "https://www.npmjs.com/package/ragged-cli",
        // tech: ["TypeScript", "Commander", "Axios", "Node.js"],
        tech: [
          {
            icon: SiTypescript,
            label: "TypeScript"
          },
          {
            icon: HiCommandLine,
            label: "Commander"
          },
          {
            icon: SiAxios,
            label: "Axios"
          },
          {
            icon: SiNodedotjs,
            label: "Node.js"
          }
        ],
    },
    {
        title: "Organ-AI-zer",
        description: "AI-powered file organization tool that uses AI to categorize and sort files.",
        github: "https://github.com/godbehere/organ-ai-zer",
        demo: "https://www.npmjs.com/package/organ-ai-zer",
        // tech: ["TypeScript", "Anthropic API", "OpenAi API"],
        tech: [
          {
            icon: SiTypescript,
            label: "TypeScript"
          },
          {
            icon: RiAnthropicFill,
            label: "Anthropic API"
          },
          {
            icon: SiOpenai,
            label: "OpenAI API"
          }
        ],
    },
    {
        title: "Photography Booking Site",
        description: "Custom-built portfolio and client booking system.",
        github: "https://github.com/godbehere/photo-portfolio",
        demo: "https://photography.lostlight.ca",
        // tech: ["Next.js", "Tailwind CSS", "Firebase"],
        tech: [
          {
            icon: SiReact,
            label: "React"
          },
          {
            icon: SiNextdotjs,
            label: "Next.js"
          },
          {
            icon: SiTypescript,
            label: "TypeScript"
          },
          {
            icon: SiTailwindcss,
            label: "Tailwind CSS"
          },
          {
            icon: RiFirebaseFill,
            label: "Firebase"
          }
        ],
    },
    {
        title: "Ion Motion Simulation",
        description: "This project provides Python functions for calculating and simulating ion motion in a linear ion trap.",
        github: "https://github.com/godbehere/ion_motion",
        demo: "https://github.com/godbehere/ion_motion/blob/master/Ion%20Motion.ipynb",
        // tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        tech: [
          {
            icon: SiPython,
            label: "Python"
          },
        {
            icon: SiNumpy,
            label: "NumPy"
          },
          {
            icon: SlGraph,
            label: "Matplotlib"
          },
        ],
    },
    {
        title: "Professional Portfolio",
        description: "Modern, responsive portfolio site showcasing my projects and skills.",
        github: "https://github.com/godbehere/professional-portfolio",
        demo: "https://portfolio.godbehere.org",
        // tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        tech: [
          {
            icon: SiReact,
            label: "React"
          },
        {
            icon: SiNextdotjs,
            label: "Next.js"
          },
          {
            icon: SiNodedotjs,
            label: "Node.js"
          },
          {
            icon: SiTailwindcss,
            label: "Tailwind CSS"
          },
          {
            icon: SiTypescript,
            label: "TypeScript"
          }
        ],
    },
];