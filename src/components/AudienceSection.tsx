import { motion } from "framer-motion";
import { Store, Briefcase, Headset } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Donos",
    text: "Quem precisa de alguém que assuma a gestão da loja nas plataformas e proteja o resultado do negócio.",
  },
  {
    icon: Briefcase,
    title: "Donos que também gerem",
    text: "Quem divide o tempo entre a cozinha, a equipe e as plataformas e precisa de método para não decidir no escuro.",
  },
  {
    icon: Headset,
    title: "Gestores e operadores",
    text: "Quem conduz o expediente e precisa de direção clara sobre cardápio, reputação, cancelamentos e prioridades do dia.",
  },
];

const AudienceSection = () => {
  return (
    <section id="para-quem" className="relative py-16 lg:py-24">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10 lg:mb-14"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">Para quem é</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
            Feito para quem responde pela operação
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A consultoria é direcionada a donos, donos que também gerem e operadores de delivery. O trabalho acompanha a estrutura real da loja, não um modelo genérico de anúncio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {audiences.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
