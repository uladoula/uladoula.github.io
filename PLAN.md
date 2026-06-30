# Static Mokosh Doula Rebuild Plan

## Goal

Rebuild the public Mokosh Doula reference as a simple static website. Use one HTML page, one main CSS file, one small JavaScript file, and local assets. No React, Vite, router, package scaffold, component framework, or build pipeline.

## Architecture

The site is a single-page tabbed experience:

- `index.html` contains all four current tab sections in semantic HTML.
- `assets/css/site.css` contains design tokens, responsive layout, buttons, forms, and reusable section patterns.
- `assets/js/site.js` contains tab switching, the mobile menu, simple carousel controls, and contact form validation/mail handoff.
- `assets/img/` contains replacement or explicitly approved visual assets.
- `reference/` remains documentation only: screenshots and `site-map.json`.

Navigation switches visible tab panels without a page reload. The visible tab set for this phase is only Home, About me, Package, and Contact.

Investment and Journal are preliminary future pages only. Do not build or expose them as active tabs in this phase.

## Skills For Future Agents

- Use `superpowers:using-superpowers` only if required by the active agent environment.
- Use `imagegen` only if the owner requests generated replacement imagery.
- Do not use testing-specific skills, Playwright, browser automation, React-specific skills, or app-builder scaffolding for this project unless the owner explicitly changes direction.

## Task 1: Home + Shared Shell

Build the static foundation and Home page.

Files:

- Create or modify `index.html`.
- Create or modify `assets/css/site.css`.
- Create or modify `assets/js/site.js`.
- Add local replacement assets under `assets/img/`.

Include:

- Shared header with social links, centered logo area, desktop tab bar, and mobile `MENU` toggle.
- Shared footer.
- Base CSS tokens from `STYLE.md`.
- Home hero, welcome section, services band, and contact CTA section.
- Quiet olive button/link styling.
- Responsive mobile layout with no horizontal overflow.

Manual review:

- Open `index.html` directly in a browser.
- Compare desktop and mobile against `reference/screenshots/home-desktop-full.png` and `reference/screenshots/home-mobile.png`.
- Confirm Home, About me, Package, and Contact tabs switch sections.
- Confirm social links point to the provided Facebook and Instagram URLs.

## Task 2: About Me

Add the About me tab section to the same static page.

Include:

- Intro portrait/text layout.
- Biography content.
- Quote band.
- Philosophy/icon section.
- Qualifications band.
- Lightweight image carousel.
- Lightweight text/fun-fact carousel.
- Birth story CTA as a future placeholder link, not a built secondary page.

Manual review:

- Compare desktop against `reference/screenshots/about-desktop.png`.
- Confirm mobile stacking works.
- Confirm carousel controls update content without breaking layout.

## Task 3: Package

Replace the old Offerings tab with a Package tab modeled on the Birth keeper package reference page.

Include:

- Hero banner with a soft belly/pregnancy image mood and script title.
- Intro statement for birth support.
- Natural birth package section with antenatal session focus, preparation topics, ongoing support, on-call support, birth attendance, follow-up, ceremony, postnatal support, and optional birth pool rental.
- Belly birth / C-section package section with caesarean preparation, planning, emotional support, decision-making support, postnatal follow-ups, recovery support, ceremony, and postnatal phone/email support.
- Contact CTA that switches to the Contact tab.

Manual review:

- Compare desktop and mobile against `reference/screenshots/birth-keeper-package-desktop-full.png` and `reference/screenshots/birth-keeper-package-mobile-full.png`.
- Confirm Package tab replaces Offerings in desktop and mobile navigation.
- Confirm Contact CTA opens the Contact section.

## Task 4: Contact

Add the Contact tab section.

Include:

- Intro with circular illustration, email, and phone links.
- Static contact form with name, email, and message.
- Required name and email validation.
- Message length cap of 2000 characters.
- Mail app handoff to `ula@uladoula.com` on valid submit.

Manual review:

- Compare desktop against `reference/screenshots/contact-desktop.png`.
- Confirm `mailto:ula@uladoula.com`.
- Confirm `tel:+17202435510`.
- Confirm validation works and valid submit opens a prefilled email.
- Final pass across all four tabs at desktop and mobile widths.

## Future Notes

Investment and Journal may be implemented later as separate tabs or additional panels. The captured reference screenshots and `reference/site-map.json` may be used for orientation, labels, and link inventory, but do not copy exact live-site text or assets without owner permission.
