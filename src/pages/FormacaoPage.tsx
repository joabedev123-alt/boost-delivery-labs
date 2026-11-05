import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { FORMACAO_WHATSAPP } from "@/lib/contact";

const audiences = [
  {
    title: "Quem quer atuar como gestor ou consultor",
    text: "Profissionais que pretendem assumir a gestão de uma operação de delivery ou prestar consultoria com um método próprio.",
  },
  {
    title: "Quem já trabalha com marketplaces",
    text: "Quem já opera iFood, 99Food ou outros canais e precisa de critério para diagnóstico, prioridade e plano de ação.",
  },
  {
    title: "Donos e gerentes de operação",
    text: "Quem conduz a própria loja e quer dominar a gestão dos canais, em vez de depender só do feeling do dia.",
  },
];

const pillars = [
  {
    title: "Estratégia",
    text: "Mercado do gestor, diagnóstico de operações, como destravar lojas estagnadas e estudos de caso reais.",
  },
  {
    title: "Produto",
    text: "Ficha técnica, CMV, precificação, combos, construção e engenharia de cardápio com foco em conversão.",
  },
  {
    title: "Marketplace",
    text: "Portal do Parceiro iFood por completo, 99Food e outros canais, promoções, anúncios, cardápio digital e venda direta pelo WhatsApp.",
  },
  {
    title: "Performance",
    text: "Funil de vendas, CAC, conciliação financeira, repasses e relatórios profissionais para o cliente.",
  },
  {
    title: "Operação",
    text: "Tempo de preparo, cancelamentos, avaliações, expedição, protocolos de atendimento, contestação e prevenção de bloqueios.",
  },
  {
    title: "Gestão e negócio",
    text: "Relacionamento com o cliente e com o marketing, ferramentas de trabalho, IA aplicada ao delivery, gestão de redes e multilojas, como montar a consultoria e como conquistar clientes.",
  },
];

const format = [
  {
    title: "60 horas de formação",
    text: "Carga horária para percorrer diagnóstico, produto, marketplace, performance, operação e negócio.",
  },
  {
    title: "Formato híbrido",
    text: "Presencial em Belo Horizonte ou online ao vivo, com aulas gravadas.",
  },
  {
    title: "Corpo docente multidisciplinar",
    text: "Direção e módulos centrais com Antônio Melo, mais especialistas convidados em finanças, marketing, operação, comercial e tecnologia.",
  },
  {
    title: "Metodologia prática",
    text: "Aula objetiva, demonstração, estudo de caso, exercício e decisão: o que fazer, por que fazer e como medir.",
  },
  {
    title: "Bate-papo com donos de operação",
    text: "O que o empresário espera de um gestor e o que gera confiança na relação.",
  },
  {
    title: "Projeto final",
    text: "Você assume um caso real ou simulado e apresenta diagnóstico, precificação, cardápio, estratégia de promoções e anúncios e um plano de ação de 90 dias, como se estivesse diante do proprietário.",
  },
];

const kit = [
  "Checklist de diagnóstico",
  "Planilha de CMV",
  "Modelo de precificação",
  "Planilha de conciliação",
  "Modelos de relatório mensal",
  "Proposta comercial",
  "Onboarding e plano de ação",
  "Cartilhas de atendimento e expedição",
  "Checklists de iFood e 99Food",
  "Biblioteca de prompts para IA",
];

const FormacaoPage = () => {
  return (
    <>
      <PageIntro
        kicker="1ª turma de gestores e mentorados"
        title="Formação Gestor de Delivery 360º"
        lead="Uma formação profissional voltada para quem deseja dominar a gestão de operações no iFood, na 99Food e nos demais marketplaces de food, aprendendo técnicas, ferramentas e estratégias utilizadas no dia a dia de restaurantes de verdade."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Você está preparado para entrar em uma das profissões que mais ganham espaço no Brasil?
            </h2>
            <p>
              O mercado de delivery está em plena transformação. Milhares de restaurantes precisam de profissionais qualificados para administrar suas operações, aumentar suas vendas, melhorar seus resultados e conquistar espaço nas maiores plataformas de entrega do país.
            </p>
            <p>
              É nesse cenário que surge uma grande oportunidade: a profissão de gestor de delivery.
            </p>
            <p>
              O gestor é o profissional que transforma dados em estratégias, cardápios em vendas e restaurantes em negócios mais competitivos e lucrativos.
            </p>
            <p>
              E agora você pode aprender essa profissão com quem vive o mercado na prática.
            </p>
            <h3 className="pt-2 font-display text-2xl font-semibold text-foreground">
              Conheça o curso de formação de gestores de delivery
            </h3>
            <p>
              A Formação Gestor de Delivery 360º prepara profissionais para assumir uma operação de delivery de ponta a ponta. São 60 horas, em formato híbrido: presencial em Belo Horizonte ou online ao vivo.
            </p>
            <p>
              Isso inclui entender o que realmente define o desempenho de uma loja: preço, CMV, cardápio, promoções, anúncios, conversão, atendimento, operação, conciliação e relacionamento com o cliente.
            </p>
            <p>
              O curso ensina critério, método e raciocínio. Ao final, você será capaz de entrar em uma operação, levantar dados, identificar prioridades, montar um plano de ação e explicar ao cliente o que está sendo feito e por quê.
            </p>
          </div>
          <aside className="h-fit rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Em resumo</p>
            <ul className="mt-4 space-y-3 text-base">
              <li>60 horas de aulas práticas</li>
              <li>6 pilares e 28 módulos</li>
              <li>iFood, 99Food, cardápio, dados e IA</li>
              <li>Presencial em BH ou online ao vivo</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold">Para quem é</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold">O que você vai aprender</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Seis pilares e 28 módulos, do diagnóstico da loja até a forma de montar a própria consultoria.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Pilar {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold">Como funciona</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {format.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold">Kit do gestor</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Você sai do curso com ferramentas prontas para adaptar aos seus clientes.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {kit.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card px-4 py-4 text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl rounded-2xl border border-primary/30 bg-card p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Turma fundadora</p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Vagas limitadas, com condições especiais de lançamento
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              As vagas da primeira turma são limitadas. A formação desenvolve método, prática e visão de negócio. Os resultados de cada aluno dependem da dedicação, da experiência e da carteira que construir.
            </p>
            <a href={FORMACAO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full sm:w-auto">
              <Button size="lg" className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                Quero garantir minha vaga
              </Button>
            </a>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/para-quem", title: "Para quem é a consultoria", text: "A formação prepara o gestor. A consultoria atende quem já conduz uma loja." },
          { to: "/contato", title: "Contato", text: "Se preferir contar o seu momento antes de garantir a vaga, fale com a equipe." },
        ]}
      />
    </>
  );
};

export default FormacaoPage;
