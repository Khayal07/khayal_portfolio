# Khayal — Developer Portfolio

A modern, dark-mode developer portfolio built with Next.js 14 (App Router), Tailwind CSS, and Lucide React icons. Clean glassmorphism cards, ambient glow accents, and smooth hover transitions throughout.

## Tech Stack

- [Next.js 14](https://nextjs.org) — App Router, static rendering
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling with a custom dark theme
- [Lucide React](https://lucide.dev) — iconography
- TypeScript

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
│   ├── globals.css        # Theme tokens, glass utilities, scrollbar
│   ├── layout.tsx         # Metadata + fonts
│   └── page.tsx           # Composes all sections
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic navigation
│   ├── Hero.tsx           # Status badge, CTAs, terminal card
│   ├── About.tsx          # Narrative + quick facts
│   ├── Projects.tsx       # Filterable project grid (client-side)
│   ├── ProjectCard.tsx    # Project card with tech tags + links
│   ├── Skills.tsx         # Skill category grids
│   ├── Contact.tsx        # Email card + mailto-composer form
│   ├── Footer.tsx         # Social links + back-to-top
│   └── icons/             # Brand icons (GitHub, LinkedIn)
├── data/
│   └── portfolio.ts       # ← All editable content lives here
└── tailwind.config.ts     # Dark palette, glow shadows, animations
```

## Customization

Everything user-facing lives in a single file: `data/portfolio.ts`.

- **Identity & contact** — name, title, tagline, email, location
- **Socials** — GitHub and LinkedIn URLs
- **Navigation** — labels and anchor links
- **Projects** — title, description, tech stack, GitHub/demo links, category
- **Skills** — grouped categories and individual skills

Edit the file and the site updates instantly — no component changes required.

## Deploy

The site is fully static and can be deployed to any host. The cleanest path is Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)