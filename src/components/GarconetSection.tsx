import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GARCONET_URL, whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

const points = [
  "Ajuda a manter ou recuperar a reputação perdida por erros internos",
  "Mostra aos proprietários os gargalos da operação",
  "Organiza o atendimento das intercorrências durante o expediente",
  "Reduz a insatisfação do cliente no momento em que ela acontece",
];

const WHATSAPP_URL = whatsappLink(
  "Olá! Quero entender melhor o Garçonet para a minha operação."
);

const GarconetSection = () => {
  return (
    <section id="garconet" className="relative py-16 lg:py-24">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-widest">Produto</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mt-3 mb-4">
              Garçonet para a operação do expediente
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Quer otimizar a operação? O Garçonet foi feito para a loja manter ou recuperar a reputação afetada por erros internos. Ele organiza o atendimento, informa os proprietários sobre os gargalos e dá mais controle às intercorrências durante o expediente.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Se quiser entender o encaixe na sua loja antes de contratar, fale direto com a consultoria.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-foreground/90">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={GARCONET_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full min-h-11 cursor-pointer gap-2 text-primary-foreground">
                  Contratar o Garçonet
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full min-h-11 cursor-pointer gap-2 border-border bg-transparent hover:bg-secondary">
                  <WhatsAppIcon className="h-4 w-4" />
                  Entender no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border/60 bg-card p-3 sm:p-4"
          >
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-xl bg-black object-cover"
              src="/video%20gar%C3%A7onete.mp4"
            >
              Seu navegador não reproduz este vídeo.
            </video>
            <p className="px-2 pt-3 text-sm text-muted-foreground">
              Veja o Garçonet em operação na loja.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GarconetSection;
