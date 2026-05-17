# Premium Same-Day Mini Website Template

A mobile-first, high-conversion landing page template system designed for local businesses in Pune. Built for speed, premium aesthetics, and easy customization.

## Features

- 🚀 **Lightning Fast:** Built with React + Vite.
- 🎨 **Premium Design:** Tailwind CSS with custom premium design tokens.
- 🎬 **Smooth Animations:** Framer Motion for section fades, hover effects, and staggered lists.
- 📱 **Mobile-First:** Optimized for Instagram browsers and mobile users.
- ⚙️ **Config Driven:** Change the entire website by editing a single JSON-like file.
- 💬 **WhatsApp Integrated:** Sticky CTA for direct lead generation.

## Getting Started

### 1. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Customizing for a Client

Open `src/config.js` and edit the `BUSINESS_DATA` object. You can:
- Update business name, niche, and tagline.
- Change colors (primary, secondary, accent).
- Update WhatsApp number (use international format without `+`).
- Add/Remove services, gallery images, and testimonials.
- Update FAQ and process steps.

### 3. Adding New Images
Place images in `public/assets/` or use high-quality Unsplash/Direct URLs in the config.

## Deployment

### Netlify / Vercel
1. Push this code to a GitHub repository.
2. Connect your repo to Netlify or Vercel.
3. Use the following build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

### GitHub Pages
1. Install `gh-pages` package: `npm install gh-pages --save-dev`.
2. Add `homepage` to `package.json`.
3. Add deploy scripts to `package.json`.
4. Run `npm run deploy`.

## Pricing Strategy (Pune Market)
This template is designed to be sold for **₹1,999 – ₹3,999**.
- **₹1,999:** Standard template with client-provided content.
- **₹3,999:** Includes copywriting, image optimization, and 1 year of hosting/domain setup.
