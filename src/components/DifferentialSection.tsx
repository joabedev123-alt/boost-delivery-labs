import { motion } from "framer-motion";
import { Gem, Gift, AlertCircle } from "lucide-react";

const DifferentialSection = () => {
  return (
    <section id="diferencial" className="relative py-24 noise-bg">
      <div className="section-divider mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-accent font-medium uppercase tracking-widest">Diferencial</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            O que nos torna <span className="gradient-text">únicos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl bg-card p-8"
          >
            <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
              <Gem className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3 text-foreground">Gestão Multi-plataforma</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ajustamos seu cardápio na 99 Food sem prejudicar o desempenho do iFood, mantendo equilíbrio entre plataformas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="gradient-border rounded-2xl bg-card p-8"
          >
            <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3 text-foreground">Bônus Exclusivo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Atualização do cardápio digital caso esteja integrado ao iFood — sem custo adicional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gradient-border rounded-2xl bg-card p-8"
          >
            <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
              <AlertCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3 text-foreground">99 Food</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gestão da 99 Food disponível com acréscimo de R$ 500,00 na mensalidade para máximo alcance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
