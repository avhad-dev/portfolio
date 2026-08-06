# Agent Instructions

## Project direction

- Build a personal portfolio for a software developer with 4+ years of professional experience.
- The experience should feel organic, tactile, editorial, and highly engineered—not like a generic SaaS template.
- Treat [`DESIGN.md`](./DESIGN.md) as the source of truth for visual behavior and [`README.md`](./README.md) as the project overview and setup guide.
- Take inspiration from the documented direction without cloning another website or inventing personal details.
- Do not introduce a config-driven content system, CMS, generic section renderer, or similar abstraction unless explicitly requested. Keep content close to the components that render it for now.

## Environment

- Operating system: NixOS
- Platform: `aarch64-linux`
- Node.js: `22.x`
- Package manager: npm (`10.x`)
- Nix flakes are enabled.

## Development

- Use npm for JavaScript package management unless the project documentation says otherwise.
- Use `flake.nix` and `flake.lock` to pin the system development toolchain.
- Use npm for JavaScript dependencies, commit `package-lock.json`, and prefer `npm ci` for reproducible installs.
- Do not assume globally installed tools beyond Nix, Git, Node.js, and npm.
- Run the relevant checks after making changes and report anything that could not be verified.
- Prefer the smallest maintainable implementation and avoid speculative abstractions.
- Add dependencies only when they directly support a documented requirement.
- Use current, maintained package APIs; use `lenis/react` rather than the deprecated `@studio-freight/react-lenis` package.
- Do not invent projects, employers, testimonials, metrics, contact details, or other biographical claims. Use clearly marked placeholders for unfinished copy, but omit unavailable projects, contact methods, and dead links entirely.
- Keep the application compatible with static export while deployment is undecided; GitHub Pages is the likely target. Discuss any server-only feature before introducing it.

## Experience quality

- Preserve semantic HTML and core content when JavaScript, WebGL, or animation is unavailable.
- Build mobile-first and verify keyboard, touch, and fine-pointer interactions.
- Respect `prefers-reduced-motion` and provide a static or lightweight alternative to intensive effects.
- Keep focus states visible, color contrast sufficient, and interactions keyboard accessible.
- Avoid scroll-jacking, inaccessible cursor replacement, autoplay audio, and motion that blocks navigation.
- Lazy-load heavy visual code, cap canvas pixel density, optimize assets, and prevent animation work in hidden tabs.
- After the application is scaffolded, run the repository's formatting, linting, type-checking, testing, and production-build scripts as applicable.

## Git

- Inspect `git status` before and after making changes.
- Preserve unrelated changes; never discard or overwrite work that you did not create.
- Do not commit, amend, reset, rebase, force-push, or otherwise rewrite history unless explicitly requested.
- When asked to commit, keep each commit focused on one logical change.
- Use lowercase Conventional Commit subjects, such as `feat: add project gallery` or `fix: improve mobile navigation`.
- Never commit credentials, secrets, local environment files, or generated build output.
