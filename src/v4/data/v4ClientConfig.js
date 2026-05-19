/**
 * V4 MASTER CLIENT CONFIGURATION (Obsidian Ink Studio)
 * ----------------------------------------------------
 * Cinematic Tattoo Concierge - Blank Slate Build.
 */

export const V4_CLIENT_DATA = {
  // Identity
  business: {
    name: "Obsidian Ink",
    niche: "Premium Tattoo Studio",
    location: "Koregaon Park, Pune",
    address: "Studio 7, Lane 5, Koregaon Park, Pune - 411001",
    whatsapp: "919876543210",
    instagram: "https://instagram.com/obsidianink_pune",
    igHandle: "@obsidianink_pune",
  },

  // Theme Tokens (Cinematic Dark)
  theme: {
    primary: "#0A0A0A", // Charcoal/Ink
    accent: "#E53E3E",  // Muted Blood Red
    text: "#F7FAFC",    // Bone White
    surface: "#171923", // Deep Slate
  },

  // Hero Section (Variation: Cinematic Dark Editorial)
  hero: {
    badge: "Appointment Only • Studio",
    headline: "Your Vision. <br/>Marked for <span class='text-accent italic'>Eternity.</span>",
    subheadline: "A boutique concierge for custom fine-line, realism, and symbolic artistry in Pune.",
    ctaPrimary: "Start Tattoo Consultation",
    ctaSecondary: "View Work Styles",
    trust: "Trusted by 1000+ Collectors",
    images: {
      main: "https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&w=1200&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1590210350412-21950e394017?q=80&w=800&auto=format&fit=crop"
    }
  },

  // Signal Bar
  signals: [
    "Custom Concept Only",
    "Hospital-Grade Sterility",
    "Koregaon Park Studio",
    "Consultation Required"
  ],

  // Experience Flow
  experience: {
    title: "The Concierge Experience",
    steps: [
      { id: "01", title: "Idea Discussion", detail: "Connect via WhatsApp to share your concept, size, and reference styles." },
      { id: "02", title: "Concept Sketch", detail: "Our artists develop a custom digital sketch tailored to your unique anatomy." },
      { id: "03", title: "Placement Planning", detail: "We map the tattoo flow precisely to your body for maximum aesthetic impact." },
      { id: "04", title: "Artistry Session", detail: "A private, focused session using the world's most advanced sterile tools." },
      { id: "05", title: "Aftercare Guidance", detail: "Detailed healing protocols to ensure your mark stays crisp for decades." }
    ]
  },

  // Service Cards (No generic filler)
  services: [
    {
      id: "fineline",
      title: "Custom Fine-Line",
      price: "Consultation Required",
      time: "2-6 Hours",
      bestFor: "Delicate symbols, script, and geometric work.",
      desc: "Single-needle precision for timeless, elegant results.",
      whatsapp: "Hi Obsidian! I'm interested in a Custom Fine-Line tattoo. Can we discuss my idea?"
    },
    {
      id: "realism",
      title: "Black & Grey Realism",
      price: "By Appointment",
      time: "Full Day Sessions",
      bestFor: "Portraits, wildlife, and cinematic compositions.",
      desc: "High-contrast depth and texture that looks like a photograph.",
      whatsapp: "Hi! Looking to book a Black & Grey Realism session. What's your next available slot?"
    },
    {
      id: "script",
      title: "Calligraphy & Script",
      price: "Starts ₹5,000",
      time: "1-3 Hours",
      bestFor: "Names, quotes, and custom typography.",
      desc: "Freehand or digital script designed to flow with your body.",
      whatsapp: "Hi Obsidian! I have a quote I want to get tattooed in custom script. Do you have time this week?"
    }
  ],

  // Visual Story (Collage)
  portfolio: [
    { label: "Fine-line concept", url: "https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&w=800&auto=format&fit=crop" },
    { label: "Realism sleeve", url: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" },
    { label: "Minimal symbol", url: "https://images.unsplash.com/photo-1590210350412-21950e394017?q=80&w=800&auto=format&fit=crop" },
    { label: "Cover-up consultation", url: "https://images.unsplash.com/photo-1562967914-6cda7701257f?q=80&w=800&auto=format&fit=crop" }
  ],

  // Proof Wall
  proofWall: [
    { title: "Sterile Setup", desc: "Single-use disposables and autoclave sterilization standard." },
    { title: "Healed Results", desc: "View our 5-year healed gallery to see lasting quality." },
    { title: "Placement Pro", desc: "Expert anatomical mapping for every single piece." }
  ],

  // FAQ
  faqs: [
    { q: "Does it hurt?", a: "Pain is subjective, but our techniques and high-quality needles minimize discomfort. We prioritize your session's comfort." },
    { q: "How do I book?", a: "Start with a WhatsApp message. Once we finalize the concept, a 25% deposit secures your slot." },
    { q: "Do you do cover-ups?", a: "Yes, but we require a physical consultation to assess the existing ink's saturation." }
  ],

  // Booking Path
  booking: [
    { step: "01", title: "Message Idea", detail: "WhatsApp your concept and reference." },
    { step: "02", title: "Get Quote", detail: "We estimate time and investment." },
    { step: "03", title: "Secure Slot", detail: "Pay deposit to block your session." }
  ],

  // Final CTA
  finalClose: {
    headline: "Your idea deserves a <br/>custom mark.",
    btn: "Start Consultation"
  }
};
