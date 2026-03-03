import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/antoniomelo.consultoriabh?text=Ol%C3%A1%21+Tenho+interesse+no+plano";

const plans = [
  {
    name: "3 Meses",
    price: "R$ 4.500",
    installment: "3x de R$ 1.500,00",
    featured: false,
  },
  {
    name: "12 Meses",
    price: "R$ 12.000",
    installment: "12x de R$ 1.000,00",
    featured: true,
    badge: "MAIS RECOMENDADO",
  },
  {
    name: "6 Meses",
    price: "R$ 7.500",
    installment: "6x de R$ 1.250,00",
    featured: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="relative py-16 lg:py-24 noise-bg">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16 px-4"
        >
          <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-widest">Planos</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Invista no <span className="gradient-text">crescimento</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Escolha o plano ideal e comece a transformar seus resultados no iFood.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start px-4 sm:px-0">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.featured
                ? "gradient-border bg-card scale-105 glow-primary"
                : "border border-border/50 bg-card"
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-primary-foreground flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-1 sm:mb-2 mt-2">{plan.name}</h3>
              <div className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">{plan.price}</div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">{plan.installment}</p>

              <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Gestão completa iFood
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Acompanhamento diário
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Relatórios mensais
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Suporte via WhatsApp
                </div>
              </div>

              <a href={`${WHATSAPP_URL} de ${plan.name}`} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full gap-2 transition-all duration-300 ${plan.featured
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-[#25D366] hover:to-[#20BD5A] hover:text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-[#25D366] hover:text-white"
                    }`}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  QUERO ESSE PLANO
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            10% de desconto à vista no Pix
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Continuidade opcional após o contrato
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
