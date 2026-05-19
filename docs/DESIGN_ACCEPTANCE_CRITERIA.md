# Design Acceptance Criteria (V5)

To pass Gate C, the V5 tool and demos must meet these specific criteria:

## 1. Structural Identity
- [ ] **No Grid Sameness:** Sections must not all follow the "Header → Grid of 3 Cards" pattern.
- [ ] **Asymmetry:** At least 2 major sections must use asymmetric or offset layout compositions.
- [ ] **Intent-First:** The UI must respond to the user's intent selection (Decision Dock).

## 2. Visual Quality
- [ ] **Niche Native:** The Tattoo demo must feel "dark/ink," the Bakery demo must feel "warm/menu," and the Car Detailing demo must feel "precise/lab."
- [ ] **Tactile Depth:** No flat, plastic UI. Use layering, subtle shadows, and glassmorphism.
- [ ] **Typography Scale:** Display text must be at least 4x larger than body text.

## 3. Conversion
- [ ] **5-Second Rule:** Location, Niche, and primary CTA must be visible without scrolling.
- [ ] **Information Scent:** Every button must describe the *outcome* (e.g., "See Cake Menu" not "Click Here").
- [ ] **Objection Handling:** Trust signals (sterility, hygiene, reviews) must be adjacent to CTAs.

## 4. Engineering
- [ ] **Mobile-First:** Layout must be perfect at 360px (Android Small).
- [ ] **No Reuse:** Zero V1/V2/V4 components in the active V5 render path.
