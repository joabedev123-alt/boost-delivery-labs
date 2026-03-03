import {
  Search, UtensilsCrossed, DollarSign, Rocket, Tag, Trophy,
  MessageSquare, ShieldCheck, Eye, FileText, Users, MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Search, title: "Análise estratégica da loja" },
  { icon: UtensilsCrossed, title: "Estruturação e otimização do cardápio" },
  { icon: DollarSign, title: "Precificação inteligente" },
  { icon: Rocket, title: "Estratégias para vender mais" },
  { icon: Tag, title: "Gestão de cupons, anúncios e promoções" },
  { icon: Trophy, title: "Otimização de ranqueamento" },
  { icon: MessageSquare, title: "Respostas a avaliações" },
  { icon: ShieldCheck, title: "Contestação de cancelamentos" },
  { icon: Eye, title: "Acompanhamento diário" },
  { icon: FileText, title: "Relatórios mensais" },
  { icon: Users, title: "Reuniões estratégicas" },
  { icon: MessageCircle, title: "Suporte direto via WhatsApp" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-16 lg:py-24 noise-bg">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16 px-4"
        >
          <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-widest">Serviços</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            O que <span className="gradient-text">fazemos</span> por você
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Gestão completa da sua loja no iFood com estratégia, execução e acompanhamento diário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 px-2 sm:px-0">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{service.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
