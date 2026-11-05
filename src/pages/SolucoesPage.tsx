import {
  Search, UtensilsCrossed, DollarSign, Rocket, Tag, Trophy,
  MessageSquare, ShieldCheck, Eye, FileText, Users, MessageCircle,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";

const services = [
  { icon: Search, title: "Análise estratégica da loja", text: "Leitura do histórico, da reputação e do que a plataforma está premiando ou punindo naquela operação." },
  { icon: UtensilsCrossed, title: "Estruturação do cardápio", text: "Categorias, fotos, descrições e ordem dos itens para converter quem já chegou na loja." },
  { icon: DollarSign, title: "Precificação", text: "Preço que conversa com a margem da cozinha e com o que o cliente aceita pagar no aplicativo." },
  { icon: Rocket, title: "Estratégia de vendas", text: "Ações de visibilidade alinhadas à capacidade real de produção, sem prometer um volume que a cozinha não segura." },
  { icon: Tag, title: "Cupons, anúncios e promoções", text: "Campanha com objetivo. Desconto solto, que só come a margem, não entra como plano." },
  { icon: Trophy, title: "Ranqueamento", text: "Ajustes contínuos nos fatores que mudam a posição da loja dentro da plataforma." },
  { icon: MessageSquare, title: "Respostas a avaliações", text: "Resposta com critério, para proteger a reputação e devolver um recado útil para a equipe." },
  { icon: ShieldCheck, title: "Contestação de cancelamentos", text: "Defesa do que foi cancelado de forma indevida e leitura do que está gerando perda de verdade." },
  { icon: Eye, title: "Acompanhamento diário", text: "Olho na operação no horário em que a loja vende, não só uma auditoria no fim do mês." },
  { icon: FileText, title: "Relatórios", text: "O que mudou, o que segurou o resultado e o que entra como prioridade no próximo ciclo." },
  { icon: Users, title: "Reuniões com o responsável", text: "Conversa para decidir o que a loja vai fazer, com quem de fato responde pela operação." },
  { icon: MessageCircle, title: "Suporte no WhatsApp", text: "Grupo exclusivo da operação, de segunda a domingo, das 9h às 22h45, no horário do chat do iFood." },
];

const steps = [
  { title: "Diagnóstico", text: "A loja é lida antes de qualquer pacote. Histórico, cardápio, reputação e capacidade da cozinha entram juntos." },
  { title: "Prioridade", text: "O responsável pela loja escolhe o que vem primeiro. Nem todo problema pede a mesma urgência." },
  { title: "Execução", text: "Cardápio, campanha, resposta e contestação saem do papel e entram na plataforma." },
  { title: "Acompanhamento", text: "O expediente mostra se a decisão segurou. O ciclo seguinte corrige o que não segurou." },
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
        lead="Da leitura da operação ao cardápio, às promoções e ao suporte do expediente. A prioridade é o iFood, com cuidado quando a loja também está em outras plataformas."
      />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-display text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.text}</p>
              </article>
            ))}
          </div>
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
