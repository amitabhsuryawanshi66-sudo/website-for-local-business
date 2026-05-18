/**
 * MASTER CLIENT CONFIGURATION (V2)
 * --------------------------------
 * Unified source of truth for all business variants.
 */

export const BUSINESS_DATA = {
  // ---------------------------------------------------------
  // NICHE 1: BRIDAL MAKEUP / MEHENDI ARTIST
  // ---------------------------------------------------------
  bridal_makeup: {
    // Identity
    name: "Glow by Gauri",
    niche: "Bridal Makeup & Hair Artist",
    tagline: "High-end artistry for Pune's most discerning brides.",
    location: "Kothrud, Pune",
    address: "Studio 102, Premium Plaza, Near Paud Road, Kothrud, Pune - 411038",

    // Contact
    whatsappNumber: "919876543210",
    instagramLink: "https://instagram.com/glowbygauri",
    instagramHandle: "@glowbygauri",

    // Conversion Settings
    ctaText: "Check Availability",
    whatsappPrefill: "Hi Gauri, checking your availability for my wedding makeup!",

    // V2 Design Tokens
    colors: {
      primary: "#7C2D12", // Deep Terracotta
      secondary: "#FFF7ED", // Shell
      accent: "#EA580C", // Vibrant Ochre
    },

    // Hero Customization
    hero: {
      badge: "Now Booking 2024-25",
      headline: "Crafting Beauty. Defining Elegance.",
      subheadline: "Half a decade of heritage defining bridal excellence across Pune.",
      stats: [
        { label: "Brides Served", value: "500+" },
        { label: "Experience", value: "5yr+" },
        { label: "Rating", value: "4.9/5" }
      ]
    },

    // About / Story
    about: {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      title: "Our Story",
      headline: "The Art of Natural <span class='text-accent italic'>Radiance</span>",
      text: "We specialize in bridal transformations that enhance your natural features without masking your identity. Our studio in Kothrud has become a sanctuary for brides who value sophistication, punctuality, and an uncompromising eye for detail."
    },

    // Services / Packages
    services: [
      {
        title: "Full Bridal Mastery",
        price: "₹15,000",
        badge: "Most Popular",
        description: "HD makeup, luxury hair styling, saree draping, and premium mink lashes.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Symphony Engagement",
        price: "₹8,000",
        badge: "Light HD",
        description: "A sophisticated, dewy look designed for high-impact photography.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Editorial Pre-Wedding",
        price: "₹5,000",
        badge: "Candid Pro",
        description: "Flawless long-wear makeup for all-day outdoor shoots.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
      }
    ],

    // Portfolio (Bento Grid)
    gallery: [
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
    ],

    // Testimonials
    testimonials: [
      { name: "Priya Sharma", text: "Gauri made me look like a dream on my wedding day. The makeup didn't budge even after 12 hours!", rating: 5 },
      { name: "Anjali Deshmukh", text: "Highly professional. She understood exactly what I wanted for my reception.", rating: 5 }
    ],

    // Booking Process
    process: [
      { title: "Discovery", description: "WhatsApp us to check availability for your specific date." },
      { title: "Confirmation", description: "Secure your slot with a 50% advance booking payment." },
      { title: "Artistry", description: "We arrive on time to create your perfect bridal look." }
    ],

    // FAQ
    faqs: [
      { question: "Do you travel for outstation weddings?", answer: "Yes, we travel all over India. Standard travel and stay charges apply." },
      { question: "Which products do you use?", answer: "We use premium international brands like MAC, Estée Lauder, and Huda Beauty." }
    ],

    // Map
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.396593518!2d73.8124!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x8288cf507a2b975!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 2: PHOTOGRAPHY
  // ---------------------------------------------------------
  photography: {
    name: "Pixel Perfect Pune",
    niche: "Wedding & Event Photographer",
    tagline: "Candid moments that tell your unique love story.",
    location: "Baner, Pune",
    address: "Plot 45, High Street, Baner, Pune - 411045",
    whatsappNumber: "919876543211",
    instagramLink: "https://instagram.com/pixelperfectpune",
    instagramHandle: "@pixelperfectpune",
    ctaText: "Check Shoot Dates",
    whatsappPrefill: "Hi Pixel Perfect, checking your availability for a photo session!",
    colors: {
      primary: "#0F172A",
      secondary: "#F8FAFC",
      accent: "#3B82F6",
    },
    hero: {
      badge: "Book Now for 2024",
      headline: "Capturing Life. Telling Stories.",
      subheadline: "Professional candid photography based in Pune, serving all over India.",
      stats: [
        { label: "Events Shot", value: "200+" },
        { label: "Experience", value: "8yr+" },
        { label: "Teasers", value: "48h" }
      ]
    },
    about: {
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
      title: "Our Lens",
      headline: "Cinematic <span class='text-accent italic'>Authenticity</span>",
      text: "We don't just take photos; we capture the emotions that you'll want to relive for a lifetime. Our Baner-based team specializes in candid wedding storytelling and high-end event coverage."
    },
    services: [
      {
        title: "The Wedding Film",
        price: "₹50,000",
        badge: "Best Seller",
        description: "Full day coverage, cinematic teaser, and high-res digital gallery.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Pre-Wedding Duo",
        price: "₹15,000",
        badge: "Candid",
        description: "A 4-hour sunset session at a premium Pune location of your choice.",
        image: "https://images.unsplash.com/photo-1519741497674-611481883552?q=80&w=800&auto=format&fit=crop"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465495910483-0d674b0977c0?q=80&w=800&auto=format&fit=crop"
    ],
    testimonials: [
      { name: "Rahul & Sneha", text: "Pixel Perfect captured our wedding exactly how it felt—magical and real.", rating: 5 }
    ],
    process: [
      { title: "Planning", description: "We meet to discuss your timeline and photo style." },
      { title: "The Day", description: "Our team captures every moment without being intrusive." },
      { title: "Delivery", description: "Teasers in 48 hours, full gallery in 30 days." }
    ],
    faqs: [
      { question: "Do you travel?", answer: "Yes, we love travel weddings. Travel and stay are billed separately." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612!2d73.78!3d18.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec47a32b95b%3A0x7d6f51e39b2b51!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 3: BAKERY
  // ---------------------------------------------------------
  bakery: {
    name: "The Sugar Studio",
    niche: "Home Baker & Custom Cakes",
    tagline: "Handcrafted happiness delivered to your door.",
    location: "Viman Nagar, Pune",
    address: "Datta Mandir Road, Viman Nagar, Pune - 411014",
    whatsappNumber: "919876543212",
    instagramLink: "https://instagram.com/sugarstudio_pune",
    instagramHandle: "@sugarstudio_pune",
    ctaText: "Order on WhatsApp",
    whatsappPrefill: "Hi Sugar Studio, I'd like to order a custom cake!",
    colors: {
      primary: "#831843",
      secondary: "#FDF2F8",
      accent: "#DB2777",
    },
    hero: {
      badge: "Freshly Baked Daily",
      headline: "Artisan Bakes. Pure Ingredients.",
      subheadline: "Bespoke celebration cakes and gourmet treats in Viman Nagar.",
      stats: [
        { label: "Cakes Baked", value: "1000+" },
        { label: "Freshness", value: "100%" },
        { label: "Pune Based", value: "Verified" }
      ]
    },
    about: {
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
      title: "Our Oven",
      headline: "Sweet <span class='text-accent italic'>Memories</span>",
      text: "Every cake we bake is a labor of love. Using only organic flour and zero preservatives, we ensure your celebrations are both healthy and delicious."
    },
    services: [
      {
        title: "Designer Tiers",
        price: "₹1,200/kg",
        badge: "Top Tier",
        description: "Customized themed cakes for birthdays, weddings, and anniversaries.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519340333755-5672c2193d39?q=80&w=800&auto=format&fit=crop"
    ],
    testimonials: [
      { name: "Meera P.", text: "The chocolate truffle cake was out of this world!", rating: 5 }
    ],
    process: [
      { title: "Order", description: "Send your design inspiration on WhatsApp." },
      { title: "Bake", description: "Everything is baked fresh just hours before delivery." }
    ],
    faqs: [
      { question: "How early to order?", answer: "At least 48 hours in advance for custom designs." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.c147b8b2135d%3A0xbb0d9f4de195748!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 4: PG / HOSTEL
  // ---------------------------------------------------------
  pg_hostel: {
    name: "StayEase Premium PG",
    niche: "Luxury Living for Professionals",
    tagline: "Your home in the heart of Pune's IT hub.",
    location: "Hinjewadi, Pune",
    address: "Phase 1, Near IT Park, Hinjewadi, Pune - 411057",
    whatsappNumber: "919876543213",
    instagramLink: "https://instagram.com/stayeasepune",
    instagramHandle: "@stayeasepune",
    ctaText: "Book a Visit",
    whatsappPrefill: "Hi StayEase, interested in a premium room in Hinjewadi!",
    colors: {
      primary: "#1E293B",
      secondary: "#F1F5F9",
      accent: "#0F172A",
    },
    hero: {
      badge: "Rooms Available Now",
      headline: "Modern Living. Total Comfort.",
      subheadline: "Premium co-living spaces designed for the modern IT professional.",
      stats: [
        { label: "Tenants", value: "100+" },
        { label: "Wi-Fi", value: "500Mbps" },
        { label: "Security", value: "24/7" }
      ]
    },
    about: {
      image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop",
      title: "Our Space",
      headline: "Comfort <span class='text-accent italic'>Redefined</span>",
      text: "StayEase is more than just a room. It's a community. Our Hinjewadi property features high-speed internet, gourmet meals, and professional housekeeping."
    },
    services: [
      {
        title: "The Executive Single",
        price: "₹18,000",
        badge: "Private",
        description: "Private room with balcony, attached bath, and individual workspace.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop"
    ],
    testimonials: [
      { name: "Vikram R.", text: "Best PG in Hinjewadi. Wi-Fi is super fast!", rating: 5 }
    ],
    process: [
      { title: "Visit", description: "Schedule a physical or virtual tour of the space." },
      { title: "Move In", description: "Quick digital paperwork and same-day move-in." }
    ],
    faqs: [
      { question: "Is food included?", answer: "Yes, breakfast and dinner are included on all days." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.c147b8b2135d!2d73.74!3d18.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0f8c8574e1%3A0x6739938b813295!2sHinjewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 5: CAR DETAILING
  // ---------------------------------------------------------
  car_detailing: {
    name: "Elite Auto Spa",
    niche: "Professional Car Detailing",
    tagline: "Showroom shine for your vehicle, guaranteed.",
    location: "Kalyani Nagar, Pune",
    address: "Lane 7, Near Jogger's Park, Kalyani Nagar, Pune - 411006",
    whatsappNumber: "919876543214",
    instagramLink: "https://instagram.com/eliteautospa",
    instagramHandle: "@eliteautospa",
    ctaText: "Book Service",
    whatsappPrefill: "Hi Elite Auto Spa, I'd like to book a detailing session!",
    colors: {
      primary: "#000000",
      secondary: "#111827",
      accent: "#DC2626",
    },
    hero: {
      badge: "Premium Protection",
      headline: "Showroom Shine. Nano Protection.",
      subheadline: "Professional grade ceramic coating and detailing studio in Pune.",
      stats: [
        { label: "Cars Served", value: "1500+" },
        { label: "Coating", value: "9H Pro" },
        { label: "Pune Studio", value: "Verified" }
      ]
    },
    about: {
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop",
      title: "Our Studio",
      headline: "Unmatched <span class='text-accent italic'>Precision</span>",
      text: "Elite Auto Spa in Kalyani Nagar is equipped with the latest detailing technology from Germany and the US. We don't just wash cars; we protect your investment."
    },
    services: [
      {
        title: "Ceramic Mastery",
        price: "₹12,000",
        badge: "Pro Guard",
        description: "3-year 9H nano-ceramic coating with full paint correction.",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop"
    ],
    testimonials: [
      { name: "Rohan M.", text: "Exceptional service. My 5-year-old car looks brand new!", rating: 5 }
    ],
    process: [
      { title: "Inspection", description: "We assess your paint condition and provide a quote." },
      { title: "Service", description: "Our experts work on your vehicle for 6-12 hours." }
    ],
    faqs: [
      { question: "How long does it take?", answer: "A full ceramic detail usually takes 8-10 hours." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.c147b8b2135d!2d73.90!3d18.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ad90a4970f!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  }
};
