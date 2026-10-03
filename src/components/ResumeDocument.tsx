const skills = [
  { category: 'Backend',        items: 'TypeScript, Node.js, Hono, Express.js, Prisma ORM, REST APIs, OpenAPI' },
  { category: 'Frontend',       items: 'React, Next.js, Vite, TanStack Query, Tailwind CSS' },
  { category: 'AI & LLM',       items: 'Anthropic Claude, OpenAI API, Model Context Protocol (MCP), SSE Streaming' },
  { category: 'Auth & Security',items: 'Google OAuth 2.0 (PKCE), RS256 JWT, JWKS, Zero-trust scopes' },
  { category: 'Data',           items: 'PostgreSQL, Redis, StarRocks' },
  { category: 'Infrastructure', items: 'AWS ECS Fargate, Cloudflare Tunnel, Docker, GitHub Actions' },
  { category: 'Other',          items: 'Java (Spring), Python, Bash, Linux, Jira, Vitest' },
];

const experience = [
  {
    title: 'Full Stack Software Engineer',
    company: 'Over99 (formerly Winna)',
    location: 'Toronto, Ontario',
    dates: 'December 2025 – Present',
    bullets: [
      'Designed and shipped a new admin platform from scratch across four simultaneous production service launches: Google Workspace SSO auth API (RS256 JWT, PKCE, atomic refresh token rotation), a Model Context Protocol server with 30+ data tools and scope-filtered tool registration, an LLM orchestration backend (Anthropic Claude, SSE streaming, auto-pagination, cross-turn context chaining), and a React SPA with AI chat interface and permissions management.',
      'Built a full Account Manager workspace spanning four services: paginated player lists with bulk data batching, notes and reminders, churn and potential scoring, activity heatmaps, transaction drilldowns, and platform-wide audit logging.',
      'Implemented zero-trust JWT permission architecture with DB-driven scopes, JWKS-based downstream validation, and scope-filtered MCP tool registration; built Permissions UI backed by a scope_registry table.',
      'Delivered the Wager Bonus product end-to-end across five repositories: DB schema, claim logic with grace period handling, admin controls, and user-facing VIP center with countdown timers.',
      'Led mobile-first consumer app navigation redesign through 14+ iterative releases; built versioned API architecture (v2/v3), custom date range filtering, and game statistics analytics with CSV exports.',
    ],
  },
  {
    title: 'Software Engineer – Dev Lead',
    company: 'TD Bank',
    location: 'Toronto, Ontario',
    dates: 'April 2022 – November 2025',
    bullets: [
      'Led cross-functional teams in gathering and defining API requirements, ensuring seamless collaboration and optimal integration between frontend and backend systems while mentoring team members on best practices.',
      'Oversaw the design, development, and maintenance of robust and scalable Node.js and Java APIs, guiding the team in applying secure coding principles.',
      'Directed the updating and maintenance of OpenAPI 3 specifications for Java API endpoints, data models, request/response formats, and authentication mechanisms.',
      'Mentored engineers through comprehensive JUnit testing processes across unit, integration, and functional tests for Java APIs.',
      'Introduced Docker for development environment consistency and coached the team in effective containerization strategies; coordinated GitHub Actions CI/CD pipelines.',
    ],
  },
  {
    title: 'Breadboard Build Lead – Mechanical Technologist',
    company: 'Sciex',
    location: 'Vaughan, Ontario',
    dates: 'January 2018 – December 2021',
    bullets: [
      'Led a multidisciplinary team as Breadboard Build Lead, developing the Instrument Logbook & Configuration Application — resulting in significant time savings and reduced configuration errors.',
      'Mentored team members in troubleshooting complex mechanical and electrical issues, facilitating knowledge transfer across the group.',
      'Supervised R&D including data collection for patent applications, development of an ion motion simulator (Python), and hardware modifications.',
    ],
  },
  {
    title: 'Application Designer',
    company: 'StackTeck Systems Ltd.',
    location: 'Brampton, Ontario',
    dates: 'September 2016 – January 2018',
    bullets: [],
  },
  {
    title: 'Junior Designer',
    company: 'Intex Tooling Technologies',
    location: 'Aurora, Ontario',
    dates: 'April 2015 – May 2016',
    bullets: [],
  },
  {
    title: 'Opto-Mechanical Assembly Technician',
    company: 'L-3 WESCAM',
    location: 'Toronto, Ontario',
    dates: 'January 2011 – August 2013',
    bullets: [],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold tracking-widest uppercase text-accent border-b border-accent/30 pb-1 mb-3 mt-6 first:mt-0">
      {children}
    </h2>
  );
}

export default function ResumeDocument() {
  return (
    <div
      id="resume-document"
      className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-8 md:p-12 text-sm print:shadow-none print:border-none print:rounded-none print:p-0 print:max-w-none"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Grant Godbehere</h1>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-1">Full Stack Software Engineer</p>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right space-y-0.5">
          <p>Toronto, Ontario, Canada</p>
          <p>416-735-7471</p>
          <p>
            <a href="mailto:godbehere@gmail.com" className="text-accent hover:underline">
              godbehere@gmail.com
            </a>
          </p>
          <p>
            <a href="https://linkedin.com/in/grant-godbehere" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              linkedin.com/in/grant-godbehere
            </a>
          </p>
          <p>
            <a href="https://portfolio.godbehere.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              portfolio.godbehere.org
            </a>
          </p>
        </div>
      </div>

      {/* Summary */}
      <SectionHeading>Summary</SectionHeading>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Full stack engineer specializing in multi-service platform architecture and AI/LLM tooling.
        I build production systems end-to-end — from auth design and database schema through backend
        APIs and LLM agent loops to React interfaces. Currently at Over99 where I designed and
        delivered a complete replacement for the legacy admin stack: four simultaneous production
        service launches combining zero-trust authentication, Model Context Protocol tooling, and
        an LLM-powered data query interface, deployed on AWS ECS Fargate.
      </p>

      {/* Skills */}
      <SectionHeading>Skills</SectionHeading>
      <dl className="grid gap-y-1">
        {skills.map(({ category, items }) => (
          <div key={category} className="grid grid-cols-[140px_1fr] gap-x-3">
            <dt className="font-semibold text-gray-900 dark:text-white shrink-0">{category}</dt>
            <dd className="text-gray-600 dark:text-gray-400">{items}</dd>
          </div>
        ))}
      </dl>

      {/* Experience */}
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-5">
        {experience.map((job) => (
          <div key={job.company + job.dates}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
              <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <span className="text-gray-500 dark:text-gray-400 text-xs shrink-0">{job.dates}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-1.5">
              {job.company} — {job.location}
            </p>
            {job.bullets.length > 0 && (
              <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-300">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Education */}
      <SectionHeading>Education</SectionHeading>
      <div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
          <h3 className="font-semibold text-gray-900 dark:text-white">Mechanical Engineering Technology Diploma</h3>
          <span className="text-gray-500 dark:text-gray-400 text-xs shrink-0">June 2015</span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-1.5">Durham College — Oshawa, Ontario</p>
        <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700 dark:text-gray-300">
          <li>Ontario Power Generation Scholarship for highest GPA — 2013 &amp; 2014</li>
          <li>4.85 / 5.00 GPA</li>
        </ul>
      </div>
    </div>
  );
}
