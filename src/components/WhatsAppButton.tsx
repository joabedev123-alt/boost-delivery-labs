import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de saber mais sobre a consultoria de delivery.");

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#20BD5A]"
      aria-label="Chamar no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
