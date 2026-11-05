import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link, useLocation } from "react-router-dom";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "A empresa", to: "/a-empresa" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Para quem", to: "/para-quem" },
  { label: "Planos", to: "/planos" },
  { label: "Formação", to: "/formacao" },
  { label: "Garçonet", to: "/garconet" },
  { label: "Clientes", to: "/clientes" },
  { label: "Contato", to: "/contato" },
];

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de saber mais sobre a consultoria de delivery.");

const itemClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "min-h-11 cursor-pointer text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  );

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-3 py-2 sm:py-3">
        <Link
          to="/"
          className="flex min-h-11 cursor-pointer items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="AM Consultoria, página inicial"
        >
          <img
            src="/WhatsApp Image 2026-03-03 at 11.50.48.jpeg"
            alt="AM Consultoria"
            className="h-10 w-auto max-w-[9.5rem] object-contain sm:h-12 sm:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Páginas">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={itemClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="min-h-11 cursor-pointer gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a consultoria
            </Button>
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-foreground xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border/60 xl:hidden"
          >
            <nav className="flex flex-col px-4 py-3" aria-label="Páginas">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-11 items-center text-base",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button className="min-h-11 w-full cursor-pointer gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <WhatsAppIcon className="h-4 w-4" />
                  Falar com a consultoria
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
