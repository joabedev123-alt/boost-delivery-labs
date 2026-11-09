import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { FORMACAO_WHATSAPP, whatsappLink } from "@/lib/contact";
import imagem02 from "@/assets/imagem02.jpeg";

const WHATSAPP_URL = whatsappLink(
  "Olá! Quero uma análise da minha loja. Segue o link do iFood:",
);

const proofs = [
  "+1.500 lojas credenciadas ou atendidas desde a época nas plataformas",
  "Suporte todos os dias, das 9h às 22h45",
  "Lojas atendidas em MG, PA, PR, MS e outros estados",
];

const paths = [
  { to: "/planos#gestao", title: "Quero alguém cuidando do meu iFood todos os dias", text: "Gestão contínua da loja nas plataformas." },
  { to: "/planos#cardapio", title: "Meu cardápio não converte", text: "Implementação do cardápio, sem a gestão do mês." },
  { to: "/planos#analise", title: "Quero saber o que está travando minha loja", text: "Análise da loja por R$ 500." },
  { to: "/planos#lojas-novas", title: "Estou abrindo uma loja agora", text: "Condição de entrada para quem está começando." },
  { to: "/formacao", title: "Quero virar gestor de delivery", text: "Formação Gestor de Delivery 360º." },
  { to: "/garconet", title: "Meu problema é atraso, chat e avaliação ruim", text: "Garçonet no atendimento e no despacho." },
];

const steps = [
  { title: "Análise da loja", text: "Histórico, cardápio, reputação e o que a plataforma está fazendo com a operação." },
  { title: "Prioridades com você", text: "O que entra agora e o que pode esperar, decidido com quem responde pela loja." },
  { title: "Execução na plataforma", text: "Cardápio, preço, promoção, resposta e contestação saem do papel e entram no aplicativo." },
  { title: "Acompanhamento e relatório", text: "Olho no horário de venda e, todo mês, o que mudou e o próximo passo." },
];

const stories = [
  {
    quote: "Com a gestão a quatro mãos, alcançamos 6 dígitos no faturamento.",
    name: "Edmundo Jr",
    place: "Mr Cheff Pizza · Belo Horizonte/MG",
  },
  {
    quote: "Antes não havia efetividade no iFood. Com a gestão, o cardápio ficou atrativo e as vendas subiram.",
    name: "Luiz Arthur",
    place: "Pizzaria Dom Carvalho · Belém/PA",
  },
  {
    quote: "As vendas ficaram mais lucrativas. Diminuí os problemas e os cancelamentos.",
    name: "Renato",
    place: "Ruffinus Pizzaria · Campo Grande/MS",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Antônio Melo | Soluções em Delivery";
  }, []);

  return (
    <>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(0_85%_40%/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(280_80%_40%/0.14),transparent_60%)]" />
        <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Gestão de iFood e 99Food · Belo Horizonte
            </p>
            <h1 className="mb-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Mais pedidos no iFood, com margem no bolso.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ex-executivo do iFood, da 99Food e da Hyperlocal, Antônio Melo e equipe assumem a gestão da sua loja nas plataformas: cardápio, preço, promoções, avaliações e cancelamentos. Você cuida da cozinha; a gente cuida do aplicativo.
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full cursor-pointer text-primary-foreground sm:w-auto">
                <Link to="/planos#analise">Quero uma análise da minha loja</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full cursor-pointer border-border bg-transparent hover:bg-secondary sm:w-auto">
                <Link to="/planos">Ver planos e preços</Link>
              </Button>
            </div>
            <ul className="space-y-3">
              {proofs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-base text-muted-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border/60">
            <img
              src={imagem02}
              alt="Antônio Melo, fundador. Ex-executivo do iFood e da 99Food."
              className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              Antônio Melo, fundador. Ex-executivo do iFood e da 99Food.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            O que os donos relatam
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Lojas atendidas em Minas Gerais, Pará, Paraná, Mato Grosso do Sul e outros estados.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {stories.map((story) => (
              <blockquote key={story.name} className="rounded-2xl border border-border/60 bg-card p-6">
                <p className="text-base leading-relaxed">“{story.quote}”</p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  <span className="block font-medium text-foreground">{story.name}</span>
                  {story.place}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Por onde você quer começar?
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paths.map((path) => (
              <Link
                key={path.to}
                to={path.to}
                className="group flex min-h-40 flex-col rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="flex items-start gap-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
                  {path.title}
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </span>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{path.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="font-display text-3xl font-semibold">Como funciona</h2>
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
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold leading-tight">Pedido que sobra no caixa</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Vender mais sem olhar a margem só enche a cozinha. A gestão separa o desconto pago pela loja do desconto pago pela plataforma, confere o repasse e olha o que sobra depois do custo do prato. O número fechado de cada loja fica no diagnóstico, não numa promessa genérica.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 lg:py-16">
        <div className="container">
          <div className="rounded-2xl border border-primary/30 bg-card p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Turma fundadora · presencial em BH ou online ao vivo · vagas limitadas
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Formação Gestor de Delivery 360º
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Restaurante precisa de gestor de delivery. Quase ninguém foi formado para isso. São 60 horas para gerir iFood e 99Food com o método usado nas operações da consultoria.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={FORMACAO_WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full cursor-pointer text-primary-foreground">
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
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold leading-tight">
            Mande o link da sua loja no iFood.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A resposta vem com o que está travando as vendas: cardápio, preço, promoção, avaliação ou cancelamento.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full sm:w-auto">
            <Button size="lg" className="w-full cursor-pointer gap-2 text-primary-foreground">
              <WhatsAppIcon className="h-4 w-4" />
              Chamar no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
