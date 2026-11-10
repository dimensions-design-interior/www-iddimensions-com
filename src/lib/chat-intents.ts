// Shared customer-intent detection for the website chat assistant.
// The same intents power WhatsApp auto-replies once the WhatsApp
// Business connection is enabled — keep this module browser-safe.
import { STUDIO_ADDRESS, BUSINESS_PHONE, BUSINESS_EMAIL } from "./seo/site";

export interface ChatIntent {
  intent: string;
  patterns: RegExp[];
  reply: string;
}

export interface DetectedReply {
  intent: string;
  reply: string;
}

export const customerIntents: ChatIntent[] = [
  {
    intent: "greeting",
    patterns: [
      /\b(hi|hii+|hello|hey|namaste|good morning|good afternoon|good evening)\b/i,
      /(नमस्ते|हैलो|हाय)/i,
    ],
    reply:
      "Namaste! Dimensions Designs Interior में आपका स्वागत है। मैं आपकी interior design से जुड़े सवालों में मदद कर सकता हूँ — cost, modular kitchen, home या office interiors, कुछ भी पूछें।",
  },
  {
    intent: "interior_cost",
    patterns: [
      /\b(cost|price|pricing|budget|rate|charges|quotation|estimate)\b/i,
      /(kitna|kharacha|kharcha|lagat|daam|कीमत|खर्च|रेट|बजट)/i,
    ],
    reply:
      "Interior design की लागत आपके area, design, material और project scope पर निर्भर करती है। हम detailed line-item estimate देते हैं ताकि हर रुपये का हिसाब रहे। कृपया अपना property size और requirements बताएं, या consultation book करें।",
  },
  {
    intent: "home_interior",
    patterns: [
      /\b(home|house|residential|apartment|flat|villa)\b/i,
      /(ghar|makaan|फ्लैट|घर|मकान|विला)/i,
    ],
    reply:
      "हम आपके घर के लिए customized interior design और turnkey solutions प्रदान करते हैं — apartments, flats और villas सभी के लिए। आपका घर कितने BHK का है?",
  },
  {
    intent: "modular_kitchen",
    patterns: [
      /\b(modular kitchen|kitchen design|kitchen cabinet)\b/i,
      /(modular kitchen|rasoi|रसोई|किचन)/i,
    ],
    reply:
      "हम modular kitchen को आपकी जगह, जरूरत और budget के अनुसार design करते हैं — premium boards, durable laminates और branded hardware के साथ। आपकी kitchen का size कितना है?",
  },
  {
    intent: "bedroom",
    patterns: [
      /\b(bedroom|master bedroom|wardrobe|bed design)\b/i,
      /(bedroom|bed|almirah|बेडरूम|अलमारी)/i,
    ],
    reply:
      "हम modern bedroom, wardrobe और customized furniture design करते हैं। कितने bedrooms का काम करवाना है?",
  },
  {
    intent: "living_room",
    patterns: [
      /\b(living room|drawing room|tv unit|sofa|false ceiling)\b/i,
      /(living room|drawing room|टीवी यूनिट|ड्राइंग रूम)/i,
    ],
    reply:
      "हम living room के लिए TV unit, ceiling, lighting और premium furniture design करते हैं।",
  },
  {
    intent: "office_commercial",
    patterns: [
      /\b(office|commercial|shop|showroom|restaurant|cafe|hotel|salon)\b/i,
      /(ऑफिस|दुकान|शोरूम|रेस्टोरेंट|कैफे|होटल)/i,
    ],
    reply:
      "हम office और commercial spaces के लिए professional interior design और execution solutions देते हैं। आपका project किस प्रकार का है?",
  },
  {
    intent: "turnkey",
    patterns: [
      /\b(turnkey|end to end|complete interior|full interior|material and labour)\b/i,
      /(पूरा काम|सामान सहित|मटेरियल सहित|लेबर सहित|टर्नकी)/i,
    ],
    reply:
      "Turnkey solution में design, material, labour और execution को एक coordinated process में संभाला जाता है — आपको अलग-अलग contractors की चिंता नहीं करनी पड़ती।",
  },
  {
    intent: "material",
    patterns: [
      /\b(material|plywood|laminate|marble|hardware|paint|furniture)\b/i,
      /(मटेरियल|प्लाई|लैमिनेट|मार्बल|हार्डवेयर)/i,
    ],
    reply:
      "हम project requirements और budget के अनुसार material options और specifications समझाते हैं — premium-grade boards, durable laminates और genuine branded hardware with warranty।",
  },
  {
    intent: "timeline",
    patterns: [
      /\b(time|timeline|duration|days|delivery|completion)\b/i,
      /(कितने दिन|कितना समय|कब तक|समय)/i,
    ],
    reply:
      "Project completion का समय area, design और work scope पर निर्भर करता है। Consultation के बाद हम एक clear timeline के साथ detailed estimate share करते हैं।",
  },
  {
    intent: "consultation",
    patterns: [
      /\b(consultation|appointment|site visit|meeting|designer)\b/i,
      /(मुलाकात|साइट विजिट|कंसल्टेशन|डिजाइनर)/i,
    ],
    reply:
      "आपकी requirements समझने के लिए consultation और site visit की व्यवस्था की जा सकती है। नीचे 'Request a Consultation' पर click करें या हमें WhatsApp करें।",
  },
  {
    intent: "location",
    patterns: [
      /\b(lucknow|location|service area|near me|available in)\b/i,
      /(लखनऊ|कहां काम करते|कौन से शहर)/i,
    ],
    reply:
      `हमारा एकमात्र studio: ${STUDIO_ADDRESS}। हम Lucknow और अन्य भारतीय शहरों के projects accept करते हैं। कृपया अपना project location बताएं।`,
  },
  {
    intent: "contact",
    patterns: [
      /\b(contact|phone|call|whatsapp|number|email|address)\b/i,
      /(कॉन्टैक्ट|फोन|मोबाइल|व्हाट्सएप|नंबर)/i,
    ],
    reply:
      `आप हमें ${BUSINESS_PHONE} पर call या WhatsApp कर सकते हैं, या ${BUSINESS_EMAIL} पर email करें। हमारा studio: ${STUDIO_ADDRESS}।`,
  },
  {
    intent: "thanks",
    patterns: [/\b(thanks|thank you|thx|ok thanks)\b/i, /(धन्यवाद|शुक्रिया)/i],
    reply:
      "आपका बहुत-बहुत धन्यवाद! कोई और सवाल हो तो बेझिझक पूछें — या consultation book करके अपने project की शुरुआत करें।",
  },
];

export function detectCustomerQuestion(message: string): DetectedReply {
  const question = message.toLowerCase().trim();

  for (const item of customerIntents) {
    if (item.patterns.some((regex) => regex.test(question))) {
      return { intent: item.intent, reply: item.reply };
    }
  }

  return {
    intent: "unknown",
    reply:
      "Thank you for contacting us! कृपया बताएं कि आपको Home, Office या Commercial Interior Design की आवश्यकता है? आप नीचे दिए topics में से भी चुन सकते हैं।",
  };
}

export const quickPrompts: { label: string; message: string }[] = [
  { label: "Interior cost", message: "Interior design ka kitna cost aayega?" },
  { label: "Modular kitchen", message: "Modular kitchen design ke baare mein batayein" },
  { label: "Home interiors", message: "Mere ghar ke liye interior design chahiye" },
  { label: "Office interiors", message: "Office interior design services" },
  { label: "Book consultation", message: "Mujhe consultation book karni hai" },
];
