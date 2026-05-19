/**
 * V5 Design Critic
 * ----------------
 * Evaluates a project's "Pro Max" quality score.
 */

export const analyzeDesignQuality = (config) => {
  const issues = [];

  if (!config.hero.badge) issues.push("Weak first screen: Missing niche authority badge.");
  if (config.offers.length < 2) issues.push("Low decision support: Provide at least 2 distinct service tiers.");
  if (!config.phone) issues.push("Conversion critical: Missing WhatsApp contact.");

  const score = 100 - (issues.length * 10);

  return {
    score,
    issues,
    status: score > 80 ? "Pro Max Approved" : "Needs Polish"
  };
};
