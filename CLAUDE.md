# CLAUDE.md

Instructions for any future Claude Code session working in this repository.

## What this project is

Jonathan Danilov's personal portfolio website. Plain HTML, CSS, and vanilla
JavaScript only — **no frameworks, no build tools, no npm packages**. It is
deployed as a static site on GitHub Pages, and the repository is **public**.

## Security rules (non-negotiable)

- Never commit real API keys, database credentials, `.env` contents,
  connection strings, or any other secret to this repo.
- If an example value is ever needed in code or docs, use an obviously fake
  placeholder like `your_api_key_here` — never a real-looking value.
- Keep `.gitignore` excluding `.env`, `node_modules/`, and any secret config
  files. Don't remove those entries.
- This site has no backend — it should never gain one that requires secrets
  without an explicit, separate conversation about how those secrets would
  be kept out of the public repo (e.g., serverless functions with env vars
  set in a host's dashboard, not committed here).

## How to work in this codebase

1. **Explain as you build, not after.** When you add or change a section of
   HTML, a CSS block, or a JS function, briefly explain in plain language
   what it does and why, as part of your response — don't just silently
   generate a diff and move on. Jonathan is a CIS student who wants to
   understand this codebase, not just receive it.
2. **Comment major CSS/JS blocks in plain language.** Every significant
   block (a component's styles, a JS function, an event listener group,
   a media query) should have a short comment above it explaining its
   purpose in plain English. Don't over-comment obvious one-liners.
3. **Check in before structural changes.** Before doing any of the
   following, describe the change and get a go-ahead first:
   - Adding/removing/renaming files or folders
   - Changing the overall page/section layout or navigation structure
   - Introducing a new dependency, build step, or framework
   - Changing how the site is deployed
   Small, contained tweaks (copy edits, color/spacing adjustments, fixing a
   bug in an existing function) don't need a check-in.
4. **Stay framework-free.** Don't introduce React, Vue, Tailwind, bundlers,
   or package managers unless Jonathan explicitly asks for that change.

## File structure

- `index.html` — all page markup/content, organized by section (Hero,
  About, Projects, Skills, Contact).
- `styles.css` — all styling, using CSS custom properties (variables) for
  the color palette and spacing so the theme stays consistent.
- `script.js` — all interactivity (mobile nav toggle, scroll-reveal
  animations, the contact form's front-end-only behavior).
- No inline `<style>` or `<script>` blocks in `index.html` — keep concerns
  separated across the three files.

## Placeholders

Project links, live-demo URLs, and contact links are left as bracketed
placeholders (e.g. `[GITHUB_URL]`, `[EMAIL]`) for Jonathan to fill in
himself. Don't invent real-looking URLs or guess at values.
