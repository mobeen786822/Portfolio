## Overview

JZ Supports & Maintenance provides practical assistance for people and their homes across NDIS supports, injury recovery, domestic assistance, cleaning, lawns, and general maintenance.

I designed and built a seven-route production website that makes the service range easier to understand while maintaining clear boundaries around funding, eligibility, and unconfirmed enquiry details.

## The problem

The business serves audiences with different needs, funding arrangements, and levels of urgency. The website therefore needed to:

- separate support pathways without fragmenting the brand
- explain private, NDIS, and insurer-funded possibilities carefully
- present indoor and outdoor services clearly
- support people using keyboard, touch, zoom, or reduced-motion preferences
- remain honest while contact and evidence details were still being confirmed

## My role

I handled discovery, sitemap design, content hierarchy, visual direction, component selection, frontend implementation, accessibility remediation, responsive QA, metadata, deployment support, and documentation.

## Design approach

### Organise the service model around user pathways

The site separates NDIS supports, injury and recovery assistance, cleaning, lawns and maintenance, about, and contact content into dedicated routes. The homepage provides four clear entry points and an explained process before directing users deeper.

### Build trust through clarity

Funding and eligibility statements are presented as conditional guidance rather than promises. The site also avoids presenting reference photography as completed client work and keeps unconfirmed enquiry handling disabled instead of collecting data prematurely.

### Adapt proven components without losing ownership

Relume Library MCP supplied genuine React component foundations. I vendored and adapted those components locally, resolved framework and accessibility issues, and integrated them with shadcn, Radix, and project-specific design tokens. Relume is not required at runtime.

## Implementation

- Next.js App Router with React, TypeScript, and Tailwind CSS
- seven production routes with shared navigation and footer architecture
- genuine Relume component foundations vendored into the repository
- shadcn, Radix UI, Lucide icons, Motion, and Embla foundations
- Manrope headings and Atkinson Hyperlegible body typography
- accessible skip link, navigation, FAQ, focus states, and reduced-motion behaviour
- responsive service cards, photo bands, process sections, and contact states
- local runtime imagery with documented reference-image sources
- Australian metadata, canonical URLs, and social sharing metadata
- lint, type checking, production build, and browser-based responsive QA
- Vercel deployment with custom-domain support

## Outcome

The launched website turns a broad service offering into a structured, approachable digital experience. It establishes a reusable component system that can accept final contact details, business evidence, and production photography without rebuilding the site architecture.

No unmeasured enquiries, bookings, or commercial outcomes are claimed.

[View the live JZSM website](https://www.jzsm.com.au)
