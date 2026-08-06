# Design Direction

## Intent

Create a portfolio for a software developer with 4+ years of professional experience. It should communicate engineering depth and care through a dark editorial interface that feels organic, sentient, and precise.

This direction is inspired by experimental creative-development portfolios, but it must become an original expression rather than a close copy of any reference. The visual spectacle supports the work; it must never obscure navigation, project information, or contact details.

## Principles

1. **Alive, not busy** — use slow ambient motion and tactile responses instead of constant decoration.
2. **Editorial, not SaaS** — favor dramatic type, asymmetry, whitespace, and restrained metadata over cards, gradients, and dashboard patterns.
3. **Engineered with restraint** — every animation needs a purpose, graceful fallback, and a measurable performance budget defined during implementation.
4. **Content remains primary** — real projects and experience must be understandable without WebGL or animation.
5. **Honest presentation** — do not fabricate claims or use AI-themed language unless it accurately describes the developer's work.

## Visual system

### Color

- Background: near-black `#050505`
- Primary text: warm off-white, approximately `#F2F0EA`
- Muted text and rules: cool gray at accessible contrast levels
- Accent: deep electric blue, used sparingly for state, navigation markers, and the footer reveal
- Avoid broad neon gradients and excessive glow.

### Typography

- Display: a high-contrast architectural serif such as Playfair Display or a suitable open alternative
- Technical details: Geist Mono or another clear monospace
- Use oversized display text for section statements and project names, with compact monospace labels for indices, dates, roles, and technologies.
- Maintain comfortable reading sizes and line lengths on small screens; dramatic scale must not cause clipping or unreadable wrapping.

### Texture and depth

- Add a fixed, non-interactive noise layer around `0.03–0.05` opacity to reduce digital flatness.
- Use hairline rules, subtle tonal shifts, and controlled layering instead of conventional shadows and rounded cards.
- Ensure texture does not reduce text contrast or produce a large network request.

## Page architecture

### 1. Hero — living system

- Fill the initial viewport with the near-black background and a central generative form.
- Render a wireframe or point-based abstract sphere with React Three Fiber and Drei.
- The form should breathe through subtle noise displacement and respond gently to fine-pointer movement. It should not aggressively chase the cursor.
- Layer large editorial positioning text around the form. Initial language should describe the owner truthfully as a software developer; final copy must be confirmed rather than invented.
- Provide a central **Initialize** action that moves focus and scrolls to the main portfolio content.
- Include sparse interface metadata such as section index and availability only when the information is real.
- If WebGL is unavailable, show a visually compatible static or CSS-based form. Reduced-motion mode should significantly limit deformation and pointer response.

### 2. About — stream of thought

- Present a short sequence of large statements about engineering philosophy, product thinking, and approach to software.
- Desktop may translate the sequence horizontally in response to vertical progress, with a restrained velocity skew.
- Mobile should use a natural vertical flow rather than force horizontal scrolling or pin a section for an excessive duration.
- Keep the statements concise and specific; avoid generic AI or innovation slogans.

### 3. Selected work — distortion gallery

- Use a spacious single-column project index instead of a card grid.
- Each row should include the project name, year, role or category, and a compact list of relevant technologies.
- Fine-pointer hover may reveal an image near the cursor with a brief displacement or RGB-split response tied to movement velocity.
- Keyboard focus must reveal equivalent project context. Touch devices should display project imagery inline or through an explicit interaction.
- Use a mixture of local case studies, live sites, and source repositories according to what is available for each project.
- Every project must lead to meaningful detail through at least one of those destinations or an honest explanation on the page.
- Omit projects that have not been supplied by the owner. Do not render fabricated project rows, dead links, or non-interactive project placeholders.

### 4. Technical arsenal

- Use two opposing marquee rows containing real technologies and a limited number of concepts that reflect the developer's practice.
- Typography may use a transparent fill and fine light stroke, filling on hover or focus.
- Motion must pause or become static for reduced-motion users and should pause when off-screen.
- Repeat content accessibly without causing duplicated announcements for screen readers.

### 5. Footer — hand-off

- End with a full-width **Let's Collaborate** contact action.
- Reveal deep electric blue behind the link with a curtain-like hover and focus transition.
- Include only confirmed contact and social links; omit unavailable methods rather than rendering placeholders or dead links.
- A local-time display may reinforce the precision motif once the owner's time zone is confirmed. Update it no more frequently than needed and stop updates in hidden tabs.

## Motion language

- Page entry: reveal hairline rules, then lift text from masked containers with a restrained stagger.
- Scrolling: use Lenis for subtle smoothing and Motion scroll values for measured parallax. Do not hijack native navigation or make the page feel delayed.
- Hover and focus: favor spring motion with visible weight over linear scaling.
- Cursor: on fine-pointer devices only, a small difference-blend dot may expand around interactive elements. Preserve a usable native cursor and disable the enhancement for touch, reduced motion, or unsupported blend modes.
- Keep ambient movement slow. Reserve glitch and distortion effects for project-preview transitions rather than applying them globally.

## Responsive behavior

- Start with a semantic, readable mobile layout and progressively add spatial choreography.
- Remove or simplify pinned sections, cursor-following media, and expensive shader behavior on constrained devices.
- Ensure the hero fits dynamic mobile viewport units and does not hide calls to action behind browser chrome.
- Test narrow mobile, tablet, laptop, and wide desktop layouts in both portrait and landscape where relevant.

## Accessibility

- All navigation and project interactions must work with a keyboard.
- Use semantic landmarks, heading order, descriptive links, and meaningful image alternatives.
- Keep visible focus indicators and meet WCAG AA contrast for essential text and controls.
- Honor `prefers-reduced-motion` across CSS, Motion, Lenis, marquees, and the WebGL scene.
- The custom cursor, canvas, texture, and decorative duplicates must be hidden from assistive technology.
- Never make essential content dependent on hover, pointer tracking, or canvas rendering.

## Performance and implementation constraints

- Dynamically load the WebGL scene and render meaningful HTML immediately.
- Cap device pixel ratio and geometry complexity; avoid unnecessary post-processing.
- Pause render loops and timers when their sections or the browser tab are not visible.
- Optimize and correctly size images, minimize font variants, and avoid external assets without clear licensing.
- Prevent layout shift and preserve responsive dimensions for all media.
- Define concrete frame-rate, device-pixel-ratio, geometry, and asset-size targets while implementing the selected effects, then document the budgets alongside the relevant code or project checks.
- Keep the application compatible with static export while deployment is undecided. GitHub Pages is the likely target, so server-only features require prior discussion.
- Keep implementation direct. Do not build a config schema, CMS, page builder, or generalized animation framework at this stage.

## Planned implementation stack

- Next.js, React, and TypeScript
- Tailwind CSS
- `@react-three/fiber` and `@react-three/drei`
- Motion
- `lenis` with its current React integration
- Lucide React

Dependencies may change if compatibility or accessibility requires it, but changes should be explained before broadening the stack.

## Content still required

Before finalizing the site, collect and confirm:

- Preferred name and professional title
- Short introduction and longer engineering philosophy
- Employment history and accurate experience dates
- Selected projects, descriptions, roles, links, technologies, and imagery
- Technical skills to include in the marquee
- Contact email and social profiles
- Location, time zone, availability, and résumé link if they should be public
- Final accent color and typography choices
