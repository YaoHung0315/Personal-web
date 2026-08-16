# Yao-Hung Tsai — Personal Website

A clean, minimal academic portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

## Pages

- **Home** — About me, Education, Work Experience, Publications, Conferences, Honors & Awards
- **Projects** — Research projects (with linked publications), work projects, and side projects
- **CV** — Inline PDF viewer + download

Conferences and Honors are each split into **Academic** and **Professional** groups.

## Editing content

All text/data lives in one file: [`src/data/content.ts`](src/data/content.ts).
Edit the `profile`, `education`, `workExperience`, `publications`, `conferenceGroups`,
`honorGroups`, and `projects` exports there — no need to touch the page components.

Every card on Home shares one layout: the left column holds the entry (title, subtitle,
supporting line) and the right column holds location above date. Keep new entries to that
shape so the page stays even.

Images, the CV, and research PDFs/videos live in [`public/`](public/). To swap your
photo or CV, replace `public/profile-photo.jpg` or `public/file/CV.pdf`.

## Develop

```bash
npm install        # first time (if cache errors: npm install --cache /tmp/npm-cache)
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks then outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy to GitHub Pages

The site is configured for `https://yaohung0315.github.io/Personal-web/`
(see `base` in [`vite.config.ts`](vite.config.ts) and `homepage` in `package.json`).

```bash
npm run deploy     # builds and pushes dist/ to the gh-pages branch
```

Then in the GitHub repo: **Settings → Pages → Source: `gh-pages` branch**.

> Routing uses `HashRouter`, so deep links like `/#/projects` work on GitHub Pages
> without extra 404 redirect configuration.
