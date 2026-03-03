import { ArrowRight, CheckCircle2, TrendingUp, Star, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5531990858563?text=Olá! Quero vender mais no iFood!";

const badges = [
  "Gestão diária",
  "Estratégia + execução",
  "100% personalizada",
];

const floatingCards = [
  { icon: TrendingUp, label: "+47% vendas", delay: 0 },
  { icon: Star, label: "4.9 estrelas", delay: 0.2 },
  { icon: BarChart3, label: "Top 5 ranking", delay: 0.4 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden noise-bg">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(0_85%_40%/0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(280_80%_40%/0.1),transparent_60%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Especialistas em delivery
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              GESTÃO PROFISSIONAL DE LOJA NO{" "}
              <span className="gradient-text">IFOOD</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
              Seu delivery nas mãos de especialistas focados em <strong className="text-foreground">crescimento e lucro</strong>.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-xl">
              Se sua loja está estagnada no iFood, nós assumimos a gestão completa para você focar apenas na operação.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground gap-2 glow-primary text-base px-8">
                  QUERO VENDER MAIS NO IFOOD
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground gap-2 text-base"
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                SOLICITAR DIAGNÓSTICO GRATUITO
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-6 relative"
          >
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + card.delay, duration: 0.5 }}
                className={`gradient-border rounded-2xl bg-card p-6 flex items-center gap-4 w-64 animate-float`}
                style={{ animationDelay: `${i * 2}s` }}
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display text-lg font-semibold text-foreground">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
