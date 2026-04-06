# Project Context

## Project Structure
The project is a standard React single-page application built with **Vite** and **TypeScript**.
- `src/components/`: Contains shared UI components like `Navbar`, `Footer`, `ThemeProvider`, and project data (`projects.ts`).
- `src/pages/`: Contains the main route views: `Home`, `About`, `Projects`, `Contact`, and `Resume`.
- `src/store/`: Contains Redux state management, notably a `themeSlice` to handle UI themes.
- `src/styles/`: Contains custom CSS files for components and pages (e.g., `navbar.css`, `home.css`).

## Main Dependencies
Based on `package.json`, the main dependencies powering the application are:
- **Core**: `react` (^19.1.0), `react-dom`, `react-router-dom` (for routing).
- **State Management**: `@reduxjs/toolkit`, `react-redux` (used primarily for theme switching).
- **Styling & UI**: `bootstrap` (likely for grid/utility classes alongside custom CSS).
- **Icons**: `@iconify/react`, `react-icons`, `iconify`.
- **Tooling**: `vite`, `typescript`, `eslint`.

## Current State of the UI
- **Routing & Layout**: The main layout is defined in `App.tsx` with a `Navbar`, main content area `<Routes>`, and a `Footer`.
- **Theming System**: A sophisticated theming system is in place via Redux and `ThemeProvider`. It supports four Design Personalities: `seniorEngineer`, `ruleBreaker`, `paperJournal`, and `hacker`. A "Change Design" dropdown in the Navbar allows users to switch themes dynamically.
- **Home Page**: Complete with a hero section, introduction, an array of skill icons (React, TypeScript, Firebase, Tailwind, etc.), and call-to-action buttons navigating to other pages.
- **Projects Page**: The page is divided into "Featured Projects" and "Other Projects", driven by data from `src/components/projects/projects.ts`. It parses an array of projects and splits them based on an `isFeatured` boolean flag. Featured projects display in a large carousel card format, while other projects display in a standardized vertical archive list of horizontal cards.

## What is Missing / Next Steps
- **Project Links & Media**: Compressed video assets are synced and linked. Monitor active projects for any final content updates.
- **Production Monitoring**: Evaluate real-world site performance and error metrics upon live launch.

## Completed Status
- **Bootstrap to Tailwind Migration**: Completed
- **Home Page Proportions**: Completed
- **4-Theme "Design Personality" Sprint**: Completed
- **Contact Form Validation & EmailJS Integration**: Completed
- **Site-Wide UX/A11y Audit & Tech README Generation**: Completed
- **Status: Site Ready for Deployment**
