/**
 * WhatsApp Lead Generator Utility
 */
export const getWhatsAppUrl = (phone, message) => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
