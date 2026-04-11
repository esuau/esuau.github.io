# Copilot instructions

## Commands
- Build/test/lint: none are defined in this repository snapshot.
- Deployment: `.github/workflows/static.yml` publishes the repository root to GitHub Pages on pushes to `main`.

## Architecture
- This is a dependency-free static personal site.
- `index.html` contains the full page structure, metadata, and content.
- `styles.css` owns layout, typography, responsive spacing, badges, buttons, and social icons.
- `assets/` holds the profile images and SVG icons used by the page.
- The site is deployed from the repository root, so every file added there must be safe to publish as static content.

## Conventions
- Keep changes in plain HTML and CSS; do not introduce a framework or build step unless explicitly requested.
- Use relative paths for local assets (`styles.css`, `favicon.ico`, `assets/...`).
- Preserve the existing `<picture>` pattern for the profile image and the WebP small/full asset split.
- External links should keep `target="_blank"` and `rel="noopener noreferrer"`.
- Use `aria-label` for icon-only or otherwise ambiguous links.
- Add new visual rules in `styles.css` and follow the existing class names (`card`, `title`, `subtitle`, `section-title`, `badge`, `button`, `social-icon`).
- Keep responsive spacing aligned with the existing media-query breakpoints at 500px, 800px, 1200px, and 2000px.
- Update head metadata deliberately when changing the page identity or SEO content (`title`, `description`, `keywords`, verification tag, favicon).
