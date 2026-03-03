import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Em quanto tempo vejo resultado?",
    a: "Os primeiros resultados geralmente aparecem nas primeiras 2 a 4 semanas. Melhorias consistentes de ranqueamento e vendas são percebidas a partir do segundo mês.",
  },
  {
    q: "Vocês mexem no cardápio e preços?",
    a: "Sim! Realizamos uma análise completa e propomos ajustes estratégicos no cardápio e na precificação para maximizar lucro e conversão.",
  },
  {
    q: "Funciona para qualquer tipo de restaurante?",
    a: "Sim, atendemos hamburguerias, pizzarias, japonês, comida caseira, açaí e muito mais. A estratégia é sempre personalizada.",
  },
  {
    q: "Como funciona o suporte?",
    a: "O suporte é feito via Grupo de WhatsApp exclusivo da sua operação de segunda a domingo, de 09:00 às 22:45. (horário que se encerra o suporte via chat do iFood).",
  },
  {
    q: "Posso contratar iFood e 99 Food juntos?",
    a: "Sim! A gestão de 99 Food tem um adicional de R$500,00 na mensalidade. Para que seu iFood funcione bem é necessário tomar cuidados e ter uma gestão eficiente no formato Multilojas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-16 lg:py-24 noise-bg">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16 px-4"
        >
          <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-widest">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 sm:mt-3">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-4 sm:px-0"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card px-6 data-[state=open]:glow-primary transition-shadow"
              >
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
