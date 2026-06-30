# Static Site Style Guide

## Visual North Star

The site should feel like a quiet holistic doula practice rooted in motherhood, Slavic and nature symbolism, and ritual care. It should be soft, earth-toned, spacious, handmade, and personal. Avoid glossy SaaS styling, loud gradients, heavy shadows, and card-heavy marketing layouts.

## Technology Boundary

Use plain HTML, CSS, and small vanilla JavaScript. Reusable patterns should be expressed with CSS classes and repeated semantic HTML, not React components or a build system.

## Color Tokens

Define these in `assets/css/site.css`:

- `--color-header`: `#d6cec3`
- `--color-nav`: `#ebe2d7`
- `--color-section-warm`: `#f4eee7`
- `--color-page`: `#ffffff`
- `--color-accent`: `#656144`
- `--color-accent-hover`: `#4d4824`
- `--color-text`: `#4f4b43`
- `--color-muted`: `#6f695f`
- `--color-blue-band`: `#6f8796`
- `--color-footer`: `#111111`
- `--color-footer-text`: `#ffffff`

Do not introduce loud pinks, purples, saturated greens, glossy gradients, or modern SaaS blues.

## Typography

- Body and navigation: Mulish if available, then Arial or a system sans-serif fallback.
- Hero titles: white script/display style using a safe cursive fallback.
- Body copy: about 16px desktop, generous line height near 1.8.
- Navigation: small uppercase text, about 12-15px.
- Content headings: modest, not oversized.
- Footer: tiny, about 10-12px.

Avoid negative letter spacing and viewport-scaled font sizes.

## Layout Rhythm

- Use full-width horizontal sections with centered inner containers.
- Keep the main container around 1100-1180px.
- Use warm cream and white/off-white bands.
- Reserve muted blue bands for About quote and qualifications content.
- Keep buttons small and tucked into the composition.
- Do not use nested cards or floating section cards.

## Shared Shell

Desktop header:

- Warm beige social/logo strip.
- Small social links aligned upper right.
- Large centered circular logo/mark.
- Pale beige tab bar below the logo area.
- Tabs are Home, About me, Package, Contact only.

Mobile header:

- Social links remain at top.
- Logo remains centered.
- Desktop tabs collapse behind a centered `MENU` row.
- Menu opens a simple vertical list.

Footer:

- Full-width near-black bar.
- Tiny centered copyright text.
- No columns, newsletter, or extra links.

## Buttons And Links

Use one compact olive CTA style:

- Background `#656144`
- Hover background `#4d4824`
- White uppercase text
- 1px white border
- Radius 0-3px
- Compact padding

Package links and future article links may look like buttons, but should not navigate to unbuilt pages unless a future page exists.

## Imagery And Assets

Do not reuse exact live-site photos, logo files, illustrations, blog images, or text unless the owner confirms permission. Use replacement imagery and original simple illustrations while preserving the calm nature/motherhood/ritual mood.

Image patterns:

- Hero sections use wide scenic or abstract nature imagery with enough darkness for white script text.
- Portrait and symbolic images use circular crops.
- Decorative line art should be monochrome or olive/tan.
- Avoid decorative blobs, glossy gradients, and stock-like business imagery.

## Interactions

Keep interactions quiet:

- Tabs switch panels without page reload.
- Social links open external pages in a new tab.
- Mobile menu toggles open and closed.
- CTA buttons switch to existing panels or mark future content as unavailable.
- Carousel controls cycle lightweight local content.
- Contact form validates name and email, caps message at 2000 characters, and opens a prefilled email to `ula@uladoula.com`.

## Responsive Notes

The rebuild should improve on the reference mobile overflow. At 390px and similar widths:

- Text fits its containers.
- Images scale within the viewport.
- The page has no horizontal scrolling.
- Home, About me, Package, and Contact stack cleanly.

## Page Notes

Home:

- Establishes the visual baseline.
- Hero is dark green and reverent.
- Welcome block pairs circular newborn/motherhood imagery with original intro copy.
- Services band is warm cream with alternating text and simple ritual illustrations.

About me:

- Portrait intro leads.
- Quote and qualifications bands add warmth and authority.
- Carousels are simple and lightweight.

Package:

- Hero follows the Birth keeper package reference: wide pregnancy image mood, soft overlay, and white script title.
- Content is long-form and text-led, with underlined section headings, simple paragraphs, and plain bullet lists.
- The natural birth and belly birth package sections should feel like one continuous package page, with warm cream bands and generous line height.
- Contact CTA switches to the Contact tab.

Contact:

- Form is wide, quiet, and plain.
- Email and phone links are clearly visible.
