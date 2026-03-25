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
- **Projects Page**: The page renders a grid of "Featured Products" driven by data from `src/components/projects.ts`. Currently, there are 3 highlighted projects: *AstroSkill*, *Integrity Renovations*, and *Funky Finds*.

## What is Missing / Next Steps
- **Project Links & Media**: The highlighted projects in `projects.ts` currently have empty strings for `videoUrl`, `link`, and `githubUrl`. These need to be populated with real URLs.
- **Other Projects**: The "Other Projects" section on the Projects page is currently empty (displays a "Still building out this section" message). More projects need to be added to the data file without the `isHighlight` flag to populate this section.
- **Page Content Verification**: The `About`, `Contact`, and `Resume` pages have been created and contain structural code, but their specific text content, forms, or downloadable resume links should be reviewed and finalized to ensure they are complete and accurate.
- **Headshot Image**: The Home page references `/images/headshot.jpg`. Ensure this image exists in the `public/images/` directory and is optimized for web.

## Completed Status
- **Bootstrap to Tailwind Migration**: Completed
- **Home Page Proportions**: Completed
- **4-Theme "Design Personality" Sprint**: Completed
