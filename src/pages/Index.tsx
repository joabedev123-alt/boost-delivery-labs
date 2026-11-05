import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { FORMACAO_WHATSAPP, whatsappLink } from "@/lib/contact";
import fotohero from "@/assets/fotohero.png";

const WHATSAPP_URL = whatsappLink("Olá! Quero conversar sobre a gestão da minha loja de delivery.");

const areas = [
  {
    to: "/a-empresa",
    title: "A empresa",
    text: "De onde veio a consultoria, a passagem pelas plataformas e o que a equipe entrega hoje.",
  },
  {
    to: "/solucoes",
    title: "Soluções",
    text: "Cardápio, preço, reputação, anúncios, cancelamentos e o acompanhamento do expediente.",
  },
  {
    to: "/para-quem",
    title: "Para quem",
    text: "Como o trabalho muda para o dono, para quem também gere e para quem opera a loja.",
  },
  {
    to: "/planos",
    title: "Planos",
    text: "Gestão personalizada, cardápio avulso, análise de R$ 500 e condições para lojas novas.",
  },
  {
    to: "/formacao",
    title: "Formação",
    text: "Gestor de Delivery 360º: 60 horas para diagnosticar, estruturar e gerenciar uma operação com método.",
  },
  {
    to: "/garconet",
    title: "Garçonet",
    text: "O produto para proteger a reputação e organizar as intercorrências durante o expediente.",
  },
  {
    to: "/clientes",
    title: "Clientes",
    text: "O que responsáveis por lojas relatam e as marcas que já passaram pela consultoria.",
  },
];

const proofs = [
  "Mais de 1.500 lojas atendidas",
  "Gestão com execução no dia a dia",
  "Direcionado a donos, gestores e operadores",
];

const Index = () => {
  useEffect(() => {
    document.title = "AM Consultoria | Gestão profissional de delivery";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(22_70%_40%/0.16),transparent_58%)]" />
        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">AM Consultoria</p>
            <h1 className="mb-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Gestão profissional para quem conduz o delivery
            </h1>
            <p className="mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Consultoria para donos, gestores e operadores que precisam de método nas plataformas, sem abandonar a cozinha.
            </p>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Cada assunto do site tem a própria página: a empresa, as soluções, os planos, a formação, o Garçonet e os clientes.
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
                <Link to="/contato">Falar com a consultoria</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full cursor-pointer border-border bg-transparent hover:bg-secondary sm:w-auto">
                <Link to="/planos">Ver formas de contratação</Link>
              </Button>
            </div>
            <ul className="space-y-3">
              {proofs.map((item) => (
                <li key={item} className="flex items-center gap-2 text-base text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-3 sm:p-4">
            <img
              src={fotohero}
              alt="Painel de acompanhamento da operação de delivery"
              className="aspect-video w-full rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 lg:py-16">
        <div className="container">
          <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              1ª turma de gestores e mentorados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold sm:text-4xl">
              Formação Gestor de Delivery 360º
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Uma formação profissional para quem quer diagnosticar, estruturar e gerenciar operações de delivery com método. São 60 horas de aulas práticas sobre iFood, 99Food, cardápio, precificação, dados, IA e gestão de clientes, em formato híbrido, presencial em BH ou online ao vivo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={FORMACAO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90">
                  Quero garantir minha vaga
                </Button>
              </a>
              <Button asChild size="lg" variant="outline" className="w-full cursor-pointer border-border bg-transparent hover:bg-secondary sm:w-auto">
                <Link to="/formacao">Ver o programa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            O site acompanha a forma como a consultoria se apresenta
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A página inicial apresenta a casa. O detalhe de cada tema fica na página correspondente.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.to}
                to={area.to}
                className="group flex min-h-44 flex-col rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex items-center gap-2 font-display text-2xl font-semibold">
                  {area.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{area.text}</p>
              </Link>
            ))}
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex">
            <Button variant="outline" className="min-h-11 cursor-pointer gap-2 border-border bg-transparent hover:bg-secondary">
              <WhatsAppIcon className="h-4 w-4" />
              Prefere chamar no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
