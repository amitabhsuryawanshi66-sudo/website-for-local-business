/**
 * V2 MASTER CLIENT CONFIGURATION
 * --------------------------------
 * No hardcoded generic features. Everything is niche-specific.
 */

export const V2_BUSINESS_DATA = {
  bridal_makeup: {
    // 1. Identity & Context
    name: "Glow by Gauri",
    niche: "Bridal Makeup Artist",
    location: "Kothrud, Pune",
    address: "Studio 102, Premium Plaza, Kothrud, Pune",
    whatsappNumber: "919876543210",
    instagramLink: "https://instagram.com/glowbygauri",
    instagramHandle: "@glowbygauri",

    // 2. Hero Section (Editorial Boutique)
    hero: {
      badge: "Now Booking for 2024-25 Weddings",
      headline: "The Art of Natural <span class='text-accent italic'>Radiance</span>",
      subheadline: "Luxury bridal artistry for the modern Pune bride. Specializing in high-definition, long-wear elegance.",
      mainImage: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=800&auto=format&fit=crop",
      secondaryImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
      proofPoints: [
        { label: "Happy Brides", value: "500+" },
        { label: "Verified", value: "Pune Based" }
      ],
      ctaPrimary: "Check Availability",
      ctaSecondary: "View Packages"
    },

    // 3. Trust Bento (Evidence)
    trustBento: {
      experience: { label: "Experience", value: "05+", detail: "Years in Bridal Artistry" },
      reviews: { label: "Rating", value: "4.9/5", detail: "Average across 200+ Google Reviews" },
      location: { label: "Studio", value: "Kothrud", detail: "Premium Private Makeup Suite" },
      specialization: { label: "Niche", value: "HD/Airbrush", detail: "Expert in diverse skin tones" }
    },

    // 4. Packages (No hardcoded generic features)
    packages: [
      {
        title: "Full Bridal Mastery",
        price: "₹15,000",
        badge: "Most Booked",
        description: "The complete luxury transformation for your most special day.",
        features: [
          "HD Makeup with Premium Products",
          "Advanced Luxury Hair Styling",
          "Saree Draping & Jewellery Setting",
          "Premium Mink Lashes included"
        ],
        ctaLabel: "Enquire for Wedding",
        whatsappMessage: "Hi Gauri, I'd like to check your availability for a Full Bridal Package!"
      },
      {
        title: "Engagement Symphony",
        price: "₹8,000",
        badge: "Glow Focus",
        description: "A sophisticated, dewy look perfect for ring ceremonies.",
        features: [
          "Dewy HD Finish Makeup",
          "Designer Hair Styling",
          "Flower/Jewellery Placement",
          "Punctual On-site Service"
        ],
        ctaLabel: "Check Availability",
        whatsappMessage: "Hi Gauri, checking availability for my Engagement makeup!"
      }
    ],

    // 5. Portfolio Collage
    gallery: [
      { url: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=800&auto=format&fit=crop", alt: "Traditional Marathi Bride" },
      { url: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop", alt: "Modern Reception Look" },
      { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop", alt: "Intricate Mehendi Detail" },
      { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop", alt: "Bridal Eye Makeup" }
    ],

    // 6. Booking Process
    process: [
      { title: "WhatsApp Enquiry", detail: "Share your wedding date and venue in Kothrud or Pune." },
      { title: "Date Confirmation", detail: "Pay 50% advance to lock your slot for the big day." },
      { title: "Bridal Magic", detail: "We arrive at your venue to create your dream look." }
    ],

    // 7. FAQ
    faqs: [
      { question: "Do you travel for Pune destination weddings?", answer: "Yes, we travel all over Maharashtra for destination weddings. Travel and stay charges are applicable." },
      { question: "Which makeup brands do you use?", answer: "We use high-end international kits including MAC, Estée Lauder, Huda Beauty, and Charlotte Tilbury." }
    ],

    // 8. Testimonials
    testimonials: [
      { name: "Priya Sharma", text: "Gauri is a magician! My makeup lasted perfectly through the humid Pune heat.", rating: 5 },
      { name: "Anjali Deshmukh", text: "Highly recommend for anyone wanting a natural but elegant look.", rating: 5 }
    ],

    // 9. Final CTA
    finalCTA: {
      headline: "Let's create your <br/>dream bridal look.",
      subheadline: "Limited slots available for the 2024 wedding season.",
      primaryButton: "Message on WhatsApp",
      secondaryButton: "See Instagram"
    },

    // 10. Design Tokens
    tokens: {
      primary: "#7C2D12",
      secondary: "#FFF7ED",
      accent: "#EA580C"
    },

    // 11. Maps
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.396593518!2d73.8124!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x8288cf507a2b975!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // PHOTOGRAPHY
  photography: {
    name: "Pixel Perfect Pune",
    niche: "Wedding Photographer",
    location: "Baner, Pune",
    address: "High Street, Baner, Pune",
    whatsappNumber: "919876543211",
    instagramLink: "https://instagram.com/pixelperfectpune",
    instagramHandle: "@pixelperfectpune",
    hero: {
      badge: "Booking Shoots for 2024",
      headline: "Capturing Life. <br/>Telling <span class='text-accent italic'>Stories.</span>",
      subheadline: "Professional candid wedding and event photography based in Baner, serving all of Pune.",
      mainImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481883552?q=80&w=800&auto=format&fit=crop",
      proofPoints: [
        { label: "Events Shot", value: "200+" },
        { label: "Teasers", value: "48h" }
      ],
      ctaPrimary: "Check Shoot Dates",
      ctaSecondary: "View Portfolios"
    },
    packages: [
      {
        title: "Full Day Cinematic",
        price: "₹50,000",
        badge: "Best Seller",
        description: "Complete coverage of your wedding day with a cinematic touch.",
        features: [
          "2 Senior Photographers",
          "Cinematic Wedding Film Teaser",
          "High-Res Edited Digital Gallery",
          "Premium Coffee Table Album"
        ],
        ctaLabel: "Check Availability",
        whatsappMessage: "Hi Pixel Perfect, I'd like to check availability for a Full Day Wedding shoot!"
      }
    ],
    tokens: {
      primary: "#0F172A",
      secondary: "#F8FAFC",
      accent: "#3B82F6"
    },
    // ... (rest of photography data similarly structured)
  }
};
