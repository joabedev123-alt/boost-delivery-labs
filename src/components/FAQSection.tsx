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
    a: "O suporte é feito diretamente via WhatsApp, de segunda a sábado, com acompanhamento diário da sua loja.",
  },
  {
    q: "Posso contratar iFood e 99 Food juntos?",
    a: "Sim! A gestão da 99 Food é um adicional de R$ 500,00 na mensalidade. Mantemos equilíbrio entre as plataformas.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 noise-bg">
      <div className="section-divider mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
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
