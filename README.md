# Khayal Ismayilzada — AI Engineer Portfolio

A production-ready, single-page developer portfolio built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS. The interface follows a strict Linear / Vercel-inspired
minimalist engineering aesthetic: monochrome dark + light palettes, hairline borders,
precise grid alignment, and restrained micro-interactions — no neon glows, no ambient
decor, no template clichés.

## Key Features

- **Multi-language Support** — English by default with a one-click **EN | AZ**
  (Azerbaijani) switcher in the navbar. All visible copy renders through a lightweight
  dictionary in `lib/i18n.ts`; unmapped strings gracefully fall back to English.
- **Theme Switcher** — refined dark mode built on a slate/zinc palette (`#0c0d10`
  background, `#16171d` cards, `#27272a` borders) and a crisp light mode (`#fafafa`
  background, `#09090b` text, `#e4e4e7` borders). Theming is token-driven via CSS
  custom properties, persisted to `localStorage`, with a pre-hydration script to
  prevent flash-of-wrong-theme (FOUC).
- **Education & Credentials** — a dedicated education section with degree titles,
  duration tags, and a verified **View Diploma** link that opens `/diploma.pdf` in a
  new tab.
- **Filterable Showcase** — a project grid with category filtering across
  *AI & Agentic Systems*, *AI Tools & Applications*, and *Machine Learning & Analytics*,
  alongside an "All" view. Cards expose exact tech-stack pills and sharp GitHub /
  Live Demo links.
- **Fully Responsive** — sticky navbar with a subtle `backdrop-blur` glass effect,
  mobile menu, and adaptive grids across all breakpoints.

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, fully static rendering
- [TypeScript](https://www.typescriptlang.org) — strict typing throughout
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling, design-token driven
- [Lucide React](https://lucide.dev) — iconography (custom SVG brand icons for GitHub/LinkedIn)
- Theme & language state — lightweight custom providers (`ThemeProvider`,
  `LanguageProvider`) backed by CSS variables and `localStorage`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Start the development server   |
| `npm run build`  | Create a production build      |
| `npm run start`  | Serve the production build     |
| `npm run lint`   | Lint and check code quality    |

## Project Structure

```
├── app/
│   ├── globals.css        # Design tokens (CSS vars), theming, scrollbar, focus ring
│   ├── layout.tsx         # Fonts, metadata, providers, FOUC guard script
│   └── page.tsx           # Composes all sections in order
├── components/
│   ├── Navbar.tsx         # Fixed glass navbar + theme/lang toggles + socials
│   ├── Hero.tsx           # Status dot, name/title, tagline, CTAs
│   ├── About.tsx          # Editorial split + mono quick-facts table
│   ├── Education.tsx      # Education cards with "View Diploma" links
│   ├── Projects.tsx       # Filterable project grid (client-side)
│   ├── ProjectCard.tsx    # Project cards with tech pills + GitHub/Demo links
│   ├── Capabilities.tsx   # AI competencies grid
│   ├── Contact.tsx        # Single-click mail action + socials
│   ├── Footer.tsx         # Hairline footer with back-to-top
│   ├── ThemeProvider.tsx / ThemeToggle.tsx     # Dark/light switching
│   ├── LanguageProvider.tsx / LanguageToggle.tsx # EN | AZ switching
│   └── icons/             # Brand icons (GitHub, LinkedIn)
├── data/
│   └── portfolio.ts       # ← All editable content lives here
├── lib/
│   └── i18n.ts            # Azerbaijani dictionary + translate helper
├── public/
│   └── diploma.pdf        # Verified diploma asset (education credentialUrl)
└── tailwind.config.ts     # Palette, font stacks, animations
```

## Data Configuration

Every piece of user-facing content is centralized in **`data/portfolio.ts`** — no
component edits required to customize the site.

- **Identity & contact** — name, title, tagline, email, location
- **Socials** — GitHub and LinkedIn URLs
- **Navigation** — navbar labels and anchor links
- **Hero** — status message and call-to-action buttons
- **About** — narrative paragraphs
- **Education** — institutions, degrees, duration tags, optional `credentialUrl`
- **Projects** — title, description, tech stack, GitHub/demo links, category
- **Capabilities** — AI competencies with descriptions and tech tags
- **Skills** — grouped categories and individual skills

### Translating Content

English is the source of truth in `data/portfolio.ts`. Azerbaijani translations live
in the `azContent` dictionary inside `lib/i18n.ts`, keyed by the exact English string.
Add a new key to translate a string; anything unmapped renders in English automatically.

## Deploy

The site is fully static and can be deployed to any host. The cleanest path is Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)