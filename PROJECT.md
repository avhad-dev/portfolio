# Project: Portfolio Codebase Audit & Compliance Fixes

## Architecture
Next.js 15 App Router portfolio site built with React 19, Tailwind CSS, Framer Motion, and Three.js (React Three Fiber). Static export to `out/`.
- Site layout: `src/components/layout/SiteChrome.tsx` (header navbar), `src/components/footer/FooterSection.tsx` (footer).
- Hero section: `src/components/hero/HeroScene.tsx`, `WebGLScene.tsx`, `SettlementField.tsx` (R3F point-cloud scene).
- About section: `src/components/about/AboutSection.tsx` (operating principles & summary).
- Work section: `src/components/work/WorkSection.tsx` (anonymized systems & abstract diagrams).
- Arsenal section: `src/components/arsenal/ArsenalSection.tsx` (technical stack list).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Site Chrome & Navigation | Navigation bar with profile, systems, stack links | M1 | ORIGINAL_REQUEST §R1 |
| 2 | Footer Compliance | Non-interactive footer with static typography | M1 | ORIGINAL_REQUEST §R1 |
| 3 | PII Removal Audit | Zero personal names, emails, social links in codebase | M1 | ORIGINAL_REQUEST §R1 |
| 4 | WebGL Point-Cloud Scene | THREE.Points with custom shader, capped DPR 1.5, dynamic load | M2 | ORIGINAL_REQUEST §R2 |
| 5 | WebGL Reduced Motion | Fallback gradient & disabled vertex displacement for reduced motion | M2 | ORIGINAL_REQUEST §R2 |
| 6 | Operating Principles & Copy | About section with 4 operating principles & 4+ yrs experience summary | M3 | ORIGINAL_REQUEST §R3 |
| 7 | Anonymized Systems & Diagrams | Work section with 5 capability studies & inline abstract diagrams | M3 | ORIGINAL_REQUEST §R3 |
| 8 | Technical Build & Lint | `npm run lint` and `npm run build` pass with static export output | M4 | ORIGINAL_REQUEST §R4 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Navigation Fix & Site Chrome / Footer Verification | Add `id="stack"` to ArsenalSection section tag, verify site chrome nav & non-interactive footer, PII audit | none | DONE |
| M2 | Hero WebGL Point-Cloud Verification | Verify SettlementField THREE.Points, custom shader, DPR 1.5, dynamic loading, reduced motion | M1 | DONE |
| M3 | Profile & Selected Systems Verification | Verify About section principles, summary copy, Work section 5 anonymized studies & abstract diagrams | M1 | DONE |
| M4 | Build & Static Export Verification | Verify `npm run lint` and `npm run build` static export output | M1, M2, M3 | DONE |

## Interface Contracts
### Navbar Navigation ↔ Section Anchors
- `#about` -> `<section id="about">` in `AboutSection.tsx`
- `#work` -> `<section id="work">` in `WorkSection.tsx`
- `#stack` -> `<section id="stack">` in `ArsenalSection.tsx`

## Code Layout
- `src/app/` — App Router layout and pages
- `src/components/layout/` — SiteChrome navigation
- `src/components/hero/` — HeroScene, WebGLScene, SettlementField
- `src/components/about/` — AboutSection
- `src/components/work/` — WorkSection
- `src/components/arsenal/` — ArsenalSection
- `src/components/footer/` — FooterSection
