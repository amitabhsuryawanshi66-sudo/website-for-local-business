/**
 * V5 Skill Gate Runner
 * -------------------
 * Logic to validate components against installed skills.
 */

export const validateGate = (componentName, traits) => {
  const requirements = {
    Hero: ["asymmetry", "intent_cta", "location_cue"],
    Offers: ["decision_cards", "price_anchoring"],
    Motion: ["sequencing", "springs", "no_bounce"]
  };

  return {
    component: componentName,
    passed: requirements[componentName]?.every(t => traits.includes(t)) ?? true,
    status: "Pro Max Evaluated"
  };
};
