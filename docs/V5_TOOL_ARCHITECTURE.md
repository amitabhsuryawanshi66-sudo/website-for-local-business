# V5 Niche Engine Architecture

V5 is a fundamental shift from "Landing Page Template" to **"Niche-Aware Mini-Site Generator."**

## 1. How V5 is different from V4
- **Structural Dynamism**: V4 used the same section order for every site. V5 uses `sectionComposer.js` and `nichePlaybooks.js` to define different section flows based on user intent.
- **Intent-Based Interaction**: V5 introduces the `DecisionDock`, allowing users to declare their intent (Pricing, Availability, etc.) which then hydrates the rest of the UI with relevant proof and CTAs.
- **Architecture Level Rebuild**: Created `src/v5/` with a logic-heavy `engine/` folder that separates "Strategic Content" from "UI Components."

## 2. Niche Playbooks
Every business in V5 is tied to a `nichePlaybook`.
- **Tattoo Studio**: Prioritizes visual authority and sterility proof. Uses a "Cinematic Concierge" archetype.
- **Home Baker**: Prioritizes transactional ease and menu discovery. Uses a "Menu Commerce" archetype.
- **Car Detailing**: Prioritizes result evidence (Before/After). Uses a "Transformation Proof" archetype.

## 3. Creating a Client Site
1. **Define Niche**: Choose an existing playbook in `engine/nichePlaybooks.js`.
2. **Add Data**: Create a new entry in `data/v5DemoBusinesses.js`.
3. **Launch**: The engine automatically selects the right Archetype and Section Flow.

This ensures that a Bakery site actually feels like a Bakery, not a Tattoo studio with different photos.
