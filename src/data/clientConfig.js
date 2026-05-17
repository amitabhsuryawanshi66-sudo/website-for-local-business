/**
 * CLIENT CONFIGURATION FILE
 * -------------------------
 * This is the only file you need to edit to create a new client website.
 * Follow the comments below to customize every aspect of the site.
 */

export const BUSINESS_DATA = {
  // ---------------------------------------------------------
  // NICHE 1: BRIDAL MAKEUP / MEHENDI ARTIST
  // ---------------------------------------------------------
  bridal_makeup: {
    // 1. Basic Info
    name: "Glow by Gauri",
    niche: "Bridal Makeup & Hair Artist",
    tagline: "Enhancing your natural beauty for your most special day.",
    location: "Kothrud, Pune",
    address: "Studio 102, Premium Plaza, Near Paud Road, Kothrud, Pune - 411038",

    // 2. Contact & Social
    whatsappNumber: "919876543210",
    instagramLink: "https://instagram.com/glowbygauri",
    instagramHandle: "@glowbygauri",

    // 3. WhatsApp Settings
    ctaText: "Check Bridal Availability",
    whatsappPrefill: "Hi Gauri, I saw your work on your website and I'd like to check your availability for my wedding makeup!",

    // 4. Branding (Colors)
    colors: {
      primary: "#7C2D12",
      secondary: "#FFF7ED",
      accent: "#EA580C",
    },

    // 5. Hero Stats
    stats: [
      { label: "Happy Brides", value: "500+" },
      { label: "Experience", value: "5yr+" },
      { label: "Pune Based", value: "Verified" }
    ],

    // 6. About Section
    aboutImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    aboutText: "With half a decade of experience serving the vibrant community of Pune, we've built a reputation for excellence, reliability, and an uncompromising eye for detail. Whether it's a grand wedding or an intimate celebration, we treat your moments as our own.",

    // 7. Services / Packages
    services: [
      {
        title: "Full Bridal Package",
        price: "Starts ₹15,000",
        description: "HD makeup, luxury hair styling, saree draping, and premium lashes.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Engagement / Reception",
        price: "Starts ₹8,000",
        description: "Sophisticated look designed for your ring ceremony or reception.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Pre-Wedding Shoot Look",
        price: "Starts ₹5,000",
        description: "Photogenic makeup that looks flawless on camera and in person.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
      }
    ],

    // 8. Portfolio / Gallery (6 images)
    gallery: [
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop"
    ],

    // 9. Testimonials
    testimonials: [
      { name: "Priya Sharma", text: "Gauri made me look like a dream on my wedding day. Her attention to detail is amazing!", rating: 5 },
      { name: "Anjali Deshmukh", text: "Highly professional and punctual. The makeup stayed fresh for 12+ hours.", rating: 5 }
    ],

    // 10. Process (How it works)
    process: [
      { title: "Consultation", description: "We discuss your outfit, skin type and preferred look." },
      { title: "Advance Booking", description: "Secure your date with a 50% advance payment." },
      { title: "Trial (Optional)", description: "Experience the look before the big day." },
      { title: "D-Day Magic", description: "I arrive at your venue and we create the magic!" }
    ],

    // 11. FAQs
    faqs: [
      { question: "Do you travel for outstation weddings?", answer: "Yes, I travel all over India. Travel and stay charges are applicable." },
      { question: "Which products do you use?", answer: "I use premium international brands like MAC, Estée Lauder, and Huda Beauty." },
      { question: "How early should I book?", answer: "Bridal dates get blocked 3-6 months in advance. Better book ASAP!" }
    ],

    // 12. Map
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.396593518!2d73.8124!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x8288cf507a2b975!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 2: PHOTOGRAPHY / EVENTS
  // ---------------------------------------------------------
  photography: {
    name: "Pixel Perfect Pune",
    niche: "Wedding & Event Photographer",
    tagline: "Capturing moments that tell your unique love story.",
    whatsappNumber: "919876543211",
    instagramLink: "https://instagram.com/pixelperfectpune",
    instagramHandle: "@pixelperfectpune",
    location: "Baner, Pune",
    address: "Plot 45, High Street, Baner, Pune - 411045",
    ctaText: "Check Shoot Dates",
    whatsappPrefill: "Hi Pixel Perfect, I'm interested in booking a photography session. Could you share your availability?",
    colors: {
      primary: "#0F172A",
      secondary: "#F8FAFC",
      accent: "#3B82F6",
    },
    stats: [
      { label: "Events Shot", value: "200+" },
      { label: "Experience", value: "8yr+" },
      { label: "Pune Based", value: "Verified" }
    ],
    aboutImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
    aboutText: "We believe every wedding is a cinematic experience waiting to be captured. Our team focuses on candid moments, genuine emotions, and the small details that make your day unforgettable. Based in Pune, we travel across the country to tell love stories.",
    services: [
      {
        title: "Full Wedding Coverage",
        price: "Starts ₹50,000",
        description: "Cinematic film, candid photography, and a premium coffee table book.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Pre-Wedding Shoot",
        price: "Starts ₹15,000",
        description: "A romantic 4-hour session at a premium location in Pune.",
        image: "https://images.unsplash.com/photo-1519741497674-611481883552?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Maternity Portraits",
        price: "Starts ₹10,000",
        description: "Celebrating your journey with elegant, artistic photography.",
        image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800&auto=format&fit=crop"
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
      { name: "Rahul & Sneha", text: "The photos are breathtaking. Every time we see the album, we relive the wedding day.", rating: 5 },
      { name: "Amit K.", text: "Professional team. They managed the crowd so well and didn't miss a single moment.", rating: 5 }
    ],
    process: [
      { title: "Discussion", description: "Meeting to understand your style and timeline." },
      { title: "Booking", description: "Lock the date with a 25% deposit." },
      { title: "The Shoot", description: "We capture your moments while you enjoy the day." },
      { title: "Delivery", description: "Edited high-res photos delivered in 4 weeks." }
    ],
    faqs: [
      { question: "How long until we get the photos?", answer: "Teasers in 48 hours, full gallery within 30 days." },
      { question: "Do you provide cinematic videos?", answer: "Yes, our team includes professional cinematographers." },
      { question: "Can we pick our own songs for the film?", answer: "Absolutely! We want the film to feel like yours." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612!2d73.78!3d18.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec47a32b95b%3A0x7d6f51e39b2b51!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 3: BAKERY / TIFFIN
  // ---------------------------------------------------------
  bakery: {
    name: "The Sugar Studio",
    niche: "Home Baker & Custom Cakes",
    tagline: "Handcrafted happiness delivered to your doorstep.",
    whatsappNumber: "919876543212",
    instagramLink: "https://instagram.com/sugarstudio_pune",
    instagramHandle: "@sugarstudio_pune",
    location: "Viman Nagar, Pune",
    address: "Datta Mandir Road, Viman Nagar, Pune - 411014",
    ctaText: "Order Now on WhatsApp",
    whatsappPrefill: "Hi Sugar Studio, I'd like to place an order for a custom cake. Could you share your menu?",
    colors: {
      primary: "#831843",
      secondary: "#FDF2F8",
      accent: "#DB2777",
    },
    stats: [
      { label: "Cakes Baked", value: "1000+" },
      { label: "Experience", value: "4yr+" },
      { label: "Pune Based", value: "Verified" }
    ],
    aboutImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    aboutText: "What started as a passion for baking in a small home kitchen in Viman Nagar has grown into Pune's favorite spot for custom celebration cakes. We use only the finest ingredients and zero preservatives to ensure every bite is as healthy as it is delicious.",
    services: [
      {
        title: "Designer Cakes",
        price: "Starts ₹1,200/kg",
        description: "Themed cakes for birthdays, anniversaries, and more.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Party Cupcakes",
        price: "Starts ₹600 for 6",
        description: "Deliciously decorated cupcakes to match your theme.",
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Gourmet Brownies",
        price: "Starts ₹500 for 4",
        description: "Rich, fudgy brownies made with the finest chocolate.",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800&auto=format&fit=crop"
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
      { name: "Meera P.", text: "The chocolate truffle cake was out of this world! Not too sweet, just perfect.", rating: 5 },
      { name: "Suresh Mani", text: "Ordered cupcakes for my daughter's birthday. They looked so cute and tasted even better.", rating: 5 }
    ],
    process: [
      { title: "Pick a Design", description: "Send us your inspiration or pick from our favorites." },
      { title: "Confirm Order", description: "Finalize flavors and pay 50% to confirm." },
      { title: "Baking Fresh", description: "Everything is baked fresh just hours before delivery." },
      { title: "Pick/Delivery", description: "Collect from Viman Nagar or get it delivered." }
    ],
    faqs: [
      { question: "How far in advance should I order?", answer: "At least 48 hours for custom designs." },
      { question: "Do you offer healthy options?", answer: "Yes, we can do jaggery-based and whole wheat bakes on request." },
      { question: "What is the delivery charge?", answer: "Free within 2km. Charges apply for further locations." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.c147b8b2135d%3A0xbb0d9f4de195748!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 4: PG / HOSTEL / RENTAL
  // ---------------------------------------------------------
  pg_hostel: {
    name: "StayEase Premium PG",
    niche: "Luxury Living for Professionals",
    tagline: "Your home away from home in the heart of Pune.",
    whatsappNumber: "919876543213",
    instagramLink: "https://instagram.com/stayeasepune",
    instagramHandle: "@stayeasepune",
    location: "Hinjewadi, Pune",
    address: "Phase 1, Near IT Park, Hinjewadi, Pune - 411057",
    ctaText: "Book a Visit",
    whatsappPrefill: "Hi StayEase, I'm looking for a premium room in Hinjewadi. Can I schedule a visit?",
    colors: {
      primary: "#1E293B",
      secondary: "#F1F5F9",
      accent: "#0F172A",
    },
    stats: [
      { label: "Tenants", value: "100+" },
      { label: "Properties", value: "3+" },
      { label: "Pune Based", value: "Verified" }
    ],
    aboutImage: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=800&auto=format&fit=crop",
    aboutText: "We redefine PG living by offering more than just a room. Our properties in Hinjewadi are curated for working professionals who value privacy, cleanliness, and a strong sense of community. From high-speed Wi-Fi to gourmet meals, we take care of everything so you can focus on your career.",
    services: [
      {
        title: "Single Occupancy",
        price: "₹18,000/mo",
        description: "Spacious private room with attached balcony and workspace.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Double Sharing",
        price: "₹12,000/mo",
        description: "Large shared room with individual cupboards and study tables.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Triple Sharing",
        price: "₹9,000/mo",
        description: "Budget-friendly luxury with all premium amenities included.",
        image: "https://images.unsplash.com/photo-1555854816-808226a0f517?q=80&w=800&auto=format&fit=crop"
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
      { name: "Vikram R.", text: "Best PG in Hinjewadi. The food is actually good and the Wi-Fi is super fast.", rating: 5 },
      { name: "Sana Khan", text: "Very safe for women. The housekeeping staff is polite and efficient.", rating: 5 }
    ],
    process: [
      { title: "Schedule Visit", description: "Come see the rooms and amenities in person." },
      { title: "Pick Your Room", description: "Choose based on occupancy and view preference." },
      { title: "Quick Paperwork", description: "Submit ID proof and sign the agreement digitally." },
      { title: "Move In", description: "Collect your keys and start your premium stay!" }
    ],
    faqs: [
      { question: "Is food included in the rent?", answer: "Yes, breakfast and dinner on weekdays, all 3 meals on weekends." },
      { question: "What about electricity bills?", answer: "Sub-metered for AC rooms, included for non-AC rooms." },
      { question: "What is the security deposit?", answer: "One month's rent as a refundable security deposit." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.c147b8b2135d!2d73.74!3d18.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb0f8c8574e1%3A0x6739938b813295!2sHinjewadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  },

  // ---------------------------------------------------------
  // NICHE 5: CAR DETAILING / SERVICES
  // ---------------------------------------------------------
  car_detailing: {
    name: "Elite Auto Spa",
    niche: "Professional Car Detailing",
    tagline: "Give your car the showroom shine it deserves.",
    whatsappNumber: "919876543214",
    instagramLink: "https://instagram.com/eliteautospa",
    instagramHandle: "@eliteautospa",
    location: "Kalyani Nagar, Pune",
    address: "Lane 7, Near Jogger's Park, Kalyani Nagar, Pune - 411006",
    ctaText: "Book Service",
    whatsappPrefill: "Hi Elite Auto Spa, I'd like to book a detailing session for my car. What are your available slots?",
    colors: {
      primary: "#000000",
      secondary: "#111827",
      accent: "#DC2626",
    },
    stats: [
      { label: "Cars Served", value: "1500+" },
      { label: "Experience", value: "10yr+" },
      { label: "Pune Based", value: "Verified" }
    ],
    aboutImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop",
    aboutText: "We are more than just a car wash. Elite Auto Spa is a state-of-the-art detailing studio in Kalyani Nagar. We use international-grade coatings and professional-grade machinery to ensure your vehicle gets the protection and shine it truly deserves.",
    services: [
      {
        title: "Ceramic Coating",
        price: "Starts ₹12,000",
        description: "9H Nano-ceramic coating with 3 years of paint protection guarantee.",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Interior Deep Clean",
        price: "Starts ₹2,500",
        description: "Steam cleaning, vacuuming, and leather conditioning for a fresh cabin.",
        image: "https://images.unsplash.com/photo-1552933153-43d440c8375e?q=80&w=800&auto=format&fit=crop"
      },
      {
        title: "Full Exterior Detail",
        price: "Starts ₹4,000",
        description: "Clay bar treatment, 3-step polishing, and premium wax finish.",
        image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=800&auto=format&fit=crop"
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
      { name: "Rohan M.", text: "My 5-year old car looks brand new after the ceramic coating. Exceptional service!", rating: 5 },
      { name: "Karan J.", text: "The interior cleaning was very thorough. They even removed the tough coffee stains.", rating: 5 }
    ],
    process: [
      { title: "Inspection", description: "We assess your car's paint and interior condition." },
      { title: "Quote", description: "Transparent pricing based on vehicle size and service." },
      { title: "The Work", description: "6-12 hours of meticulous detailing by experts." },
      { title: "Final Reveal", description: "Collect your car in pristine, showroom condition." }
    ],
    faqs: [
      { question: "How long does a full detail take?", answer: "Usually 6-8 hours depending on the condition of the car." },
      { question: "Do you offer doorstep service?", answer: "Yes, for basic detailing. Ceramic coating is only done at our studio." },
      { question: "What brands do you use?", answer: "We use professional products from Meguiar's, 3M, and Koch Chemie." }
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.c147b8b2135d!2d73.90!3d18.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1ad90a4970f!2sKalyani%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin"
  }
};
