# Khayal — Developer Portfolio

A monochrome, engineering-focused developer portfolio built with Next.js 14 (App Router), Tailwind CSS, and Lucide React icons. Sharp hairlines, precise grid alignment, restrained micro-interactions, and a strict dark palette inspired by Linear and Vercel.

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
│   ├── globals.css        # Design tokens, typography, focus ring, scrollbar
│   ├── layout.tsx         # Metadata + fonts
│   └── page.tsx           # Composes all sections
├── components/
│   ├── Navbar.tsx         # Fixed hairline navigation
│   ├── Hero.tsx           # Status dot, primary title, actions
│   ├── About.tsx          # Editorial split with mono quick facts
│   ├── Projects.tsx       # Filterable project grid (client-side)
│   ├── ProjectCard.tsx    # Project card with tech pills + links
│   ├── Capabilities.tsx   # AI competencies grid
│   ├── Contact.tsx        # Single-click mail action + socials
│   ├── Footer.tsx         # Hairline footer
│   └── icons/             # Brand icons (GitHub, LinkedIn)
├── data/
│   └── portfolio.ts       # ← All editable content lives here
└── tailwind.config.ts     # Monochrome palette, font stacks, animations
```

## Customization

Everything user-facing lives in a single file: `data/portfolio.ts`.

- **Identity & contact** — name, title, tagline, email, location
- **Socials** — GitHub and LinkedIn URLs
- **Navigation** — labels and anchor links
- **Projects** — title, description, tech stack, GitHub/demo links, category
- **Capabilities** — AI competencies with descriptions and tech tags
- **Skills** — grouped categories and individual skills

Edit the file and the site updates instantly — no component changes required.

## Deploy

The site is fully static and can be deployed to any host. The cleanest path is Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)