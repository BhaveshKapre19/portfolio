# Bhavesh Kapre Portfolio

React + Vite portfolio configured for GitHub Pages deployment at:

https://bhaveshkapre19.github.io/portfolio/

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The Vite `base` option is set to `/portfolio/` so built assets load correctly from this repository's GitHub Pages URL.

## Deploy With GitHub Actions

This repository includes `.github/workflows/deploy.yml`. On every push to `main`, GitHub Actions will:

1. Install dependencies with `npm ci`
2. Build the app with `npm run build`
3. Publish the `dist` folder to GitHub Pages

In the GitHub repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

## Manual Deploy

You can also publish manually with:

```bash
npm run deploy
```

That command builds the app and publishes `dist` to the `gh-pages` branch using the `gh-pages` package.
