const WHATSAPP_NUMBER = '919755160469';

export function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
