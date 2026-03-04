import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/antoniomelo.consultoriabh?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+gest%C3%A3o+de+delivery";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY || current < 80);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 z-50 rounded-2xl border border-border/50 bg-background/70 backdrop-blur-xl"
        >
          <div className="container flex items-center justify-between py-2 sm:py-3 px-4 sm:px-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center py-1 sm:py-2">
              <img src="/WhatsApp Image 2026-03-03 at 11.50.48.jpeg" alt="AM Consultoria Logo" className="h-12 sm:h-20 md:h-24 w-auto object-contain" />
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollTo("#contato")}
                className="text-muted-foreground hover:text-foreground"
              >
                Solicitar Diagnóstico
              </Button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-[#25D366] hover:to-[#20BD5A] hover:text-white transition-all duration-300 text-primary-foreground gap-2 border-none">
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden border-t border-border/50"
              >
                <div className="px-6 py-4 flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollTo(item.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-[#25D366] hover:to-[#20BD5A] hover:text-white transition-all duration-300 text-primary-foreground gap-2 border-none">
                      <WhatsAppIcon className="w-4 h-4" />
                      Chamar no WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
