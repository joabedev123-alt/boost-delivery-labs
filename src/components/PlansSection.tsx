import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/5531990858563?text=Olá! Tenho interesse no plano";

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
    <section id="planos" className="relative py-24 noise-bg">
      <div className="section-divider mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">Planos</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
            Invista no <span className="gradient-text">crescimento</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Escolha o plano ideal e comece a transformar seus resultados no iFood.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured
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

              <h3 className="text-xl font-display font-bold text-foreground mb-2 mt-2">{plan.name}</h3>
              <div className="text-3xl font-display font-bold gradient-text mb-1">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{plan.installment}</p>

              <div className="space-y-3 mb-8">
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
                  className={`w-full ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
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
