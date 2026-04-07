## The Problem

Production incidents are chaotic by nature - an alert fires, someone jumps on it, there is a flurry of activity in Slack, and eventually things get fixed. But the process is often undocumented. Teams skip root cause analysis, SLA breaches go untracked, and the same incidents keep recurring because nobody wrote down what actually went wrong.

I built the Production Support Incident Console to model how production incidents should be handled: structured triage, enforced SLA tracking, runbook-driven mitigation, and a hard gate that prevents closure without a completed root cause analysis. It is workflow-as-code for incident response, not a ticket tracker.

## How It Works

Incidents flow through a state machine: New -> Investigating -> Mitigated -> Resolved -> Closed.

Each transition is enforced server-side - the backend checks an allowed transitions map before accepting any status change. Every transition, comment, and runbook step creates an immutable event record, building an audit trail that can reconstruct the full incident timeline after the fact.

SLA tracking is computed on-demand rather than stored. When an incident is created, the system captures the service's SLA policy at that point in time. On every API response, it computes the SLA deadline and breach state from the incident's timestamps and the frozen policy. This means if a service updates its SLA targets, existing incidents are not retroactively affected - a design choice that prevents confusing mid-incident policy changes.

The frontend is a React/TypeScript SPA with filtered views, a detail page with timeline rendering, runbook step logging, and a metrics dashboard showing MTTA (Mean Time To Acknowledge), MTTR (Mean Time To Resolve), and breach rate. The backend is FastAPI with Pydantic validation, SQLAlchemy ORM, and stateless JWT authentication.

## Key Technical Decisions

1. RCA-gated closure - you cannot close an incident without completing all four RCA fields (root cause, contributing factors, corrective actions, prevention actions). The backend enforces this, not just the frontend. This forces teams to document findings while context is fresh.
2. Event-sourced timeline - every mutation creates an IncidentEvent record with a type, actor, and timestamp. Metrics like MTTA and MTTR are computed from actual event timestamps, not editable fields.
3. Stateless JWT for horizontal scaling - no server-side session store, any API instance can verify a token independently.
4. Service-specific SLA policies - each service defines its own policy as a JSON object mapping severity levels to hour targets, with sensible defaults as fallback.

## Security Work

Full GitHub Actions security pipeline with Bandit, pip-audit, npm audit, and Gitleaks with a consolidated fail-gate on HIGH findings. pip-audit surfaced 8 CVEs in backend dependencies. The most significant was in python-jose which had no upstream fix - replaced it entirely with PyJWT and migrated the JWT authentication implementation.

## What I Would Improve

- RBAC (role field exists but is unused)
- Replace SQLite with PostgreSQL from day one
- Add pagination to the incidents endpoint
- Implement WebSocket updates instead of 30-second polling
