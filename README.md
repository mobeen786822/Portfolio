# Mobeen Khan Portfolio

I am Mobeen Khan, a Computer Science Master's graduate specialising in cybersecurity, based in Australia. This site is my public portfolio and a focused snapshot of the work I do.

Live site: **https://www.mobeenkhan.com/**

## What This Site Covers

The portfolio brings together my cybersecurity projects, core technical skills, professional experience, and certifications in one place so recruiters, teams, and collaborators can quickly assess my background.

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
