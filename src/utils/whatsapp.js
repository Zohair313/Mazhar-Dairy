import siteData from '../data/site-data.json';

const WHATSAPP_NUMBER = siteData.business.phones.whatsapp_raw;

/**
 * Builds a direct WhatsApp URL with pre-filled text.
 * @param {string} text - The unencoded message text.
 * @returns {string} - The full wa.me link.
 */
export function buildWhatsAppLink(text) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Generates a pre-filled WhatsApp inquiry for a specific product and tier.
 * @param {object} product - Product object from site-data.json
 * @param {'business' | 'home'} tier - Active catalogue tier
 * @param {'en' | 'ur'} lang - Current language
 * @returns {string} - URL
 */
export function buildProductInquiryLink(product, tier, lang = 'en') {
  const isUrdu = lang === 'ur';
  const productName = isUrdu ? product.name_ur : product.name_en;

  if (tier === 'business') {
    const text = isUrdu
      ? `السلام علیکم مظہر ڈیری، میں کمرشل سپلائی کے لیے "${productName}" کے ہول سیل ریٹس اور کم از کم آرڈر شیڈول معلوم کرنا چاہتا ہوں۔`
      : `Hello Mazhar Dairy, I would like to inquire about commercial wholesale rates and delivery availability for "${productName}".`;
    return buildWhatsAppLink(text);
  } else {
    const text = isUrdu
      ? `السلام علیکم مظہر ڈیری، میں ریٹیل / گھریلو استعمال کے لیے "${productName}" آرڈر کرنا چاہتا ہوں۔ برائے مہربانی موجودہ ریٹ اور ڈلیوری کی تفصیل بتائیں۔`
      : `Hello Mazhar Dairy, I want to order "${productName}" for retail/home use. Please confirm current counter price and availability.`;
    return buildWhatsAppLink(text);
  }
}

/**
 * Generates WhatsApp payload from the wholesale quote request form.
 * @param {object} formData - Form fields { businessName, businessType, city, items, monthlyVolume }
 * @param {'en' | 'ur'} lang - Current language
 * @returns {string} - URL
 */
export function buildWholesaleFormLink(formData, lang = 'en') {
  const isUrdu = lang === 'ur';
  const { businessName, businessType, city, items, monthlyVolume } = formData;

  if (isUrdu) {
    const text = `السلام علیکم مظہر ڈیری (سیلز ڈیسک)،\n\nہمیں اپنے کمرشل کچن کے لیے ہول سیل ریٹ لسٹ اور سپلائی کی تفصیلات درکار ہیں:\n• ادارے کا نام: ${businessName || 'درج نہیں'}\n• کاروبار کی نوعیت: ${businessType || 'کمرشل کچن'}\n• شہر / علاقہ: ${city || 'راولپنڈی / اسلام آباد'}\n• مطلوبہ آئٹمز: ${items || 'چیز و ڈیری پروڈکٹس'}\n• ماہانہ تخمینہ مقدار: ${monthlyVolume || 'نامعلوم'}\n\nبرائے مہربانی اپنا آفیشل ریٹ شیٹ اور ڈلیوری شیڈول شیئر فرمائیں۔ شکریہ!`;
    return buildWhatsAppLink(text);
  } else {
    const text = `Hello Mazhar Dairy (Wholesale Desk),\n\nWe would like to request commercial wholesale pricing for our kitchen:\n• Business Name: ${businessName || 'N/A'}\n• Business Type: ${businessType || 'Commercial Kitchen'}\n• Location/City: ${city || 'Rawalpindi / Islamabad'}\n• Items Needed: ${items || 'Dairy items'}\n• Approx. Monthly Volume: ${monthlyVolume || 'N/A'}\n\nPlease share your current B2B rate sheet and weekly delivery schedule. Thank you!`;
    return buildWhatsAppLink(text);
  }
}

/**
 * Generic Rate List WhatsApp Request.
 */
export function buildGeneralRateListLink(lang = 'en') {
  const isUrdu = lang === 'ur';
  const text = isUrdu
    ? `السلام علیکم مظہر ڈیری، برائے مہربانی پیزیریاز اور ہوٹلز کے لیے اپنی تازہ ترین ہول سیل کمرشل ریٹ لسٹ واٹس ایپ فرما دیں۔ شکریہ!`
    : `Hello Mazhar Dairy, please share your official wholesale commercial dairy rate list for Twin Cities kitchens. Thank you!`;
  return buildWhatsAppLink(text);
}

