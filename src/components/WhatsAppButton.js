import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%20Almuhayatsyah%20Studio,%20saya%20mau%20tanya%20jasa%20website"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
