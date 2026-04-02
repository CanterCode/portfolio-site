# CanterCode Portfolio Architecture

> **Built to demonstrate operational resilience, frontend architecture, and the ability to ship production-ready software in high-pressure environments.**

Welcome to the technical documentation for my digital portfolio. This repository is more than just a typical digital resume; it is a live demonstration of advanced state management, component architecture, and modern React development principles.

## The "Why": Stateful UI & Design Personalities

A static portfolio fails to convey technical depth. To visually represent my capability to manage global application state and dynamically render UI components, this portfolio implements a **Redux-driven theme engine**. 

Instead of a simple light/dark toggle, the site supports four entirely distinct "Design Personalities":
1. **Senior Engineer**: High-contrast, accessibility-first, modern corporate.
2. **Rule Breaker**: Neo-brutalist, aggressive shadows, vibrant blocking.
3. **Paper Journal**: Warm, organic, low-strain reading experience.
4. **Hacker**: Terminal CRT aesthetic, neon-on-black, pure monospace.

This architecture requires components to flexibly adapt to massive shifts in CSS variables, enforcing rigorous best practices such as decoupling logic from specific styling implementations.

## The Tech Stack

This project was engineered for performance, strict type safety, and immediate feedback loops:

- **React & TypeScript**: Providing a tightly-coupled, type-safe, and component-driven UI.
- **Redux Toolkit**: Centralized, predictable global state container, governing the theme engine and persisting user preferences across sessions.
- **Tailwind CSS**: Utility-first CSS framework enabling highly customizable, performance-driven styling without the bloat of monolithic external stylesheets. 
- **EmailJS**: Serverless architecture for instantaneous lead generation and contact form submissions.
- **Framer Motion**: Delivering intentional, non-distracting micro-interactions to elevate perceived application performance.

## Engineering Highlights

### State Handling & Context Management
- **`useSelector` & `useDispatch`**: Driving the site-wide contextual themes. Component hydration is seamlessly bridged, ensuring no flickering on dynamic shifts.
- **`useRef` & Serverless Forms**: Direct DOM manipulation strictly reserved for EmailJS form integrations to maximize rendering efficiency.
- **Custom Hooks**: Implementation of complex, performance-first wrappers (e.g., handling carousel media using Embla).

### Responsive & Accessible by Design (a11y)
Conducted comprehensive site-wide audits to ensure a logical semantic tree (`H1` ➔ `H2` ➔ `H3`), pervasive global focus-states (`:focus-visible`), and accessible contrast ratios—specifically validating difficult palettes like the neon-hacker visual scheme.

## AI-Augmented Workflow

This site was built utilizing advanced AI collaboration protocols (Cursor, Claude, and Gemini Antigravity). Employing an AI-augmented process allowed for:
- Accelerated, rigorous iteration loops.
- Intelligent code refactoring and context-aware error handling.
- Maximum operational velocity without sacrificing code integrity.

---
_Designed and engineered in Dallas, TX. Open to high-impact roles and challenging problems._
