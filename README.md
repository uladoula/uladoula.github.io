# Doula Website Template

A professional, responsive 4-page website template for doula services. This template includes a home page, about page, services page, and contact page.

## 📋 Pages Included

1. **index.html** - Home page with hero section, features, and benefits
2. **about.html** - About page with philosophy, certifications, and testimonials
3. **services.html** - Detailed service packages and pricing information
4. **contact.html** - Contact form and FAQ section

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, clean aesthetic with warm color palette
- ✅ Interactive navigation with mobile menu
- ✅ Contact form with validation
- ✅ FAQ accordion functionality
- ✅ Smooth scroll animations
- ✅ SEO-friendly structure
- ✅ Accessible HTML markup

## 🚀 Getting Started

### Quick Start

1. Open `index.html` in your web browser to view the website
2. Customize the content in each HTML file with your information
3. Update colors and styles in `style.css` if desired
4. Add your images to the `assets/images/` folder
5. Deploy to your web hosting service

### Files Structure

```
doula-website-template/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── contact.html        # Contact page
├── style.css           # All styles
├── script.js           # JavaScript functionality
├── assets/
│   ├── images/        # Your images go here
│   ├── icons/         # Icons and favicon
│   └── README.md      # Asset guidelines
└── README.md          # This file
```

## 🎨 Customization Guide

### 1. Update Your Information

**Personal Details:**
- Replace "Birth Support Doula" with your business name
- Add your actual contact information in `contact.html`
- Update service area, phone, and email

**About Page:**
- Add your photo to `assets/images/` and update the image path
- Customize your bio and philosophy
- Update certifications with your actual credentials
- Replace testimonials with real client feedback

**Services Page:**
- Adjust service packages to match your offerings
- Update pricing information
- Modify service descriptions

### 2. Customize Colors

Edit the CSS variables in `style.css` (lines 11-15):

```css
:root {
    --primary-color: #8b7e74;    /* Main brand color */
    --secondary-color: #c4a895;  /* Secondary brand color */
    --accent-color: #d4a574;     /* Accent color */
    --text-dark: #2c2c2c;        /* Dark text */
    --text-light: #666666;       /* Light text */
}
```

### 3. Add Your Logo

Replace "Birth Support Doula" text in the navigation with your logo:

```html
<div class="nav-brand">
    <img src="assets/images/logo.png" alt="Your Business Name">
</div>
```

### 4. Setup Contact Form

The contact form currently displays a success message without sending emails. To make it functional:

**Option 1: Use a form service (Recommended)**
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Google Forms](https://www.google.com/forms/)

**Option 2: Backend integration**
- Connect to your own server-side email handler
- Modify the form submit handler in `script.js`

### 5. Add Social Media Links

Update the social media links in `contact.html`:

```html
<a href="https://facebook.com/yourpage" class="social-link">
<a href="https://instagram.com/yourhandle" class="social-link">
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🌐 Deployment

### Option 1: Netlify (Recommended for beginners)
1. Push your code to GitHub
2. Sign up for [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Deploy with one click

### Option 2: GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be live at `username.github.io/repo-name`

### Option 3: Traditional Web Hosting
1. Upload all files to your hosting via FTP
2. Ensure `index.html` is in the root directory
3. Your site will be live at your domain

## 🔧 Technical Details

- **No build process required** - Pure HTML, CSS, and JavaScript
- **No dependencies** - Works without any frameworks or libraries
- **Browser compatibility** - Works on all modern browsers
- **Lightweight** - Fast loading times

## ✅ SEO Optimization

Each page includes:
- Meta descriptions
- Semantic HTML structure
- Descriptive page titles
- Alt text for images (add your own for actual images)

Consider adding:
- Google Analytics
- Schema.org markup for local business
- Sitemap.xml
- Robots.txt

## 📝 Content Tips

1. **Keep it personal** - Share your story and passion
2. **Use real testimonials** - Get permission from clients
3. **Professional photos** - Invest in quality imagery
4. **Clear CTAs** - Make it easy for clients to contact you
5. **Update regularly** - Keep information current

## 🔒 Privacy & Legal

Remember to add:
- Privacy policy (especially if collecting form data)
- Terms of service
- Cookie consent (if using analytics)
- HIPAA compliance notice if applicable

## 🆘 Support

For website customization help:
- HTML/CSS basics: [MDN Web Docs](https://developer.mozilla.org/)
- Web hosting: Contact your hosting provider
- Design inspiration: [Dribbble](https://dribbble.com/), [Behance](https://www.behance.net/)

## 📄 License

This template is provided as-is for personal and commercial use. Feel free to customize it for your doula practice.

---

**Happy customizing! Wishing you success in your doula practice.** 🤰✨