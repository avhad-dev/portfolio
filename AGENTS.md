# Agent Instructions

## Environment

- Operating system: NixOS
- Platform: `aarch64-linux`
- Node.js: `22.x`
- Package manager: npm (`10.x`)
- Nix flakes are enabled.

## Development

- Use npm for JavaScript package management unless the project documentation says otherwise.
- Keep dependencies and development tooling reproducible through `flake.nix`.
- Do not assume globally installed tools beyond Nix, Git, Node.js, and npm.
- Run the relevant checks after making changes and report anything that could not be verified.

## Git

- Inspect `git status` before and after making changes.
- Preserve unrelated changes; never discard or overwrite work that you did not create.
- Do not commit, amend, reset, rebase, force-push, or otherwise rewrite history unless explicitly requested.
- When asked to commit, keep each commit focused on one logical change.
- Use lowercase Conventional Commit subjects, such as `feat: add project gallery` or `fix: improve mobile navigation`.
- Never commit credentials, secrets, local environment files, or generated build output.
