import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import incidentConsoleWriteup from "./content/incident-console.md?raw";
import jobApplicationAssistantWriteup from "./content/job-application-assistant.md?raw";

const contact = [
  { label: "\u{1F4E7} Email", display: "Email: mobeenk89@gmail.com", href: "mailto:mobeenk89@gmail.com" },
  { label: "\u{1F512} Bunkerify", display: "Bunkerify", href: "https://www.bunkerify.com" },
  { label: "\u{1F4BB} GitHub", display: "GitHub", href: "https://github.com/mobeen786822" },
  { label: "\u{1F517} LinkedIn", display: "LinkedIn", href: "https://www.linkedin.com/in/mobeen-khan-6b3340197" },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    place: "University of Wollongong",
    dates: "Jan 2021 - May 2024",
    detail: "Major in Software Engineering and Cybersecurity",
  },
  {
    title: "Masters of Computer Science (Cybersecurity)",
    place: "University of Wollongong",
    dates: "Mar 2025 - Present",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
  },
];

const projects = [
  {
    title: "Bunkerify",
    category: "Cybersecurity Platform",
    website: "https://www.bunkerify.com",
    techStack: ["Next.js", "Supabase", "Vercel", "SendGrid", "Tailwind CSS", "Web Vulnerability Scanner"],
    points: [
      "Built and deployed Bunkerify on Vercel using Next.js, Supabase (PostgreSQL + auth), and SendGrid for transactional email delivery.",
      "Designed a custom scoring engine from scratch mapping 19 assessment questions to ACSC Essential Eight categories with weighted Maturity Level 0-3 calculations per category.",
      "Implemented automated HTML email reports triggered on assessment completion, delivering personalised risk breakdowns and CTAs.",
      "Integrated Calendly booking workflow to convert assessment completions into consultations.",
      "Deployed a live marketing funnel with a landing page and LinkedIn launch assets to drive inbound leads.",
      "Integrated a live web vulnerability scanner into the results page — triggered after the Essential Eight assessment, with findings stored in Supabase and included in the HTML email report.",
      "Implemented an email gate for new users prior to scanning, with direct scan access for returning authenticated users.",
    ],
  },
  {
    title: "Job Application Assistant",
    category: "Web App",
    repo: "https://github.com/mobeen786822/job-application-assistant",
    techStack: ["Python", "Flask", "Flask-Session", "Supabase", "Anthropic API", "OpenAI API", "GitHub Actions"],
    points: [
      "Built a web app that tailors resumes from job descriptions and exports PDF/HTML.",
      "Implemented OpenAI-powered content tailoring with strict no-fabrication rules.",
      "Added private access via VPN-only deployment (Tailscale) on a cloud VM.",
      "Added UI preview, download actions, and loading feedback.",
      "Built a GitHub Actions CI/CD security pipeline using Bandit, Semgrep, Gitleaks, and pip-audit.",
      "Identified and resolved a medium-severity Bandit finding related to an interface binding vulnerability.",
      "Extended into a multi-user SaaS with Supabase Auth, server-side sessions, and a per-user dashboard tracking generation history",
      "Implemented server-side monthly usage limits (10/month per user) with Supabase RLS-enforced data isolation.",
    ],
  },
  {
    title: "Local LLM Benchmark — Ollama",
    category: "AI Engineering",
    repo: "https://github.com/mobeen786822/local-llm-benchmark",
    techStack: ["Python", "Ollama", "Llama 3.2", "Phi-3 Mini", "Gemma 2", "Ubuntu"],
    points: [
      "Benchmarked Llama 3.2, Phi-3 Mini, and Gemma 2 running entirely offline via Ollama on a CPU-only Ubuntu VM across 4 task types — documenting speed, reliability, and quality tradeoffs for local inference.",
      "Identified task-specific failure modes including timeouts that would not surface in quality-only evaluations.",
      "Designed a Python benchmarking script evaluating all 3 models across 4 task types (summarisation, JSON extraction, code generation, and multi-step reasoning) — 12 data points total.",
      "Documented speed vs quality tradeoffs: Gemma 2 fastest at 4.8 tok/s, Llama 3.2 most reliable (4/4 tasks), Phi-3 Mini best code quality but unreliable on structured output.",
    ],
  },
  {
    title: "Cyber Content Bot",
    category: "AI Engineering",
    repo: "https://github.com/mobeen786822/cyber-content-bot",
    website: "https://cyber-content-bot-ui.onrender.com",
    techStack: ["Python", "Flask", "React", "TypeScript", "Vite", "Tailwind CSS", "Anthropic Claude API"],
    points: [
      "An automated cybersecurity content pipeline that aggregates HIGH/CRITICAL CVEs from NVD, actively exploited vulnerabilities from CISA KEV, and AI security research from arXiv - then uses Claude Haiku to draft LinkedIn posts for weekly review. Features tone control, on-demand triggering, and a React/TypeScript dashboard.",
      "Aggregates data from three sources concurrently — NVD API (CVSS ≥ 7.0), CISA Known Exploited Vulnerabilities feed, and arXiv AI security papers — filtered to the past 7 days.",
      "Supports three generation tones (professional, conversational, technical) with one-click regeneration using the same fetched data.",
      "Resolved 6 CVEs in dependencies (Flask, Flask-CORS, Requests) and a HIGH severity Bandit B201 finding surfaced by the CI/CD security pipeline.",
    ],
  },
  {
    title: "LLM Security Tester",
    category: "AppSec",
    repo: "https://github.com/mobeen786822/-llm-security-tester",
    techStack: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "Ollama", "Anthropic API"],
    points: [
      "A full-stack tool that probes LLMs for prompt injection, jailbreaking, system prompt extraction, data exfiltration, and role confusion attacks across 15 test cases.",
      "Compared Llama 3.2 vs Claude Haiku - Llama achieved 15/15 resistant while Haiku returned 3 failures and 5 partials on HIGH severity attacks.",
      "Built a React/Tailwind dashboard with per-category breakdowns, severity badges, expandable prompt/response rows, and JSON report export.",
      "Designed an extensible JSON attack library so new test cases and categories can be added without modifying backend or frontend code.",
    ],
  },
  {
    title: "Web Vulnerability Scanner",
    category: "AppSec",
    website: "https://web-vulnerability-scanner-lqy5.onrender.com/",
    techStack: ["Python", "Flask", "React", "Vite", "Tailwind CSS", "GitHub Actions"],
    points: [
      "A full-stack web vulnerability scanner with 6 scanner modules covering security headers, SSL/TLS, sensitive path exposure, cookie flags, open redirects, and information disclosure. Supports single and batch URL scanning with concurrent execution, a severity-coded React dashboard, and client-side JSON report export.",
      "Implements concurrent URL scanning via ThreadPoolExecutor with a shared requests.Session per URL for efficiency — supports single and batch scan modes.",
      "Each finding includes a severity rating (CRITICAL/HIGH/MEDIUM/LOW/INFO), status badge, detail, and remediation recommendation.",
      "CI/CD security pipeline with Bandit SAST, Gitleaks secrets detection, and pip-audit dependency scanning with fail-gate on HIGH findings.",
    ],
  },
  {
    title: "Production Support Incident Console",
    category: "Operations Simulation",
    repo: "https://github.com/mobeen786822/Production-Support-Incident-Console",
    website: "https://incident-console-ui.onrender.com/",
    techStack: ["React", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "Docker", "JWT", "GitHub Actions"],
    points: [
      "Built a web-based incident management console to simulate production support workflows end-to-end.",
      "Implemented incident lifecycle tracking with severity, status transitions, ownership, and event timelines.",
      "Added SLA-aware monitoring with breach indicators to support prioritisation and response quality.",
      "Implemented runbook and root-cause analysis capture to improve incident resolution consistency.",
      "Implemented a full-stack security pipeline across Python (Bandit, pip-audit) and JavaScript (npm audit, Gitleaks).",
      "Discovered and resolved 8 CVEs in backend dependencies through targeted remediation and dependency upgrades.",
      "Replaced python-jose with PyJWT due to an unresolvable vulnerability chain and migrated the authentication implementation.",
      "Resolved a high-severity frontend vulnerability by upgrading affected dependencies.",
    ],
  },
  {
    title: "Cancer Awareness Mobile App",
    category: "Mobile App",
    repoNote: "Private repo - available on request.",
    techStack: ["React Native", "TypeScript", "Firebase"],
    points: [
      "Built a cross-platform mobile app using React Native and TypeScript.",
      "Implemented Firebase integration for authentication, cloud data storage, and messaging workflows.",
      "Added geolocation and media upload capabilities with structured in-app navigation.",
      "Built educational and awareness-focused user journeys with clear call-to-action screens and reminders.",
      "Focused on privacy-conscious data handling for sensitive health-related user interactions.",
    ],
  },
];

const projectDetailPages = {
  "incident-console": {
    title: "Production Support Incident Console",
    markdown: incidentConsoleWriteup,
  },
  "job-application-assistant": {
    title: "Job Application Assistant",
    markdown: jobApplicationAssistantWriteup,
  },
};

const volunteer = [
  {
    title: "Web Developer (catchadrive.com)",
    org: "Catch a Drive",
    dates: "Nov 2025 - Jan 2026",
    points: [
      "Delivered front-end and back-end features for the Catch a Drive platform across booking and user-flow pages.",
      "Built responsive UI components for mobile and desktop to improve navigation clarity and completion flow.",
      "Integrated API-backed functionality for dynamic content and user actions, reducing manual content handling.",
    ],
  },
  {
    title: "Web Developer (Hentley.co)",
    org: "Hentley",
    dates: "Jan 2018 - Mar 2019",
    points: [
      "Implemented custom storefront components to improve product discovery and shopper navigation.",
      "Supported server-side functionality for product rendering, checkout-adjacent workflows, and content updates.",
      "Refined responsive layouts and styling to maintain consistent UX across mobile, tablet, and desktop.",
    ],
  },
];

const skillCategories = [
  {
    name: "Core Engineering",
    items: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Native",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Flask",
      "FastAPI",
      "Docker",
      "Supabase",
      "SQLAlchemy",
      "Nginx",
      "Firebase",
      "REST API Integration",
      "Jest",
      "React Testing Library",
      "Cybersecurity",
      "Networking",
      "SQL",
      "NoSQL",
      "Python",
      "Java",
      "C++",
    ],
  },
  {
    name: "DevSecOps",
    items: ["GitHub Actions", "Bandit", "Semgrep", "Gitleaks", "pip-audit", "npm audit", "SAST", "dependency scanning", "secrets detection"],
  },
];

const cybersecurityTools = [
  "Kali Linux",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Burp Suite",
  "Penetration Testing",
  "Vulnerability Assessment",
  "Incident Response",
  "Threat Intelligence",
  "Network Segmentation",
  "Log Analysis",
  "Firewall Configuration",
];

function Panel({ title, icon, children, className = "" }) {
  return (
    <section className={`rounded-3xl border border-brand-700/60 bg-slate-950/70 p-4 shadow-soft backdrop-blur-sm sm:p-6 ${className}`}>
      <h2 className="font-heading text-xl text-cyan-200 sm:text-2xl">
        <span className="mr-2">{icon}</span>
        {title}
      </h2>
      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">{children}</div>
    </section>
  );
}

function Card({ title, subtitle, points, link, linkText = "Visit", links = [], note, techStack = [], readMorePath }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3.5 transition hover:-translate-y-1 hover:border-accent-300 sm:p-4">
      <h3 className="font-heading text-base text-slate-100 sm:text-lg">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
      {techStack.length > 0 ? (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <li key={`${title}-${tech}`} className="rounded-full border border-brand-700/60 bg-slate-950 px-2.5 py-1 text-xs font-semibold text-brand-100">
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
      {link ? (
        <a className="mt-2 inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300" href={link} target="_blank" rel="noreferrer">
          ↗ {linkText}
        </a>
      ) : null}
      {links.length > 0 ? (
        <div className="mt-2 flex flex-wrap gap-3">
          {links.map((item) => (
            <a key={`${title}-${item.href}-${item.label}`} className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300" href={item.href} target="_blank" rel="noreferrer">
              ↗ {item.label}
            </a>
          ))}
        </div>
      ) : null}
      {readMorePath ? (
        <div className="mt-2">
          <Link to={readMorePath} className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300">
            Read More →
          </Link>
        </div>
      ) : null}
      {note ? <p className="mt-2 text-sm text-slate-400">{note}</p> : null}
      {points ? (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function TopBar() {
  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-brand-500/25 text-cyan-100" : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="mb-4 flex items-center justify-between rounded-2xl border border-brand-700/50 bg-slate-950/70 p-2 sm:mb-6">
      <span className="px-2 font-heading text-sm text-brand-100 sm:text-base">Mobeen Khan</span>
      <nav className="flex items-center gap-1">
        <NavLink to="/" end className={navClass}>
          Overview
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-brand-700/70 bg-gradient-to-r from-slate-950 via-slate-900 to-brand-900 p-5 text-white shadow-soft sm:p-8 lg:p-10">
      <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-14 bottom-0 h-44 w-44 rounded-full bg-brand-300/30 blur-3xl" aria-hidden="true" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.18em] text-brand-100 sm:text-sm sm:tracking-[0.2em]">Cybersecurity-Focused Software Engineer</p>
          <h1 className="mt-3 font-heading text-3xl leading-tight sm:text-5xl">Mobeen Khan</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Building and shipping secure, production-ready products from full-stack web apps to a live cybersecurity platform.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I care about making cybersecurity practical, not intimidating. Building Bunkerify came from seeing how many small businesses and founders wanted clear security guidance
            but had no simple starting point. I'm driven by turning complex risk into tools people can actually use.
          </p>
          <div className="mt-6 grid gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {contact.map((item) => (
              <a
                key={item.display}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-full border border-brand-300/40 bg-slate-900/40 px-4 py-2.5 text-center text-sm font-semibold text-cyan-100 transition hover:border-accent-300 hover:bg-accent-500/20 hover:text-white sm:text-left"
              >
                {item.display.startsWith("Email:") ? item.display : item.label}
              </a>
            ))}
          </div>
        </div>
        <img
          src="/images/user.png"
          alt="Portrait of Mobeen Khan"
          className="order-first h-36 w-36 self-center rounded-2xl border border-brand-300/50 object-cover shadow-lg md:order-none md:h-44 md:w-44 md:self-auto"
        />
      </div>
    </header>
  );
}

function OverviewPage() {
  return (
    <>
      <Hero />
      <main className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-12">
        <Panel title="Education" icon={"\u{1F393}"} className="lg:col-span-5">
          {education.map((item) => (
            <Card key={item.title} title={item.title} subtitle={`${item.place} | ${item.dates}${item.detail ? ` | ${item.detail}` : ""}`} />
          ))}
        </Panel>

        <Panel title="Skills" icon={"\u{1F6E0}\u{FE0F}"} className="lg:col-span-7">
          <div className="space-y-4">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{category.name}</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((skill) => (
                    <li key={`${category.name}-${skill}`} className="rounded-full border border-brand-700/60 bg-slate-900 px-2.5 py-1 text-xs font-semibold text-brand-100 sm:px-3 sm:py-1.5 sm:text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Certifications" icon={"\u{1F3C5}"} className="lg:col-span-12">
          {certifications.map((item) => (
            <Card key={item.title} title={item.title} subtitle={item.issuer} />
          ))}
        </Panel>

        <Panel title="Cybersecurity Tools" icon={"\u{1F6E1}\u{FE0F}"} className="lg:col-span-12">
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {cybersecurityTools.map((tool) => (
              <li key={tool} className="rounded-full border border-brand-700/60 bg-slate-900 px-2.5 py-1 text-xs font-semibold text-brand-100 sm:px-3 sm:py-1.5 sm:text-sm">
                {tool}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Experience" icon={"\u{1F91D}"} className="lg:col-span-12">
          <div className="grid gap-4 md:grid-cols-2">
            {volunteer.map((item) => (
              <Card key={item.title} title={item.title} subtitle={`${item.org} | ${item.dates}`} points={item.points} />
            ))}
          </div>
        </Panel>
      </main>
    </>
  );
}

function ProjectsPage() {
  const readMoreMap = {
    "Production Support Incident Console": "/projects/incident-console",
    "Job Application Assistant": "/projects/job-application-assistant",
  };

  return (
    <>
      <Hero />
      <main className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
        <Panel title="Projects" icon={"\u{1F680}"}>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                subtitle={item.category}
                links={[
                  ...(item.repo ? [{ label: "GitHub", href: item.repo }] : []),
                  ...(item.website ? [{ label: "Website", href: item.website }] : []),
                ]}
                techStack={item.techStack}
                note={item.repoNote}
                points={item.points}
                readMorePath={readMoreMap[item.title]}
              />
            ))}
          </div>
        </Panel>
      </main>
    </>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const detail = projectDetailPages[slug];

  if (!detail) {
    return (
      <>
        <main className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
          <Panel title="Project Not Found" icon={"⚠️"}>
            <Link to="/projects" className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300">
              ← Back to Projects
            </Link>
            <p className="text-slate-300">The project detail page you requested does not exist.</p>
          </Panel>
        </main>
      </>
    );
  }

  const project = projects.find((item) => item.title === detail.title);
  const externalLinks = [
    ...(project?.repo ? [{ label: "GitHub", href: project.repo }] : []),
    ...(project?.website ? [{ label: "Live Site", href: project.website }] : []),
  ];

  return (
    <>
      <main className="mt-6 grid gap-4 sm:mt-8 sm:gap-6">
        <Panel title="Project Detail" icon={"🧾"}>
          <Link to="/projects" className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300">
            ← Back to Projects
          </Link>

          <h1 className="font-heading text-2xl text-cyan-200 sm:text-3xl">{detail.title}</h1>

          {project?.techStack?.length > 0 ? (
            <ul className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <li key={`${detail.title}-${tech}`} className="rounded-full border border-brand-700/60 bg-slate-950 px-2.5 py-1 text-xs font-semibold text-brand-100">
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}

          {externalLinks.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {externalLinks.map((item) => (
                <a key={`${detail.title}-${item.href}`} className="inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300" href={item.href} target="_blank" rel="noreferrer">
                  ↗ {item.label}
                </a>
              ))}
            </div>
          ) : null}

          <article className="animate-fadeUp rounded-2xl border border-slate-700 bg-slate-900/70 p-4 sm:p-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => <h2 className="mt-6 font-heading text-xl text-cyan-200 first:mt-0 sm:text-2xl">{children}</h2>,
                h3: ({ children }) => <h3 className="mt-5 font-heading text-lg text-cyan-100 sm:text-xl">{children}</h3>,
                p: ({ children }) => <p className="mt-3 leading-relaxed text-slate-300">{children}</p>,
                ul: ({ children }) => <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">{children}</ul>,
                ol: ({ children }) => <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-slate-300">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                a: ({ href, children }) => (
                  <a className="font-semibold text-brand-300 hover:text-accent-300" href={href} target="_blank" rel="noreferrer">
                    {children}
                  </a>
                ),
                code: ({ children }) => <code className="rounded bg-slate-950 px-1.5 py-0.5 text-sm text-accent-300">{children}</code>,
                pre: ({ children }) => <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200">{children}</pre>,
                strong: ({ children }) => <strong className="font-semibold text-slate-100">{children}</strong>,
              }}
            >
              {detail.markdown}
            </ReactMarkdown>
          </article>
        </Panel>
      </main>
    </>
  );
}

function Footer() {
  return <footer className="mt-8 border-t border-slate-800 pt-4 text-center text-sm text-slate-400">© {new Date().getFullYear()} Mobeen Khan</footer>;
}

export default function App() {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-10 lg:py-14">
      <TopBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
