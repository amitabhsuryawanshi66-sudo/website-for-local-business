# Skill Stack Operating System (V2)

This document defines the permanent design and engineering standards for this repository. All future tasks, client customizations, and feature additions must adhere to these principles.

## 1. Emil Kowalski: Design Engineering & Motion
- **Natural & Inevitable:** Motion must feel like a logical extension of the UI. Avoid random animations.
- **Professional Easing:** Use `[0.16, 1, 0.3, 1]` for reveals and `type: "spring"` for physical micro-interactions (press/tap).
- **Sequencing:** Always stagger children. The UI should "unfold" logically (Badge -> Headline -> Subtext -> CTA).
- **Reduced Motion:** Mandatory `useReducedMotion` support to ensure accessibility and performance.
- **Attention Guidance:** Use motion to highlight key conversion points (e.g., WhatsApp button breathing).

## 2. Impeccable Polish Checklist
- **Typography:** Contrast font sizes aggressively. Tighten tracking on large headings.
- **Spacing:** Use fluid variables (`section-py`, `container-px`). Avoid "hard-coded" padding values.
- **Hierarchy:** Immediate visual distinction between Primary CTA, Secondary CTA, and body text.
- **Consistency:** Cards must share identical radius (3rem), border weights, and shadow tokens.
- **Tap Targets:** Minimum 48px x 48px for every mobile interaction.

## 3. Taste Skill: Anti-Generic Rules
- **Avoid Centered SaaS Tropes:** Use asymmetric compositions and editorial-style visual tension.
- **Anti-AI Grids:** Break the "3-column icon box" pattern. Use bento grids, overlapping elements, or varied card scales.
- **Local Brand Feel:** The design must feel "boutique" and "premium Pune," not "Global Tech Startup."
- **Tactile UI:** Use subtle glassmorphism and depth rather than flat material design.

## 4. UI UX Pro Max: Design System
- **Design Tokens:** All core styles must be derived from CSS variables (radius, shadow, primary, accent).
- **Conversion Flow:** The "WhatsApp Enquiry" must be the inevitable conclusion of every section.
- **Trust Hierarchy:** Reviews and "Pune heritage" badges must be placed strategically to reduce friction.

## 5. 21st.dev: Component Workflow
- For major sections, evaluate three directions:
    1. **Minimal Luxury** (High whitespace, thin lines)
    2. **Bold Instagram Brand** (Max typography, vibrant)
    3. **Editorial Boutique** (Offset layouts, storytelling)
- **V2 Master Direction:** Implementing the **Editorial Boutique** style as it offers the highest perceived value for local service businesses.

## 6. Android-First Mobile QA
- **Breakpoint Focus:** Primary QA at 360px, 390px, and 412px.
- **No Overflow:** Horizontal scrolling is strictly prohibited unless inside a dedicated scroller.
- **Thumb Zone:** Keep primary actions in the lower 60% of the screen.
- **Zero Placeholder Leak:** No "Lorem Ipsum" or generic filler text is permitted in production.

## 7. Conversion-First 5-Second Rule
A visitor must understand these 5 things within 5 seconds:
1. **What:** The service offered.
2. **Where:** Located in Pune/Area.
3. **Trust:** Why they are the best (Heritage/Review).
4. **Price:** The starting investment.
5. **Action:** How to message on WhatsApp.

## 8. Future Workflow Rules
- V2 is the foundation.
- Client sites = Config edits in `src/data/clientConfig.js`.
- No full rebuilds unless a new "Archetype" is explicitly requested.
