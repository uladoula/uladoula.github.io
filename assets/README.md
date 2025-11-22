# Assets Folder

This folder contains static assets for the doula website.

## Structure

- **images/** - Store your images here (photos, backgrounds, etc.)
- **icons/** - Store icon files and favicon here

## Recommended Images to Add

1. **Hero/Header Images**
   - Background image for hero section
   - Professional headshot for About page

2. **Service Images** (optional)
   - Images representing different services
   - Testimonial photos (with permission)

3. **Icons**
   - Favicon (favicon.ico)
   - Apple touch icon
   - Social media icons (if not using font icons)

## Image Guidelines

- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Optimize images for web (compress to reduce file size)
- **Dimensions**:
  - Hero images: 1920x1080px or similar
  - Profile photo: 800x800px minimum
  - Service images: 600x400px
- **Alt Text**: Always add descriptive alt text in HTML

## Usage

To use an image in your HTML:

```html
<img src="assets/images/your-image.jpg" alt="Description">
```

For CSS backgrounds:

```css
background-image: url('../assets/images/your-image.jpg');
```
