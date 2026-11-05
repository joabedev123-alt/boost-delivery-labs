import { Mail, MapPin } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import ContactSection from "@/components/ContactSection";
import { ADDRESS_LINES, whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de saber mais sobre a consultoria de delivery.");

const faqs = [
  {
    q: "Como o retorno acontece?",
    a: "O formulário abre uma conversa no WhatsApp com os dados da loja. Também dá para chamar direto pelo número da consultoria.",
  },
  {
    q: "Qual é o horário de suporte de quem já é cliente?",
    a: "O suporte da operação acontece em grupo exclusivo de WhatsApp, de segunda a domingo, das 9h às 22h45, no horário em que o chat do iFood se encerra.",
  },
  {
    q: "Vocês atendem fora de Belo Horizonte?",
    a: "Sim. A sede fica no Barro Preto, em Belo Horizonte, e a gestão das plataformas acontece à distância, com lojas em outras cidades.",
  },
  {
    q: "Posso contratar iFood e outra plataforma juntos?",
    a: "Sim. A gestão em mais de uma plataforma é combinada de acordo com a operação, para o iFood continuar sendo tratado com o cuidado de quem trabalha no formato multilojas.",
  },
];

const ContatoPage = () => {
  return (
    <>
      <PageIntro
        kicker="Contato"
        title="Fale com a consultoria"
        lead="Conte quem é o responsável pela loja e o que precisa ser resolvido. O retorno segue pelo WhatsApp, com o contexto que você enviar."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <ContactSection />
          <aside className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold">Onde estamos</h2>
            <div className="mt-6 space-y-5 text-base text-muted-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-foreground">
                <WhatsAppIcon className="mt-1 h-4 w-4 shrink-0" />
                <span>(31) 99085-8563</span>
              </a>
              <a href="mailto:antoniomelo.consultoriabh@gmail.com" className="flex items-start gap-3 hover:text-foreground">
                <Mail className="mt-1 h-4 w-4 shrink-0" />
                <span className="break-all">antoniomelo.consultoriabh@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0" />
                <span>
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                  <span className="mt-2 block text-sm">CNPJ 57.171.178/0001-12</span>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Antes de chamar</h2>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`contato-${index}`} className="rounded-xl border border-border/60 bg-card px-6">
                <AccordionTrigger className="min-h-11 py-5 text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/planos", title: "Planos", text: "Se você já sabe o tipo de contratação, comece por aqui." },
          { to: "/garconet", title: "Garçonet", text: "Se a necessidade for a operação do expediente, o produto tem página própria." },
        ]}
      />
    </>
  );
};

export default ContatoPage;
