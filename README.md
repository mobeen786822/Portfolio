# Mobeen Khan Portfolio

I am Mobeen Khan, an Australia-based developer with a background in software engineering and cybersecurity. This site is my public portfolio and a focused snapshot of the work I do.

Live site: **https://www.mobeenkhan.com/**

## What This Site Covers

The portfolio is designed for employers and potential project collaborators. A warm editorial homepage leads with six visual case studies, with a filterable archive, background page, and audience-specific contact links.

Featured work: Golden Hour Pilates, JZ Tech, JZ Supports & Maintenance, Khan Security Testing, Bunkerify, and the Production Support Incident Console. All six are also selectable in the homepage hero.

Project records live in `src/content/portfolio.js`; case-study narratives live alongside them as Markdown. Existing `/experience/:slug` hash routes are preserved. Desktop/mobile screenshot controls, route focus management, keyboard navigation and reduced-motion support are included. Homepage scroll entrances use IntersectionObserver and the Web Animations API without a new dependency. They run once per visit, leave content visible by default, cancel for keyboard focus, and respond to changes in reduced-motion preferences.

## Tech Stack

This project uses **React**, **Vite**, and **Tailwind CSS**. React gives me a clean component model for maintainable UI structure, Vite keeps local development and builds fast, and Tailwind CSS helps ship consistent styling quickly without carrying a heavy custom CSS layer.

## Run Locally

Use Node.js `20.19+` (or `22.12+`) before installing dependencies.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Security

The repository includes a GitHub Actions security workflow that runs on pushes and pull requests to `main`. It performs secret scanning with **Gitleaks** and dependency vulnerability scanning with **npm audit** (configured to fail on high-severity issues).

During a recent pipeline run, `npm audit` flagged a high-severity dependency issue. It was remediated by applying `npm audit fix`, then upgrading the build toolchain to `vite@7.3.1` and `@vitejs/plugin-react@5.1.4` to clear remaining transitive risk. The current audit result is `0 vulnerabilities`.
