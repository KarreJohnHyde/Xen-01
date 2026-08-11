# XEN-O1 SaaS Upgrade Notes

## Architecture Changes
- Refactored single-page prototype into a proper `react-router-dom` based Multi-Page Application.
- Divided `App.tsx` logic into `Home.tsx` and `ProjectDetail.tsx` pages.
- Moved data to `src/data/projects.ts` and set up standard models.
- Set up a Node + Express backend with `better-sqlite3` to handle lead submissions.

## UI/UX Enhancements
- Migrated all icons from un-managed SVGs to `lucide-react`.
- Replaced hardcoded RGBA strings with proper CSS Custom Properties (e.g. `var(--white-5)`).
- Synced the project filters (Domain, Price, Difficulty) with the URL state using `useSearchParams`.
- Adjusted `<img>` dimensions for optimized rendering and layout stability.
- Disabled custom cursor on touch devices to improve mobile experience.
- Added `@media (prefers-reduced-motion)` for accessibility.

## Next Steps
- Implement Authentication fully.
- Add Admin Dashboard to view leads directly.
- Add an integrated payment gateway.
