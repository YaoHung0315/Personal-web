# Yao-Hung Tsai — Personal Website

A clean, minimal academic portfolio built with **Vite + React + TypeScript + Tailwind CSS**.

## Pages

- **Home** — About me, Education, Experience, Skills, Publications, Honors & Awards
- **Projects** — Research projects (with linked publications & conference talks) and side projects
- **CV** — Inline PDF viewer + download

## Editing content

All text/data lives in one file: [`src/data/content.ts`](src/data/content.ts).
Edit the `profile`, `education`, `experience`, `skills`, `publications`, `honors`, and
`projects` objects there — no need to touch the page components.

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
