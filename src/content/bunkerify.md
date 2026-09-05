## The problem

Small businesses and founders can struggle to turn security terminology into a practical starting point. Bunkerify brings self-assessment, a personalised risk breakdown and next steps into one product.

## My role

I built the full-stack application, assessment scoring, authentication, reporting and web-scanning integration.

## Important decisions

### Translate answers into useful guidance

A custom scoring engine maps 19 assessment questions to Essential Eight categories and calculates weighted maturity levels. The output is intended as a starting point for discussion, not a certification or an independent audit.

### Connect the whole journey

The application connects the assessment to a results page, an automated HTML email report and a consultation-booking path. Supabase provides authentication and data storage, with SendGrid handling transactional delivery.

### Bring findings into context

An integrated web scanner adds technical findings to the assessment results and email report. New users encounter an email gate, while returning authenticated users have a direct scanning path.

## Architecture at a glance

Assessment answers → scoring engine → stored results → personalised report and next steps.

The product uses Next.js, Supabase, SendGrid and Vercel. The assessment and scanner address different kinds of evidence; neither is presented here as proof that a business is secure.

## Outcome

A deployed product connecting assessment, reporting and follow-up in one workflow. This case study describes the implementation; it does not claim unmeasured customer adoption or commercial results.
