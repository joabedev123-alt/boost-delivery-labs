import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const offerings = [
  {
    name: "Gestão personalizada",
    kicker: "Consultoria contínua",
    price: null as string | null,
    priceNote: "Desenhado conforme a estrutura da loja",
    description:
      "Planos personalizados, desenhados de acordo com a estrutura do seu negócio. O escopo e o ritmo saem do diagnóstico, não de um pacote fechado.",
    points: [
      "Gestão da loja nas plataformas",
      "Acompanhamento da operação",
      "Prioridades definidas com o responsável pela loja",
    ],
    cta: "Falar sobre a gestão",
    message: "Olá! Quero um plano de gestão personalizado para a minha loja.",
  },
  {
    name: "Implementação de cardápio",
    kicker: "Contratação avulsa",
    price: null,
    priceNote: "Somente o cardápio",
    description:
      "Contratação exclusiva para estruturar e implementar o cardápio, sem a gestão contínua da loja.",
    points: [
      "Organização de categorias e itens",
      "Ajustes de apresentação e conversão",
      "Entrega focada na implementação do cardápio",
    ],
    cta: "Contratar o cardápio",
    message: "Olá! Quero contratar somente a implementação de cardápio.",
  },
  {
    name: "Análise de loja",
    kicker: "Diagnóstico",
    price: "R$ 500",
    priceNote: "Relatório completo",
    description:
      "Contratação somente da análise. A entrega é um relatório detalhado para orientar a evolução da loja nas plataformas.",
    points: [
      "Histórico da loja",
      "Sinalização de problemas e soluções",
      "Pontos fortes dos concorrentes no nicho da cozinha",
      "Ajustes necessários e direcionamentos para uma evolução consistente",
    ],
    cta: "Contratar a análise",
    message: "Olá! Quero contratar a análise de loja por R$ 500.",
  },
  {
    name: "Lojas novas",
    kicker: "Condição de entrada",
    price: null,
    priceNote: "Condições especiais",
    description:
      "Planos especiais e econômicos para lojas novas, alinhados ao momento de quem ainda está estruturando a operação.",
    points: [
      "Entrada pensada para quem está começando",
      "Organização inicial da presença nas plataformas",
      "Condições conversadas de acordo com a loja",
    ],
    cta: "Falar sobre loja nova",
    message: "Olá! Tenho uma loja nova e quero conhecer os planos especiais.",
  },
];

const PlansSection = () => {
  return (
    <section id="planos" className="relative py-16 lg:py-24 noise-bg">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-10 lg:mb-14"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">Contratação</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
            Formas de começar, sem pacote genérico
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A gestão contínua é personalizada. Também é possível contratar só a implementação do cardápio ou só a análise da loja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {offerings.map((offer, i) => (
            <motion.article
              key={offer.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{offer.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">{offer.name}</h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{offer.description}</p>

              <div className="mt-6">
                {offer.price ? (
                  <p className="font-display text-3xl font-bold text-foreground">{offer.price}</p>
                ) : (
                  <p className="font-display text-xl font-semibold text-foreground">Sob conversa</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{offer.priceNote}</p>
              </div>

              <ul className="my-6 space-y-3">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(offer.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="min-h-11 w-full cursor-pointer gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  <WhatsAppIcon className="h-4 w-4" />
                  {offer.cta}
                </Button>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
