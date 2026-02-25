import { NavLink, Route, Routes } from "react-router-dom";

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

const projects = [
  {
    title: "Bunkerify",
    category: "Cybersecurity Platform",
    website: "https://www.bunkerify.com",
    points: [
      "Built Bunkerify, a free cyber health check platform based on the ACSC Essential Eight maturity model.",
      "Designed and implemented a 19-question assessment with automated scoring and category-level risk breakdowns.",
      "Delivered HTML email reports with clear CTAs, improving lead follow-up and conversion.",
      "Integrated lead capture + booking workflow (Calendly) to turn assessments into consultations.",
      "Deployed a live marketing funnel (landing page + LinkedIn launch assets) to drive inbound leads.",
    ],
  },
  {
    title: "Job Application Assistant",
    category: "Web App",
    repo: "https://github.com/mobeen786822/job-application-assistant",
    points: [
      "Built a web app that tailors resumes from job descriptions and exports PDF/HTML.",
      "Implemented OpenAI-powered content tailoring with strict no-fabrication rules.",
      "Added private access via VPN-only deployment (Tailscale) on a cloud VM.",
      "Added UI preview, download actions, and loading feedback.",
    ],
  },
  {
    title: "Production Support Incident Console",
    category: "Operations Simulation",
    repo: "https://github.com/mobeen786822/Production-Support-Incident-Console",
    points: [
      "Built a web-based incident management console to simulate production support workflows end-to-end.",
      "Implemented incident lifecycle tracking with severity, status transitions, ownership, and event timelines.",
      "Added SLA-aware monitoring with breach indicators to support prioritisation and response quality.",
      "Implemented runbook and root-cause analysis capture to improve incident resolution consistency.",
    ],
  },
  {
    title: "Cancer Awareness Mobile App",
    category: "Mobile App",
    points: [
      "Built a cross-platform mobile app using React Native and TypeScript.",
      "Implemented Firebase integration for authentication, cloud data storage, and messaging workflows.",
      "Added geolocation and media upload capabilities with structured in-app navigation.",
    ],
  },
];

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

const skills = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "React Native",
  "Next.js",
  "JavaScript",
  "Node.js",
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

function Card({ title, subtitle, points, link, linkText = "Visit" }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3.5 transition hover:-translate-y-1 hover:border-accent-300 sm:p-4">
      <h3 className="font-heading text-base text-slate-100 sm:text-lg">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
      {link ? (
        <a className="mt-2 inline-flex items-center text-sm font-semibold text-brand-300 hover:text-accent-300" href={link} target="_blank" rel="noreferrer">
          ↗ {linkText}
        </a>
      ) : null}
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
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full border border-brand-700/60 bg-slate-900 px-2.5 py-1 text-xs font-semibold text-brand-100 sm:px-3 sm:py-1.5 sm:text-sm">
                {skill}
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
                link={item.repo || item.website}
                linkText={item.repo ? "GitHub" : "Website"}
                points={item.points}
              />
            ))}
          </div>
        </Panel>
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-6 sm:py-10 lg:py-14">
      <TopBar />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}
