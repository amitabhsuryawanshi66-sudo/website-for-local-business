/**
 * V2 CLIENT CONFIGURATION (Bridal Makeup / Mehendi)
 * ------------------------------------------------
 * This file controls 100% of the V2 content.
 */

export const V2_CLIENT_DATA = {
  // Identity
  business: {
    name: "Glow by Gauri",
    niche: "Bridal Artistry",
    location: "Kothrud, Pune",
    address: "Studio 102, Premium Plaza, Kothrud, Pune - 411038",
    whatsapp: "919876543210",
    instagram: "https://instagram.com/glowbygauri",
    igHandle: "@glowbygauri",
  },

  // Hero Section (Variation: Editorial Boutique)
  hero: {
    badge: "Elite Bridal Selection 2024",
    headline: "Unveiling Your <span class='text-accent italic'>Inner Radiance.</span>",
    subheadline: "Pune's premier bridal makeup studio specializing in high-definition, long-wear elegance for the modern bride.",
    proof: "500+ Luxury Brides",
    images: {
      main: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=1200&auto=format&fit=crop",
      float: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
    },
    ctaPrimary: "Check Availability",
    ctaSecondary: "View Packages"
  },

  // Trust Bento
  trust: [
    { id: "exp", label: "Experience", value: "05+ Years", detail: "Serving Pune's elite wedding circle." },
    { id: "rate", label: "Rating", value: "4.9/5", detail: "Verified reviews on Google & Instagram." },
    { id: "style", label: "Specialization", value: "HD & Airbrush", detail: "Techniques for 18-hour flawless wear." },
    { id: "area", label: "Service Area", value: "Pune Wide", detail: "Travel available for outstation venues." }
  ],

  // Packages (Niche-Specific, No Hardcoding)
  packages: [
    {
      id: "bridal-pro",
      title: "The Signature Bride",
      price: "₹15,000",
      badge: "Most Booked",
      desc: "Full HD transformation with premium international products.",
      features: [
        "Advanced HD Base Makeup",
        "Luxury Hair Sculpting",
        "Saree Draping & Styling",
        "Premium Mink Eye-Lashes"
      ],
      whatsapp: "Hi Gauri, checking availability for the Signature Bridal Package!"
    },
    {
      id: "engagement",
      title: "Engagement Symphony",
      price: "₹8,000",
      badge: "Glow Focus",
      desc: "Sophisticated, dewy look for your ring ceremony.",
      features: [
        "Dewy Finish HD Makeup",
        "Contemporary Hair Styling",
        "On-site Service (Pune)",
        "Premium Skin Prep"
      ],
      whatsapp: "Hi Gauri, interested in Engagement Makeup. Is my date available?"
    }
  ],

  // Gallery Collage
  gallery: [
    { url: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=800&auto=format&fit=crop", alt: "Traditional Bride" },
    { url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop", alt: "Modern Reception" },
    { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop", alt: "Mehendi Detail" },
    { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", alt: "Bridal Portrait" }
  ],

  // Booking Process
  process: [
    { step: "01", title: "Enquire", desc: "Check date availability via WhatsApp." },
    { step: "02", title: "Consult", desc: "Discuss your outfit, theme, and skin type." },
    { step: "03", title: "Confirm", desc: "Secure your slot with a 50% advance." },
    { step: "04", title: "D-Day", desc: "We create magic at your venue." }
  ],

  // FAQ
  faqs: [
    { q: "Do you travel for Pune weddings?", a: "Yes, we travel all over Pune. Travel charges may apply for long-distance venues." },
    { q: "Which brands do you use?", a: "We use MAC, Estée Lauder, Huda Beauty, and Charlotte Tilbury." }
  ],

  // Testimonials
  reviews: [
    { name: "Priya Sharma", text: "Gauri made me look like a dream! Punctual and professional.", rating: 5 },
    { name: "Anjali Deshmukh", text: "The makeup stayed fresh for 14 hours. Incredible work!", rating: 5 }
  ],

  // Final CTA
  footerCTA: {
    headline: "Ready for your <br/>transformation?",
    sub: "Secure your wedding date today.",
    btn: "Book on WhatsApp"
  },

  // V2 Design Tokens (Theme)
  theme: {
    primary: "#7C2D12",
    accent: "#EA580C",
    bg: "#FFF7ED"
  }
};
