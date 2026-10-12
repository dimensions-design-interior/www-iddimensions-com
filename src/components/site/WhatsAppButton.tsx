import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919670001155";
const WHATSAPP_MESSAGE =
  "Hi, I visited Dimensions Designs Interior and would like to discuss a consultation for my space.";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 bg-whatsapp px-5 py-3.5 text-whatsapp-foreground shadow-whatsapp transition-transform motion-safe:hover:scale-105"
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
        WhatsApp Us
      </span>
    </a>
  );
}

export function WhatsAppLink({
  children,
  className,
  customMessage,
}: {
  children: React.ReactNode;
  className?: string;
  customMessage?: string;
}) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    customMessage ?? WHATSAPP_MESSAGE
  )}`;

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
