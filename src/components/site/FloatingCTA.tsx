import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/923255333222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-glow hover:scale-110 hover:-translate-y-1 transition-all animate-float"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+923255333222"
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-brand text-brand-foreground flex items-center justify-center shadow-glow hover:scale-110 hover:-translate-y-1 transition-all"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
