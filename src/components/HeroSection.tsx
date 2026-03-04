import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import fotohero from "@/assets/fotohero.png";

const WHATSAPP_URL = "https://wa.me/antoniomelo.consultoriabh?text=Ol%C3%A1%21+Quero+vender+mais+no+iFood%21";

const badges = [
  "Gestão diária",
  "Estratégia + execução",
  "100% personalizada",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden noise-bg">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs sm:text-sm text-primary mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Especialistas em delivery
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 sm:mb-6">
              GESTÃO PROFISSIONAL DE LOJA NO{" "}
              <span className="gradient-text">IFOOD</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 max-w-xl leading-relaxed">
              Seu delivery nas mãos de especialistas focados em <strong className="text-foreground">crescimento e lucro</strong>.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-xl">
              Se sua loja está estagnada no iFood, se você está perdendo dinheiro com fraudes e cancelamentos indevidos ou você precisa otimizar o seu tempo, deixe sua gestão com a gente e foque apenas na produção dos pratos!
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:from-[#25D366] hover:to-[#20BD5A] text-primary-foreground hover:text-white transition-all duration-300 gap-2 glow-primary text-sm sm:text-base px-6 sm:px-8 border-none">
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span className="truncate">QUERO VENDER MAIS NO IFOOD</span>
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {badges.map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center w-full h-full relative mt-8 lg:mt-0"
          >
            {/* Imagem Hero */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20 bg-card/30 flex items-center justify-center backdrop-blur-sm p-2 sm:p-4">
              <img
                src={fotohero}
                alt="AM Consultoria Hero"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
