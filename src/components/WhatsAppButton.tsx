import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/antoniomelo.consultoriabh?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+gest%C3%A3o+de+delivery";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/30"
      aria-label="Chamar no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;
