import { motion } from "framer-motion";

const facts = [
  { value: "1.500+", label: "lojas atendidas entre credenciamentos e consultorias" },
  { value: "Diário", label: "acompanhamento da operação, não só uma auditoria pontual" },
  { value: "Lucro", label: "crescimento tratado junto com cancelamento, reputação e margem" },
];

const ObjectiveSection = () => {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border/60 bg-card px-6 py-10 sm:px-10"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Como trabalhamos</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Vender mais só vale quando a operação continua lucrativa.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.value}>
                <p className="font-display text-3xl font-semibold text-foreground">{fact.value}</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
