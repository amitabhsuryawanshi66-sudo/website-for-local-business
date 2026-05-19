/**
 * V5 Niche Playbooks
 * -------------------
 * Defines the strategic DNA for different business types.
 */

export const NICHE_PLAYBOOKS = {
  tattoo_studio: {
    intent: "artistic_collaboration",
    trustAnxieties: ["Safety/Hygiene", "Artistic Skill", "Pain", "Healed Quality"],
    objections: ["Does it hurt?", "Is it safe?", "Price transparency", "Cover-up ability"],
    proofPriority: ["healed_work", "sterile_setup", "custom_sketch"],
    primaryCTA: "Start Tattoo Consultation",
    secondaryCTA: "View Art Styles",
    sectionFlow: ["hero", "signals", "experience", "visual_narrative", "offers", "proof", "booking", "faq", "close"],
    tone: "Cinematic, Bold, Intimate",
    whatsappIntents: ["consultation", "availability", "pricing"],
    conversionPriority: "visual_authority"
  },

  home_baker: {
    intent: "menu_discovery",
    trustAnxieties: ["Freshness", "Ingredients", "Delivery reliability", "Taste"],
    objections: ["Order window", "Delivery area", "Customization limits", "Eggless options"],
    proofPriority: ["delivery_proof", "freshness_badge", "real_reviews"],
    primaryCTA: "View Cake Menu",
    secondaryCTA: "Check Delivery Date",
    sectionFlow: ["hero", "decision_dock", "offers", "visual_narrative", "objection_resolver", "process", "close"],
    tone: "Warm, Professional, Sweet",
    whatsappIntents: ["order", "menu_request", "delivery_check"],
    conversionPriority: "transactional_ease"
  },

  car_detailing: {
    intent: "transformation_proof",
    trustAnxieties: ["Paint safety", "Product quality", "Durability", "Studio tech"],
    objections: ["Time taken", "Coating warranty", "Maintenance", "Cost vs Value"],
    proofPriority: ["before_after", "tech_specs", "warranty_trust"],
    primaryCTA: "Get Detailing Quote",
    secondaryCTA: "See Transformations",
    sectionFlow: ["hero", "signals", "visual_narrative", "offers", "experience", "objection_resolver", "close"],
    tone: "High-Tech, Precise, Professional",
    whatsappIntents: ["quote", "maintenance_guide", "booking"],
    conversionPriority: "result_evidence"
  },

  pg_hostel: {
    intent: "room_walkthrough",
    trustAnxieties: ["Security", "Food quality", "Wi-Fi speed", "Deposit safety"],
    objections: ["Notice period", "Guest policy", "Hidden charges", "Distance to IT parks"],
    proofPriority: ["room_tours", "amenity_badges", "tenant_testimonials"],
    primaryCTA: "Book Room Visit",
    secondaryCTA: "View Available Rooms",
    sectionFlow: ["hero", "decision_dock", "visual_narrative", "offers", "proof", "objection_resolver", "close"],
    tone: "Clean, Safe, Modern",
    whatsappIntents: ["visit", "availability", "amenity_details"],
    conversionPriority: "utility_assurance"
  }
};
