## The Problem

Job seekers spend 30-60 minutes rewriting their resume for every application - adjusting bullet points, reordering skills, tweaking the summary - while trying to keyword-match the job description without overstating experience.

I built Job Application Assistant to automate that workflow. Users paste a job description, get a job-fit assessment with a confidence score, and download a tailored resume and cover letter - all generated from a single canonical resume source with strict guardrails against fabrication.

## How It Works

The system runs a multi-stage pipeline. First, it classifies the job into a role type (application security, DevSecOps, penetration testing, software engineering, AI/ML, or graduate) using AI classification with a deterministic keyword-scoring fallback.

Based on classification, it selects a role-specific strategy controlling which projects appear, how skills are ordered, what the summary says, and whether the resume leads with security or full-stack work.

The resume is stored as structured JSON with weighted bullet points - each bullet has an importance score (0-3), a core flag, and tags. The generator selects bullets by importance first, then filters by JD keyword relevance. Playwright renders HTML to PDF. The full output is returned in under 5 seconds.

## Key Technical Decisions

1. No-hallucination validation - checks every term in the AI-generated tagline against the source resume, falls back to a safe default if any term does not exist. Dot-separated terms like ASP.NET required special handling.
2. Dual AI provider with deterministic fallback - tries Claude first, can fall back to OpenAI, and degrades to deterministic heuristics if both fail.
3. Role-aware strategy engine - hardcoded strategy mappings per role type controlling project selection (top 4 per role), skill ordering, section layout, bullet filtering, and professional summary wording.
4. Multi-user SaaS architecture - Supabase auth, per-user generation history, monthly quota of 10 enforced server-side, row-level security policies.

## Security Pipeline

GitHub Actions CI/CD with Bandit, Semgrep, Gitleaks, and pip-audit with fail-gate on HIGH findings.

## What I Would Improve

- 0% test coverage (would use TDD from day one)
- Move from filesystem Flask sessions to Redis
- Add structured logging
