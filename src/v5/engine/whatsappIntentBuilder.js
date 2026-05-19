/**
 * V5 WhatsApp Intent Builder
 * --------------------------
 * Generates dynamic prefilled messages based on interaction context.
 */

export const buildWhatsAppIntent = (phone, niche, action, details = {}) => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");

  const baseMessages = {
    tattoo_studio: {
      consultation: "Hi Obsidian! I have a custom tattoo idea I'd like to discuss for Koregaon Park studio.",
      availability: "Hi! Checking your available slots for a fine-line/realism session.",
      pricing: "Hi! Can you provide a rough estimate for a tattoo of [size] on [placement]?"
    },
    home_baker: {
      order: "Hi Mira! I'd like to place an order for a custom cake. Is [date] available?",
      menu: "Hi! Could you share your latest cake and dessert menu?",
      delivery: "Hi! Do you deliver to [area] in Pune?"
    },
    car_detailing: {
      quote: "Hi Axis! I'd like a ceramic coating quote for my [car model].",
      booking: "Hi! Checking availability for a full interior/exterior detail session.",
      maintenance: "Hi! I have a question about maintaining my existing coating."
    }
  };

  const message = baseMessages[niche]?.[action] || "Hi! I'm interested in your services. Please share more details.";

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
