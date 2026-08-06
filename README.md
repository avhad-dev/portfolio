# Portfolio

A personal portfolio website. The implementation and visual direction are still being defined.

## Status

This project is in the initial planning and setup phase.

## Prerequisites

Install Nix and enable the `nix-command` and `flakes` experimental features.
Node.js and npm do not need to be installed globally.

## Getting started

Enter the reproducible development shell:

```sh
nix develop
```

The shell defined in [`flake.nix`](./flake.nix) provides Node.js 22, npm, and Git.
[`flake.lock`](./flake.lock) pins the Nix dependencies for reproducible environments.
Application setup and development commands will be added after the stack is selected.

## Project documentation

- [`AGENTS.md`](./AGENTS.md) — environment, development, and Git instructions for coding agents
- `DESIGN.md` — visual and interaction specification (planned)

## License

The source code is licensed under the [MIT License](./LICENSE).

Personal content, portfolio copy, branding, images, and other creative assets are not covered by the MIT License and remain all rights reserved unless stated otherwise.
