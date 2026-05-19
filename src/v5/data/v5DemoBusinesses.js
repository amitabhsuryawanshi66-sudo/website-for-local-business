/**
 * V5 Demo Businesses
 * -------------------
 * Fully drive different structural results through the engine.
 */

export const V5_DEMO_BUSINESSES = {
  tattoo: {
    id: "tattoo",
    name: "Obsidian Ink",
    niche: "tattoo_studio",
    archetype: "cinematic-concierge",
    location: "Koregaon Park, Pune",
    phone: "919876543210",
    theme: { primary: "#0A0A0A", accent: "#E53E3E" },
    hero: {
      badge: "By Appointment Only",
      headline: "Art. Skin. <br/>Perfection.",
      subheadline: "Pune's premier concierge for custom fine-line and realism tattoo artistry.",
      image: "https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&w=800&auto=format&fit=crop"
    },
    signals: ["Sterile Setup", "Custom Sketches", "Pune Based"],
    offers: [
      { id: "f1", title: "Fine-Line", price: "By Quote", bestFor: "Delicate Art", time: "2-4h" },
      { id: "r1", title: "Realism", price: "Consult Req", bestFor: "Portraits", time: "Full Day" }
    ],
    proof: [
      { id: "h1", type: "healed", url: "https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&w=800&auto=format&fit=crop" },
      { id: "h2", type: "concept", url: "https://images.unsplash.com/photo-1590210350412-21950e394017?q=80&w=800&auto=format&fit=crop" }
    ],
    faqs: [
      { q: "Does it hurt?", a: "Pain is subjective, but our methods prioritize comfort." },
      { q: "How to book?", a: "Message your idea on WhatsApp for an initial briefing." }
    ]
  },

  bakery: {
    id: "bakery",
    name: "Mira’s Bake Room",
    niche: "home_baker",
    archetype: "menu-commerce",
    location: "Baner, Pune",
    phone: "919876543211",
    theme: { primary: "#831843", accent: "#DB2777" },
    hero: {
      badge: "Freshly Baked Daily",
      headline: "Gourmet Cakes. <br/>Pure Love.",
      subheadline: "Handcrafted celebration cakes delivered across Baner and Aundh.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
    },
    offers: [
      { id: "c1", title: "Belgian Truffle", price: "₹1,200/kg", bestFor: "Birthdays", time: "48h Notice" },
      { id: "c2", title: "Red Velvet", price: "₹1,400/kg", bestFor: "Anniversaries", time: "24h Notice" }
    ],
    proof: [
      { id: "b1", type: "review", text: "Best cake in Pune! So fresh and not too sweet." }
    ],
    faqs: [
      { q: "Do you deliver?", a: "Yes, we deliver within a 10km radius of Baner." }
    ]
  },

  detailing: {
    id: "detailing",
    name: "Axis Auto Lab",
    niche: "car_detailing",
    archetype: "transformation-proof",
    location: "Wakad, Pune",
    phone: "919876543212",
    theme: { primary: "#000000", accent: "#3B82F6" },
    hero: {
      badge: "9H Ceramic Certified",
      headline: "Showroom Shine. <br/>Permanent.",
      subheadline: "Professional grade paint protection and detailing studio in Wakad.",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop"
    },
    signals: ["3-Year Warranty", "Lab Controlled", "Premium Imports"],
    offers: [
      { id: "d1", title: "Ceramic Pro", price: "Starts ₹12k", bestFor: "New Cars", time: "8h" },
      { id: "d2", title: "Interior Spa", price: "Starts ₹3k", bestFor: "Old Cars", time: "4h" }
    ],
    proof: [
      { id: "t1", type: "before-after", url: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop" }
    ],
    faqs: [
      { q: "How long is the warranty?", a: "We provide a 3-year durability guarantee on 9H coatings." }
    ]
  }
};
