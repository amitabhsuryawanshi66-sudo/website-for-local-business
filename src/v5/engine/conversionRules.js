/**
 * V5 Conversion Rules
 * -------------------
 * Logic for psychological triggers and information architecture.
 */

export const CONVERSION_RULES = {
  clarity: {
    "5sec_rule": ["Service Name", " Pune Location", "CTA Prompt"],
    IA: "Intent-based navigation over generic links"
  },

  trust: {
    placement: "social proof must exist within 1200px of every major CTA",
    contextual: "niche-specific proof (e.g. sterility for tattoo, delivery for baker)"
  },

  objections: {
    progressive_disclosure: "reveal pricing/process after value-building sections",
    pre_inquiry_safety: "resolve top 3 anxieties before the final close"
  },

  mobile: {
    thumb_zone: "primary actions between 60% and 90% screen height",
    tap_targets: "minimum 56px height for primary conversion buttons",
    scan_patterns: "Z-pattern for hero, F-pattern for card boards"
  }
};
