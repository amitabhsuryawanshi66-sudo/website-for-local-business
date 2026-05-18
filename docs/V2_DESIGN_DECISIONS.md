# V2 Design Decisions

## The Shift from V1 to V2
V1 was a functional MVP. V2 is a **Premium Design Asset**.

### What V1 Lacked:
- **Visual Tension:** Layouts were safe and centered, making them feel like generic templates.
- **Micro-Detail:** Motion was present but lacked the "weight" and sequencing seen in high-end design engineering.
- **Mobile Sophistication:** Spacing was consistent but didn't take full advantage of "Android-first" native feelings.

### What V2 Changes:
1.  **Editorial Layouts:** We've moved away from standard grids to offset, overlapping, and asymmetric compositions. This creates a "Boutique Studio" feel.
2.  **Spring-Based Interactions:** Switched from simple durations to physics-based `framer-motion` spring values for a more tactile, "clicky" feel.
3.  **Pro Max Design Tokens:** Established a rigid design system for rounding (3rem), glassmorphism, and depth that separates the site from cheap "AI-generated" landing pages.
4.  **Bento Portfolio:** The gallery is now a sophisticated bento grid, which is significantly more "Instagrammable" than a standard grid.
5.  **WhatsApp "Intent" Links:** WhatsApp CTAs are now context-aware, ensuring the prefilled message matches the specific package the user was viewing.

### Visual Direction: Editorial Boutique
We chose this direction because Pune's premium businesses (Bridal, Photography, Gourmet Bakery) rely on **Visual Authority**.
- **Typography:** Massive, bold headings (Inter Tight) contrasted with very clean, spacious body copy.
- **Color:** Sophisticated palettes with "vibe-based" accents rather than corporate primary colors.
- **Space:** Intentionally using "active whitespace" to guide the user's eye toward conversion points.

### Reusability
V2 components are built to be highly resilient. Whether it's a "Tattoo Artist" or a "Luxury PG," the editorial structure scales by simply swapping images and color tokens in `src/data/clientConfig.js`.
