# Grant Godbehere — Portfolio Site

Personal portfolio site built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 15 (App Router, fully static)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 (CSS-first config via `globals.css`)
- **Fonts**: Geist Sans / Geist Mono via `next/font/google`
- **Animation**: Motion (`motion/react`)
- **Icons**: Lucide React, React Icons

## Project Structure

```
src/
  app/
    lib/data.tsx        # Timeline and project data
    globals.css         # Tailwind config, theme tokens, print styles
    layout.tsx          # Root layout, font loading
    page.tsx            # Home page
    about/              # About page
    projects/           # Projects page
    resume/             # Resume page (HTML + print-to-PDF)
  components/
    Navbar.tsx
    LandingPage.tsx
    AboutMeSection.tsx
    FeaturedProjects.tsx
    ProjectCards.tsx
    ResumeTimeline.tsx
    ResumeDocument.tsx  # Printable resume layout
    PrintButton.tsx
```

## Development

```bash
make install   # Install dependencies
make dev       # Start dev server (Turbopack)
make build     # Production build
```

Or directly:

```bash
npm install
npm run dev
npm run build
```

The dev server runs on [http://localhost:3000](http://localhost:3000) (or next available port).

## Deployment

The site is deployed via **pm2** on a local server. Deployment is manual — push to GitHub, then pull and rebuild on the server.

```bash
make deploy    # Full deploy: pull + install + clean build + pm2 restart
```

Or step by step on the server:

```bash
git pull
npm install                  # only needed when packages changed
rm -rf .next                 # required after package changes to clear stale cache
npm run build
pm2 restart professional-portfolio
```

> **Note**: Always run `rm -rf .next` after `npm install` to avoid stale Turbopack cache errors.

## Print / PDF Resume

The `/resume` page includes a "Download / Print PDF" button that triggers `window.print()`. Print styles in `globals.css` hide the navbar, footer, and non-resume content, producing a clean single-page PDF.
