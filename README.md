# Jonathan Danilov — Personal Portfolio

## Overview

My personal Data Science / technical portfolio: background, experience, and
project case studies, built as a static site with plain HTML, CSS, and
vanilla JavaScript — no frameworks, no build tools.

## Live Site

https://jonnydanilov.github.io/Personal-Website/

## Design

An editorial, sports-data-inspired system rather than a generic developer
template: alternating navy and cream sections, orange/blue accents, and
typography-led layout (Big Shoulders Display for headlines, Inter for body
copy). Projects are presented as case studies with role/data/stack/status
metadata instead of generic cards.

## Features

- Responsive masthead navigation with active-section highlighting
- Asymmetric hero with direct links to GitHub, LinkedIn, and email
- About / Education section and a résumé-style Experience timeline
- Project case studies, including large production screenshots with an
  accessible, keyboard-operable image lightbox
- A structured, four-column technical Skills inventory
- Direct contact links (email, LinkedIn, GitHub)
- Semantic HTML, visible focus states, descriptive alt text, and support for
  `prefers-reduced-motion`

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid/Flexbox)
- Vanilla JavaScript (no libraries or dependencies)
- GitHub Pages (hosting)

No frameworks, no build tools.

## Development Approach

I use ChatGPT and Claude Code as implementation and iteration tools for parts
of this site's code. I direct the design and content, define architecture and
layout decisions, integrate and debug every change, test the result, and
handle deployment myself.

## Running Locally

No build step — just serve the folder.

```bash
# Option 1: open directly
open index.html

# Option 2: run a local server
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project Structure

```
index.html    — page markup, organized by section
styles.css    — all styling (theme variables, layout, responsive rules)
script.js     — all interactivity (nav, scroll-spy, image lightbox)
CLAUDE.md     — working guidelines for AI-assisted changes to this repo
assets/       — project screenshots
```

## Deployment

Hosted on GitHub Pages, deployed from the `main` branch (`Settings → Pages →
Source → main / root`).

## Contact

- GitHub: [jonnydanilov](https://github.com/jonnydanilov)
- LinkedIn: [jonathandanilov](https://www.linkedin.com/in/jonathandanilov)
- Email: jonny.danilov14@gmail.com
