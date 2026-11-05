import { motion } from "framer-motion";
import { Gem, Gift, AlertCircle } from "lucide-react";

const DifferentialSection = () => {
  return (
    <section id="diferencial" className="relative py-16 lg:py-24 noise-bg">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16 px-4"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">Método</span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold mt-3">
            O que sustenta a consultoria
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-2xl bg-card p-8"
          >
            <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
              <Gem className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3 text-foreground">Gestão Multiplataformas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ajustamos seu cardápio e estratégias na 99 Food ou Keeta, visando não atrapalhar o desenvolvimento do iFood, pois é a plataforma mais sólida no cenário de delivery.
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
            <h3 className="text-lg font-display font-semibold mb-3 text-foreground">Multilojas</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Condições especiais para quem opera mais de uma loja no iFood, com desenvolvimento das marcas e uma gestão que não trata cada unidade como um caso isolado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
