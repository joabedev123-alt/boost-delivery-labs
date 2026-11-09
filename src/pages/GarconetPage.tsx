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
    title: "O problema no pedido precisa de dono",
    text: "Atraso, item errado e cliente reclamando não podem esperar o fim do dia. Alguém atende o caso na hora, para a reclamação não virar avaliação ruim.",
  },
];

const points = [
  "Ajuda a manter ou recuperar a reputação perdida por erros internos",
  "Mostra aos proprietários os gargalos da operação",
  "Resolve atraso, item errado e reclamação na hora em que acontecem",
  "Reduz a insatisfação do cliente no momento em que ela acontece",
];

const GarconetPage = () => {
  return (
    <>
      <PageIntro
        kicker="Produto"
        title="Atendimento do chat e controle dos pedidos"
        lead="O Garçonet atua no chat do iFood na hora do problema, avisa o dono onde a operação travou e usa automações de despacho e controle dos pedidos, para a reclamação não virar avaliação ruim."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">Como funciona</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O atendimento entra no chat quando o cliente reclama. O dono recebe onde a operação travou. O despacho e o controle dos pedidos seguem com automação, no horário de venda.
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
                <Button size="lg" className="w-full cursor-pointer gap-2 text-primary-foreground">
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
          <h2 className="font-display text-3xl font-semibold">Atendimento no chat e controle dos pedidos</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            O Garçonet é um recurso que auxilia e atua num gargalo importante das operações, que é o atendimento ao cliente no chat e a melhora dos parâmetros com automações para despacho e controle operacional dos pedidos.
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
