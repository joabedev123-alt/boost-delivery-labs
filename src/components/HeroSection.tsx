import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";
import fotohero from "@/assets/fotohero.png";

const WHATSAPP_URL = whatsappLink(
  "Olá! Quero conversar sobre a gestão da minha loja de delivery."
);

const proofs = [
  "Mais de 1.500 lojas atendidas",
  "Gestão com execução no dia a dia",
  "Direcionado a donos, gestores e operadores",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(0_85%_40%/0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(280_80%_40%/0.14),transparent_60%)]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              AM Consultoria
            </p>
            <h1 className="mb-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Gestão profissional para quem conduz o delivery
            </h1>
            <p className="mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Consultoria para donos, gestores e operadores que precisam de método nas plataformas, sem abandonar a cozinha.
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              A AM Consultoria assume a leitura da loja, o cardápio e o acompanhamento da operação para que o crescimento venha com lucro e com menos improviso.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="min-h-11 w-full cursor-pointer gap-2 text-primary-foreground">
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  Falar com a consultoria
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="min-h-11 w-full cursor-pointer border-border bg-transparent sm:w-auto hover:bg-secondary"
                onClick={() => document.querySelector("#planos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver formas de contratação
              </Button>
            </div>

            <ul className="space-y-3">
              {proofs.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-border/60 bg-card p-3 sm:p-4"
          >
            <img
              src={fotohero}
              alt="Painel de acompanhamento da operação de delivery"
              className="aspect-video w-full rounded-xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
