# Portfolio

A highly crafted personal portfolio for a software developer with 4+ years of professional experience. The experience combines editorial typography, restrained WebGL, and tactile motion to feel organic and precise without resembling a generic SaaS landing page.

## Vision

The site should feel alive: a breathing generative hero, weighted interactions, cinematic transitions, and subtle texture within a dark, minimal interface. Its purpose is to present real projects, technical strengths, and professional experience clearly while leaving a memorable visual impression.

The implementation is intentionally not config-driven at this stage. Content and behavior should remain straightforward and close to the components that render them until reuse is proven.

## Planned stack

- Next.js with React and TypeScript
- Tailwind CSS for layout and styling
- React Three Fiber and Drei for the hero scene
- Motion for interaction and scroll orchestration
- Lenis for smooth scrolling
- Lucide React for interface icons

See [`DESIGN.md`](./DESIGN.md) for the full visual and interaction direction.

## Status

The repository is bootstrapped and the design direction is documented. Application scaffolding and personal content are still pending. The deployment platform is undecided, with GitHub Pages as the likely target, so the initial implementation should remain compatible with static export.

## Prerequisites

Install Nix and enable the `nix-command` and `flakes` experimental features.
The current development shell targets `aarch64-linux`. Node.js and npm do not need to be installed globally.

## Getting started

Enter the reproducible development shell:

```sh
nix develop
```

The shell defined in [`flake.nix`](./flake.nix) provides Node.js 22, npm, and Git.
[`flake.lock`](./flake.lock) pins the Nix dependencies for reproducible environments.
Application setup and development commands will be added when the Next.js application is scaffolded.

## Project documentation

- [`AGENTS.md`](./AGENTS.md) — environment, development, and Git instructions for coding agents
- [`DESIGN.md`](./DESIGN.md) — visual, interaction, accessibility, and responsive specification

## License

The source code is licensed under the [MIT License](./LICENSE).

Personal content, portfolio copy, branding, images, and other creative assets are not covered by the MIT License and remain all rights reserved unless stated otherwise.
