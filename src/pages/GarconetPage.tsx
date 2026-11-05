import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import { GARCONET_URL, whatsappLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_URL = whatsappLink("Olá! Quero entender melhor o Garçonet para a minha operação.");

const moments = [
  {
    title: "O erro acontece no expediente",
    text: "Atraso, item errado e falha de comunicação não esperam o fechamento do dia. A reputação cai enquanto a equipe ainda está produzindo.",
  },
  {
    title: "O dono fica sem ver o gargalo",
    text: "Quem não está no salão ou na cozinha só descobre o problema quando a avaliação já foi publicada. O Garçonet informa o proprietário sobre onde a operação travou.",
  },
  {
    title: "A intercorrência precisa de dono",
    text: "Não basta registrar a insatisfação. Alguém precisa atender o caso enquanto o expediente segue, para a loja manter ou recuperar a reputação.",
  },
];

const points = [
  "Ajuda a manter ou recuperar a reputação perdida por erros internos",
  "Mostra aos proprietários os gargalos da operação",
  "Organiza o atendimento das intercorrências durante o expediente",
  "Reduz a insatisfação do cliente no momento em que ela acontece",
];

const GarconetPage = () => {
  return (
    <>
      <PageIntro
        kicker="Produto"
        title="Garçonet para a operação do expediente"
        lead="Uma solução para a loja manter ou recuperar a reputação afetada por erros internos, com o dono informado e a intercorrência atendida enquanto o serviço acontece."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">O que o produto resolve</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O Garçonet organiza a operação no horário de venda. Ele ameniza a insatisfação do cliente, mostra os gargalos para os proprietários e melhora o atendimento das intercorrências durante o expediente.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={GARCONET_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full cursor-pointer gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contratar o Garçonet
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full cursor-pointer gap-2 border-border bg-transparent hover:bg-secondary">
                  <WhatsAppIcon className="h-4 w-4" />
                  Entender no WhatsApp
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-3 sm:p-4">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-xl bg-black object-cover"
              src="/video%20gar%C3%A7onete.mp4"
            >
              Seu navegador não reproduz este vídeo.
            </video>
            <p className="px-2 pt-3 text-sm text-muted-foreground">Veja o Garçonet em operação na loja.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 lg:py-24">
        <div className="container">
          <h2 className="max-w-2xl font-display text-3xl font-semibold">Por que ele existe no meio do serviço</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {moments.map((moment) => (
              <article key={moment.title} className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{moment.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{moment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold">Garçonet e consultoria não são a mesma coisa</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A consultoria conduz a estratégia da loja nas plataformas: cardápio, preço, campanha e acompanhamento. O Garçonet atua na operação do expediente, quando o erro interno precisa ser visto e tratado na hora. Os dois podem conviver. A contratação do produto é direta, no painel do Garçonet.
          </p>
        </div>
      </section>

      <RelatedLinks
        links={[
          { to: "/planos", title: "Planos da consultoria", text: "Se a necessidade for gestão da loja, o caminho é outro." },
          { to: "/contato", title: "Contato", text: "Se quiser entender o encaixe antes de assinar, fale com a consultoria." },
        ]}
      />
    </>
  );
};

export default GarconetPage;
