# aesthetic.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Create React App (React 17) and deployed to GitHub Pages at `jhin-source.github.io/portfolio`.

## Commands

- `npm start` — Run dev server (localhost:3000)
- `npm run build` — Production build
- `npm test` — Run tests (Jest, interactive watch mode)
- `npm run deploy` — Build and deploy to GitHub Pages via gh-pages

## Architecture

Single-page React app using React Router v5 (`react-router-dom` with `Switch`/`Route`) for client-side routing. Pages are lazy-loaded via `React.lazy`/`Suspense`.

**Routes** (defined in `src/App.js`): `/` (Home), `/about`, `/resume`, `/projects`, `/contact`

**Key layout:** `Header` and `Footer` wrap all routes and are always visible. Each page is a component under `src/components/<PageName>/`.

**Shared components:**

- `src/components/Section/` — Reusable section layout with styled button
- `src/components/Cards/` — Card grid (`Cards.js`) with individual `CardItem.js`, used on the Projects page
- `src/components/Header/MenuItems.js` — Navigation link definitions

**Styling:** Per-component CSS files alongside each component. Uses Bootstrap 5 + react-bootstrap. Particle effects via `react-particles-js`/`tsparticles`. Animations via `react-spring`. Typing effect via `react-typed`.

**Static assets:** Images in `src/assets/`, resume PDF in `src/components/Resume/Resume.pdf`.
