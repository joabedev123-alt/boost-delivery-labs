import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Oliveira",
    business: "Burger House BH",
    text: "Em 2 meses as vendas subiram 60%. A gestão de cupons e ranqueamento fez toda diferença!",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    business: "Sushi Express",
    text: "Paramos de perder dinheiro com cancelamentos. O suporte é rápido e sempre presente.",
    stars: 5,
  },
  {
    name: "Ricardo Santos",
    business: "Pizza do Rê",
    text: "Melhor investimento que fiz pro meu delivery. Profissionais sérios e comprometidos.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Quem confia em nós, <span className="gradient-text">cresce</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-8 hover:glow-primary transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
