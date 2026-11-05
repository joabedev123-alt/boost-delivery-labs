import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import imagem02 from "@/assets/imagem02.jpeg";

const chapters = [
  {
    title: "A origem",
    text: "A Antônio Melo Soluções em Delivery nasceu de uma lacuna no mercado brasileiro: a gestão estratégica de plataformas de delivery ainda não era tratada como profissão. A tecnologia avançava, e muitos donos de restaurante não tinham tempo nem repertório para entender os mecanismos das plataformas.",
  },
  {
    title: "A especialização",
    text: "A passagem como executivo na 99 Food, no iFood e na Hyperlocal Delivery mostrou que vender mais não basta. Cada métrica, cada ferramenta e cada variável da loja precisava de estudo próprio. O que começou como curiosidade virou uma especialização: a gestão de delivery.",
  },
  {
    title: "A equipe",
    text: "Mais de 1.500 lojas passaram por credenciamento ou consultoria. Com o volume, ficou claro que cancelamento, avaliação e crise também pedem método. A estrutura cresceu para entregar visão, acompanhamento diário e decisão orientada por dados, não só ajuste de cardápio ou campanha.",
  },
];

const principles = [
  {
    title: "Resultado com lucro",
    text: "Movimentação sem margem não interessa a quem paga a conta da cozinha. O crescimento entra na conversa junto com cancelamento, reputação e preço.",
  },
  {
    title: "Execução, não só diagnóstico",
    text: "A leitura da loja só vale se virar prioridade no expediente. A consultoria acompanha a operação, não entrega um relatório e some.",
  },
  {
    title: "Quem responde pela loja",
    text: "O trabalho é feito com donos, com donos que também gerem e com operadores. A decisão fica com quem conduz o negócio.",
  },
];

const EmpresaPage = () => {
  return (
    <>
      <PageIntro
        kicker="A empresa"
        title="Antônio Melo Soluções em Delivery"
        lead="Uma consultoria nascida da operação real das plataformas, para quem precisa de gestão e não de mais uma opinião sobre o aplicativo."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <img src={imagem02} alt="Antônio Melo em atendimento de consultoria" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A casa existe para assumir a gestão da loja nas plataformas enquanto a cozinha segue na produção. O ponto de partida foi a ausência de um gestor de plataformas no mercado, mesmo com o delivery já concentrando uma parte grande do faturamento.
            </p>
            <p>
              Hoje a entrega vai além de campanha e cardápio. Inclui a leitura do que a plataforma está fazendo com a loja, o tratamento de problemas e a prioridade do próximo ciclo, sempre com o responsável pela operação na conversa.
            </p>
            <p className="font-medium text-foreground">
              Escalar a operação só faz sentido quando o resultado continua lucrativo e a equipe consegue sustentar o expediente.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold">Como a consultoria chegou até aqui</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {chapters.map((chapter, index) => (
              <article key={chapter.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{chapter.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{chapter.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold">O que orienta o trabalho</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/solucoes", title: "Soluções", text: "Veja o que a consultoria conduz de fato na loja." },
          { to: "/contato", title: "Contato", text: "Fale com a equipe e conte o momento da sua operação." },
        ]}
      />
    </>
  );
};

export default EmpresaPage;
