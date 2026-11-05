import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const offerings = [
  {
    name: "Gestão personalizada",
    kicker: "Consultoria contínua",
    price: null as string | null,
    priceNote: "Desenhado conforme a estrutura da loja",
    description:
      "Planos personalizados, desenhados de acordo com a estrutura do negócio. O escopo e o ritmo saem do diagnóstico, não de um pacote fechado de meses.",
    detail:
      "Entra a gestão da loja nas plataformas, o acompanhamento da operação e a definição de prioridades com quem responde pelo negócio. Orçamento/cobrança de acordo com os serviços contratados.",
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
    detail:
      "Serve para quem precisa organizar categorias, itens e a apresentação que converte, e não quer, neste momento, um acompanhamento diário.",
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
    detail:
      "O relatório cobre o histórico da loja, aponta problemas e soluções, mostra pontos fortes dos concorrentes no nicho da cozinha e indica os ajustes para uma evolução consistente.",
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
      "Planos especiais e econômicos para lojas novas, alinhados a quem ainda está estruturando a operação.",
    detail:
      "A entrada é pensada para quem está começando: presença inicial nas plataformas e condições conversadas de acordo com o momento da loja, sem a tabela de uma operação já madura.",
    points: [
      "Entrada pensada para quem está começando",
      "Organização inicial da presença nas plataformas",
      "Condições conversadas de acordo com a loja",
    ],
    cta: "Falar sobre loja nova",
    message: "Olá! Tenho uma loja nova e quero conhecer os planos especiais.",
  },
];

const faqs = [
  {
    q: "Dá para contratar só o cardápio ou só a análise?",
    a: "Sim. A implementação de cardápio pode ser contratada sozinha. A análise de loja também: custa R$ 500 e entrega o relatório com histórico, problemas, soluções, leitura dos concorrentes do nicho e os ajustes para evoluir nas plataformas.",
  },
  {
    q: "Loja nova entra na mesma condição de uma loja já rodando?",
    a: "Não. Há planos especiais e econômicos para lojas novas. A condição é conversada a partir do estágio da operação.",
  },
  {
    q: "Em quanto tempo a gestão contínua mostra resultado?",
    a: "Os primeiros sinais costumam aparecer em 2 a 4 semanas. Ranqueamento e venda mais consistentes aparecem a partir do segundo mês.",
  },
];

const PlanosPage = () => {
  return (
    <>
      <PageIntro
        kicker="Planos"
        title="Formas de contratar, sem pacote genérico"
        lead="A gestão contínua é personalizada. Também é possível contratar só a implementação do cardápio, só a análise da loja ou uma condição para quem está começando."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid gap-6 lg:grid-cols-2">
          {offerings.map((offer) => (
            <article key={offer.name} className="flex flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{offer.kicker}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">{offer.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{offer.description}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{offer.detail}</p>
              <div className="mt-6">
                {offer.price ? (
                  <p className="font-display text-4xl font-semibold">{offer.price}</p>
                ) : (
                  <p className="font-display text-2xl font-semibold">Sob conversa</p>
                )}
                <p className="mt-1 text-sm text-muted-foreground">{offer.priceNote}</p>
              </div>
              <ul className="my-6 space-y-3">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href={whatsappLink(offer.message)} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button className="min-h-11 w-full cursor-pointer gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                  <WhatsAppIcon className="h-4 w-4" />
                  {offer.cta}
                </Button>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Dúvidas sobre a contratação</h2>
          <Accordion type="single" collapsible className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`plano-${index}`} className="rounded-xl border border-border/60 bg-card px-6">
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
          { to: "/solucoes", title: "Soluções", text: "O que entra na gestão quando o plano é contínuo." },
          { to: "/contato", title: "Contato", text: "Envie os dados da loja para a conversa começar com contexto." },
        ]}
      />
    </>
  );
};

export default PlanosPage;
