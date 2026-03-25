# Portfolio Guidelines & Standards

## 1. Tech Stack & Versions
- **Framework:** React 19.1.0 (Vite-based)
- **Language:** TypeScript (Strict mode, no 'any')
- **Styling:** Bootstrap 5 (Grid/Utilities) + Custom CSS
- **State:** Redux Toolkit (@reduxjs/toolkit) for global state (Theme/UI)
- **Routing:** React Router Dom

## 2. Component Philosophy & Organization
- **Feature-Based Structure:** - `src/pages/[PageName]/`: Contains `[PageName].tsx` and `[PageName].css`.
  - `src/components/[ComponentName]/`: Contains `[ComponentName].tsx` and `[ComponentName].css`.
- **Reusability:** Build atomized, functional components. Keep UI and logic separated where possible.
- **Global Styles:** `src/styles/` is reserved strictly for theme variables (`variables.css`), Bootstrap overrides, and global resets.

## 3. Modern Dev Practices
- **AI-Augmented Workflow:** Use AI to accelerate UI component creation, debug complex CSS, and refactor for performance.
- **Clean Code:** Prioritize self-documenting variable names and consistent indentation.
- **Performance:** Ensure fast "Above the Fold" loading. Use lazy loading for non-essential sections.

## 4. Theme & Visual Identity
- **Theming:** Use the Redux-based `ThemeProvider`. **Never** hardcode hex codes or colors; always use the theme-aware CSS variables.
- **Icons:** Currently using `@iconify/react`. We are exploring more cohesive options (Lucide/Phosphor) for a more professional developer aesthetic.

## 5. Project Source of Truth
- **Data Integrity:** `src/components/projects.ts` is the single source of truth for all projects.
- **Highlighted Projects:** EZ Track, AstroSkill, and DevHunt should be featured with high-quality descriptions and working links.