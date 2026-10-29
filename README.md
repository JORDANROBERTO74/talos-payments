# Talos

A payments-infrastructure marketing site: one route, fourteen sections plus the footer, built with Next.js 14, TypeScript, Tailwind CSS and shadcn/ui primitives.

Live: <https://talos-payments.vercel.app>

![Talos hero: a large Sora headline over a dark teal field, with a checkout card and an available-balance card floating beside it](docs/screenshot.webp)

## What it is

A single page (`/`) that tells a fictional financial platform's story: hero with a checkout card stack, customer marquee, product cards, global payments, billing and pricing, platforms, issuing, global scale, use-case carousel, image-led enterprise cases, startup program, developer API, integrations bento, closing CTA and footer.

It is a front-end demo. There is no backend, no real payments, no authentication and no CMS; every form and link is a placeholder. The four enterprise stories, client names and metrics are invented.

## Why this instead of a landing template

- **A warm, premium system.** Ink `#0a1f2c`, sand `#fbf7ef`, teal `#0e7c6b` and amber `#f2b84b` on a 24 px radius scale, with soft shadows, hairline borders and rounded surfaces.
- **Sora for display, Inter for reading.** Both self-hosted at build time through `next/font`, with a size jump reserved for section openers.
- **One visual device per band.** A card stack in the hero, a marquee for logos, a dark code panel for platforms, a real pricing table, a scroll-snap carousel for use cases and a bento grid for integrations. No section repeats another's layout.
- **Section-level components.** `landing/block.tsx` provides `Shell`, `BlockHead` and `ArrowLink`; each band is an isolated component with its own copy.

## Quick start

Requirements: Node.js 18.17 or newer and npm.

```bash
git clone https://github.com/JORDANROBERTO74/talos-payments.git
cd talos-payments
npm install
npm run dev
```

Open <http://localhost:3000>.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type check without emitting |

## Theming

`tailwind.config.ts` holds the brand scale (`ink`, `sand`, `teal`, `amber`), radii, shadows and the marquee/float keyframes. `src/app/globals.css` holds the shadcn/ui variables plus the `.shell`, `.kicker`, `.arc-rings`, `.fade-x` and reduced-motion utilities.

To rebrand: change the tokens in `tailwind.config.ts`, the Sora/Inter pair in `src/app/layout.tsx`, the wordmark in `src/components/brand-wordmark.tsx` and the icon in `src/app/icon.svg`. Sections use tokens; a few inline SVG strokes and the code panels keep literal colours.

## Project structure

```text
src/
  app/                 App Router entry, metadata, global styles, icon
  components/
    brand-wordmark.tsx Wordmark and mark used by the nav and footer
    navigation.tsx     Fixed nav with mobile sheet and section anchors
    landing/           One file per section plus block.tsx primitives
    commons/           Legacy payment marks and client logos, no longer rendered
    ui/                shadcn/ui primitives
  lib/                 Helpers and unused dashboard hooks
public/images/         Enterprise case photography
docs/                  README screenshot
```

## Deployment

Deployed on Vercel from `main`; the production domain is assigned by the project name.

## Status and scope

`npm run lint`, `npx tsc --noEmit` and `npm run build` pass, with a visual pass at 1440 px and 390 px. Out of scope: real payment flows, analytics, i18n, a light/dark theme switch and the unused marks in `src/components/commons`.

## License

MIT. See [LICENSE](LICENSE).
