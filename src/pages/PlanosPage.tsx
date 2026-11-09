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
    id: "gestao",
    name: "Gestão contínua",
    kicker: "Consultoria contínua",
    price: null as string | null,
    priceNote: "Valor fechado depois da análise, conforme lojas e plataformas",
    description:
      "Assumimos a gestão da sua loja no iFood e, se você estiver lá, na 99Food e na Keeta.",
    detail:
      "Entra cardápio, preço, promoção, avaliação, cancelamento e o acompanhamento no horário de venda. O valor depende do número de lojas e plataformas e é fechado depois da análise.",
    points: [
      "Gestão da loja no iFood e, quando houver, na 99Food e na Keeta",
      "Acompanhamento no horário em que a loja vende",
      "Prioridades definidas com quem responde pela loja",
    ],
    cta: "Quero a gestão da minha loja",
    message: "Olá! Quero a gestão contínua da minha loja.",
  },
  {
    id: "cardapio",
    name: "Implementação de cardápio",
    kicker: "Contratação avulsa",
    price: null,
    priceNote: "Somente o cardápio, sem a mensalidade da gestão",
    description:
      "Cardápio reorganizado e publicado: categorias, ordem, descrições, fotos orientadas e combos.",
    detail:
      "Serve para quem precisa do cardápio convertendo e, neste momento, não quer o acompanhamento diário.",
    points: [
      "Categorias, ordem e descrições",
      "Orientação de fotos e combos",
      "Publicação focada no cardápio",
    ],
    cta: "Quero arrumar meu cardápio",
    message: "Olá! Quero contratar somente a implementação de cardápio.",
  },
  {
    id: "analise",
    name: "Análise de loja",
    kicker: "Porta de entrada",
    price: "R$ 500",
    priceNote: "Relatório para saber o que está travando as vendas",
    description:
      "A análise avulsa é o caminho para quem quer uma ideia clara antes de contratar a gestão.",
    detail:
      "O relatório cobre o histórico da loja, aponta problemas e soluções, mostra pontos fortes dos concorrentes no nicho da cozinha e indica os ajustes para evoluir nas plataformas.",
    points: [
      "Histórico da loja",
      "Problemas, soluções e o que fazer primeiro",
      "Pontos fortes dos concorrentes no nicho da cozinha",
      "Ajustes para evoluir nas plataformas",
    ],
    cta: "Quero uma análise da minha loja",
    message: "Olá! Quero contratar a análise de loja por R$ 500.",
  },
  {
    id: "lojas-novas",
    name: "Lojas novas",
    kicker: "Condição de entrada",
    price: null,
    priceNote: "Condição econômica para quem está abrindo",
    description:
      "Planos especiais e econômicos para lojas novas, com a entrada pensada para quem ainda está estruturando a operação.",
    detail:
      "Entra o cadastro, o cardápio inicial e as primeiras promoções configuradas. A condição é conversada a partir do estágio da loja, sem a tabela de uma operação já madura.",
    points: [
      "Cadastro nas plataformas",
      "Cardápio inicial",
      "Primeiras promoções configuradas",
    ],
    cta: "Falar sobre loja nova",
    message: "Olá! Tenho uma loja nova e quero conhecer os planos especiais.",
  },
];

const faqs = [
  {
    q: "Quanto custa a gestão?",
    a: "O valor depende do número de lojas e plataformas e é fechado depois da análise. A análise avulsa, para quem quer começar por ela, custa R$ 500.",
  },
  {
    q: "Vocês atendem 99Food e Keeta?",
    a: "Sim. A base do trabalho é o iFood. Quando a loja também está na 99Food ou na Keeta, cardápio e estratégia entram no conjunto, sem tratar cada marca como uma loja solta.",
  },
  {
    q: "Que acesso vocês precisam da minha conta do iFood?",
    a: "O acesso de gestão no Portal do Parceiro, combinado na conversa, para cardápio, promoções, avaliações e os relatórios da loja.",
  },
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
        lead="A análise de R$ 500 é a porta de entrada. A gestão contínua, o cardápio e a condição para loja nova são fechados depois que a estrutura da operação está clara."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid gap-6 lg:grid-cols-2">
          {offerings.map((offer) => (
            <article id={offer.id} key={offer.name} className="flex scroll-mt-24 flex-col rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{offer.kicker}</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">{offer.name}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{offer.description}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{offer.detail}</p>
              <div className="mt-6">
                {offer.price ? (
                  <p className="font-display text-4xl font-semibold">{offer.price}</p>
                ) : (
                  <p className="font-display text-2xl font-semibold">Orçamento conforme a loja</p>
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
