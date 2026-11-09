import {
  Search, UtensilsCrossed, DollarSign, ChefHat, Rocket, Tag, Trophy,
  MessageSquare, ShieldCheck, Eye, MessageCircle, Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const CMV_WHATSAPP = whatsappLink(
  "Olá! Quero detalhes do serviço de CMV e ficha técnica para a minha operação.",
);

const groups = [
  {
    title: "Vender mais",
    items: [
      { icon: Search, title: "Análise da loja", text: "Histórico, reputação e o que a plataforma está premiando ou punindo naquela operação." },
      { icon: UtensilsCrossed, title: "Cardápio", text: "Categorias, fotos, descrições e ordem dos itens para converter quem já chegou na loja." },
      { icon: Rocket, title: "Estratégia de vendas", text: "Ações de visibilidade alinhadas à capacidade real de produção, sem prometer um volume que a cozinha não segura." },
      { icon: Tag, title: "Promoções e anúncios", text: "Toda promoção entra com meta e conta feita: quanto custa, quem paga o desconto e quanto volta em pedidos. Desconto que só come margem não entra." },
      { icon: Trophy, title: "Ranqueamento", text: "Ajustes contínuos nos fatores que mudam a posição da loja dentro da plataforma." },
    ],
  },
  {
    title: "Lucrar mais",
    items: [
      { icon: DollarSign, title: "Precificação", text: "Preço que conversa com a margem da cozinha e com o que o cliente aceita pagar no aplicativo." },
      { icon: ChefHat, title: "Ficha técnica e CMV", text: "Nosso chef vai até a sua cozinha, mede as receitas e calcula quanto custa cada prato. É a base para um preço que não come a sua margem.", details: true },
      { icon: Receipt, title: "Conciliação financeira", text: "Conferimos o repasse do iFood pedido a pedido: comissão, taxa de pagamento, antecipação e quem pagou cada desconto, a loja ou a plataforma. Você sabe quanto sobrou de verdade." },
    ],
  },
  {
    title: "Proteger a loja",
    items: [
      { icon: MessageSquare, title: "Respostas a avaliações", text: "Resposta com critério, para proteger a reputação e devolver um recado útil para a equipe." },
      { icon: ShieldCheck, title: "Contestação de cancelamentos", text: "Defesa do que foi cancelado de forma indevida e leitura do que está gerando perda de verdade." },
      { icon: Eye, title: "Acompanhamento diário", text: "A gente olha a loja no horário em que ela vende, não só no fechamento do mês." },
      { icon: MessageCircle, title: "Suporte no WhatsApp", text: "Grupo exclusivo da operação, de segunda a domingo, das 9h às 22h45, no horário do chat do iFood." },
    ],
  },
];

const steps = [
  { title: "Análise da loja", text: "Histórico, cardápio, reputação e capacidade da cozinha entram juntos, antes de qualquer pacote." },
  { title: "Prioridades com você", text: "Quem responde pela loja escolhe o que vem primeiro. Nem todo problema pede a mesma urgência." },
  { title: "Execução na plataforma", text: "Cardápio, campanha, resposta e contestação saem do papel e entram no aplicativo." },
  { title: "Acompanhamento e relatório", text: "O resultado da semana mostra se a decisão funcionou. Todo mês há relatório e a decisão do próximo passo." },
];

const distinctions = [
  { title: "Mais de uma plataforma", text: "Cardápio e estratégia na 99 Food ou na Keeta são ajustados sem atrapalhar o iFood, que continua sendo a base mais sólida do delivery." },
  { title: "Cardápio integrado", text: "Quando o cardápio digital já está ligado ao iFood, a atualização entra no trabalho, sem virar uma cobrança à parte." },
  { title: "Multilojas", text: "Quem opera mais de uma marca não é tratado como várias lojas soltas. As condições e o desenvolvimento acompanham o conjunto." },
];

const SolucoesPage = () => {
  return (
    <>
      <PageIntro
        kicker="Soluções"
        title="O que a consultoria conduz na loja"
        lead="Três frentes: vender mais, lucrar mais e proteger a loja. A prioridade é o iFood, com cuidado quando a operação também está na 99Food ou na Keeta."
      />

      <section className="py-16 lg:py-24">
        <div className="container space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-3xl font-semibold">{group.title}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((service) => (
                  <article key={service.title} className="flex flex-col rounded-2xl border border-border/60 bg-card p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.text}</p>
                    {"details" in service && service.details ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="mt-5 w-full cursor-pointer border-border bg-transparent hover:bg-secondary">
                            Detalhes
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="font-display text-2xl">Ficha técnica e CMV</DialogTitle>
                            <DialogDescription className="pt-2 text-base leading-relaxed">
                              Nosso chef vai até a sua cozinha, mede as receitas e calcula quanto custa cada prato. É a base para um preço que não come a sua margem.
                            </DialogDescription>
                          </DialogHeader>
                          <a href={CMV_WHATSAPP} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full cursor-pointer gap-2 text-primary-foreground">
                              <WhatsAppIcon className="h-4 w-4" />
                              Falar sobre esse serviço
                            </Button>
                          </a>
                        </DialogContent>
                      </Dialog>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          ))}
          <p className="text-base leading-relaxed text-muted-foreground">
            Todo mês: relatório com o que mudou e reunião para decidir o próximo passo.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold">Como um trabalho começa</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="list-none">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold">O que sustenta a execução</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {distinctions.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/planos", title: "Planos", text: "Escolha gestão contínua, só o cardápio ou só a análise da loja." },
          { to: "/para-quem", title: "Para quem", text: "Veja como o trabalho se encaixa em quem conduz a operação." },
        ]}
      />
    </>
  );
};

export default SolucoesPage;
