import { Store, Briefcase, Headset } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";

const profiles = [
  {
    icon: Store,
    title: "Donos",
    pain: "O aplicativo concentra venda, mas a leitura da loja fica para depois do expediente. Fraude, cancelamento e cardápio parado passam a custar sem ninguém responsável.",
    work: "A consultoria assume a gestão nas plataformas e devolve prioridade, para o dono proteger o resultado sem viver dentro do painel.",
  },
  {
    icon: Briefcase,
    title: "Donos que também gerem",
    pain: "A mesma pessoa divide cozinha, equipe e plataforma. A decisão sai no improviso porque não há um método separado da correria do dia.",
    work: "O trabalho organiza o que olhar, o que ajustar e o que pode esperar. A gestão deixa de competir com o serviço de cada noite.",
  },
  {
    icon: Headset,
    title: "Gestores e operadores",
    pain: "Quem conduz o expediente precisa de direção sobre cardápio, reputação, cancelamento e a ordem do dia. Sem isso, a equipe apaga incêndio.",
    work: "A consultoria entra como apoio de critério: o que responder, o que contestar e o que mudar antes do próximo pico.",
  },
];

const kitchens = [
  "Hamburguerias",
  "Pizzarias",
  "Comida japonesa",
  "Comida caseira",
  "Açaí e sobremesa",
  "Operações com mais de uma marca",
];

const ParaQuemPage = () => {
  return (
    <>
      <PageIntro
        kicker="Para quem"
        title="Feito para quem responde pela operação"
        lead="A consultoria é direcionada a donos, a donos que também gerem e a operadores de delivery. O desenho acompanha a estrutura real da loja."
      />

      <section className="py-16 lg:py-24">
        <div className="container space-y-6">
          {profiles.map((profile) => (
            <article key={profile.title} className="grid gap-6 rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:grid-cols-[240px_1fr_1fr]">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <profile.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h2 className="font-display text-2xl font-semibold">{profile.title}</h2>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-primary">O que costuma pesar</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{profile.pain}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-widest text-primary">O que a consultoria assume</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{profile.work}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">Multicozinhas com as quais a casa já trabalha</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A estratégia muda com o nicho. O método não muda: ler a loja, ajustar o cardápio e acompanhar o que a plataforma faz com a reputação.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {kitchens.map((kitchen) => (
              <li key={kitchen} className="rounded-xl border border-border/60 bg-card px-4 py-4 text-base">
                {kitchen}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/planos", title: "Planos", text: "Gestão contínua, só o cardápio, só a análise ou uma condição para loja nova." },
          { to: "/solucoes", title: "Soluções", text: "O detalhe do que entra na gestão do dia a dia." },
        ]}
      />
    </>
  );
};

export default ParaQuemPage;
