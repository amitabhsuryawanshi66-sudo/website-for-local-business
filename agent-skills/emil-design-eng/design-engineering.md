# Emil Kowalski Design Engineering Skill
Source: https://github.com/emilkowalski/skill

## Core Principles
1. **Natural & Inevitable Motion**: Motion should feel like a logical extension of the UI, never added as an afterthought.
2. **Professional Easing**: Use sophisticated easing curves (e.g., `[0.16, 1, 0.3, 1]`) or physics-based springs (`stiffness: 260, damping: 20`). Avoid linear or elastic "bouncy" animations unless purposeful.
3. **Sequencing & Stagger**: Elements should enter the screen in a logical order (e.g., Top-down, left-to-right, or logical hierarchy).
4. **Micro-interactions**: Every interactive element must have feedback (pressed states, hover transitions, focus rings).
5. **Invisible Polish**: Focus on the timing of state changes, the feel of scroll reveals, and the transition between different layouts.

## Usage in this Project
- Stagger children in Hero and Gallery.
- Use spring physics for button taps.
- Smooth height transitions for FAQs.
- Respect `prefers-reduced-motion`.
