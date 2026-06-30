# AGENTS.md

## Project

Project name: `ula-doula2`

Goal: rebuild the public `mokoshdoula.com` site as a simple static tabbed website. The current implementation phase covers four tabs only: Home, About me, Package, and Contact.

## Reference Source

Live reference: `https://mokoshdoula.com/`

Captured on: 2026-06-09

Local reference bundle:

- `reference/screenshots/home-desktop-full.png`
- `reference/screenshots/home-mobile.png`
- `reference/screenshots/about-desktop.png`
- `reference/screenshots/offerings-desktop.png`
- `reference/screenshots/birth-keeper-package-desktop.png`
- `reference/screenshots/birth-keeper-package-mobile.png`
- `reference/screenshots/birth-keeper-package-desktop-full.png`
- `reference/screenshots/birth-keeper-package-mobile-full.png`
- `reference/screenshots/investment-desktop.png`
- `reference/screenshots/journal-desktop.png`
- `reference/screenshots/contact-desktop.png`
- `reference/site-map.json`

Use screenshots as the main visual map. Use the JSON only for page inventory, labels, links, image URLs, and short content orientation.

## Technology Direction

Implement with plain HTML, CSS, and small vanilla JavaScript.

Required implementation shape:

- `index.html`
- `assets/css/site.css`
- `assets/js/site.js`
- `assets/img/`

Do not introduce React, Vite, Next.js, a package scaffold, client router, component framework, dependency installation, or a build pipeline unless the project owner explicitly changes direction.

## Copyright And Asset Handling

Treat the current site text, photos, illustrations, logo, and blog content as reference material unless the project owner confirms they have permission to reuse them. Implementation can use the same structure, layout, interaction behavior, color system, and component architecture. Exact copy, exact photos, and exact logo files should only be used when permission is confirmed.

If permission is not confirmed, build with equivalent original copy and replacement imagery while preserving the calm doula, motherhood, nature, and ritual mood.

## Skills To Use

Use these skills when the task matches:

- `superpowers:using-superpowers`: start-of-turn skill workflow.
- `imagegen`: only if creating replacement bitmap imagery.

Do not use testing-specific skills, Playwright, browser automation, React-specific skills, or `build-web-apps:frontend-app-builder` for this project unless the owner explicitly changes direction. They are more machinery than this simple static site needs.

## Working Agreement For Future Agents

1. Read `STYLE.md` before writing UI code.
2. Read `PLAN.md` before choosing the next task.
3. Build tab by tab in this order: Home, About me, Package, Contact.
4. The first task includes header, footer, tab bar, mobile menu, base CSS, and JavaScript.
5. Keep styling tokenized in `assets/css/site.css`.
6. Prefer semantic HTML for nav, buttons, forms, article-like content, and contact links.
7. Keep JavaScript small and behavior-focused.
8. Avoid exact copied text, exact photos, and exact logo files unless reuse permission is confirmed.
9. Keep the visual mood quiet, spacious, warm, maternal, earth-connected, and handmade.
10. Review every implemented tab manually at desktop and mobile widths before moving on.

## Current Tabs

- Home: landing page with hero, welcome block, services, connect CTA.
- About me: personal biography page with portrait, quote band, qualification band, image carousel, text carousel.
- Package: birth keeper package detail page with natural birth and belly birth / C-section sections, package inclusions, and contact CTA.
- Contact: contact information and form page.

## Preliminary Future Tabs

Document only for now; do not build or expose as active tabs:

- Investment
- Journal

Secondary routes discovered from the reference are future placeholders only:

- `/postpartum-package/`
- `/closing-the-bones-ceremony/`
- `/mother-blessing/`
- `/placenta-burial-ceremony/`
- `/first-moon-ceremony/`
- `/what-is-a-doula/`
- `/my-pregnancy-and-birth-story/`

## Shared Elements

Header:

- Warm beige social area at top.
- Facebook and Instagram links at upper right.
- Centered circular logo-like mark.
- Pale beige desktop tab bar.
- Mobile `MENU` toggle with vertical menu.

Footer:

- Full-width near-black bar.
- Very small centered copyright text.

Buttons:

- Small rectangular olive buttons.
- White uppercase text.
- Minimal radius.
- Hover darkens to deeper olive-brown.

Contact:

- Email link: `mailto:ula@uladoula.com`
- Phone link: `tel:+17202435510`
- Form fields: required name, required valid email, message up to 2000 characters.
- Submit validates locally, then opens a prefilled email to `ula@uladoula.com` with the sender details and message. A real backend is required for silent server-side delivery.
