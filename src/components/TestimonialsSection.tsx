import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Luiz Arthur",
    business: "Pizzaria Dom Carvalho - Belém PA",
    text: "Antes do Antônio entrar não havia efetividade no iFood. Fui indicado e com a gestão do Antônio tivemos um salto nas vendas. Tornou nosso cardápio atrativo e aumentou nossas vendas.",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4NDQxMDQxNTI0MTA0NDIy?story_media_id=3827498283510640016_1688769703&igsh=ZGdyMDN0bGF2bjEy",
    stars: 5,
  },
  {
    name: "Edmundo Jr",
    business: "Mr Cheff Pizza - BH/MG",
    text: "Com a ajuda do especialista, que é o Antônio e uma gestão a 4 mãos, alcançamos 6 dígitos no faturamento.",
    link: "https://www.instagram.com/reel/C3i9zC-xngt/?igsh=Y2MwajNteGg3ZXIx",
    stars: 5,
  },
  {
    name: "Fred",
    business: "Meu X Burguer, BH/MG",
    text: "Foi só ele entrar aqui e os pedidos começaram a bombar. Essa parceria vai longe. Faça como o Fred e otimize seu iFood com ajustes estratégicos para alavancagem no delivery.",
    link: "https://www.instagram.com/reel/C9OOQSOxAhq/?igsh=MTc2M2YxeGJ2cnRvdw==",
    stars: 5,
  },
  {
    name: "Anderson",
    business: "Mister Dog - Cascavel, PR",
    text: "Eu tava bem perdido quanto a cardápio e iFood e o Antônio foi de suma importância. Recomendo! Ajudamos com melhoria de cardápio digital, otimização no iFood e gestão de loja.",
    link: "https://www.instagram.com/reel/DLnGNkETH5l/?igsh=MTdycDNtM2RxNWFocQ==",
    stars: 5,
  },
  {
    name: "Renato",
    business: "Ruffinus Pizzaria - Campo Grande/MS",
    text: "Eu não acreditava nisso, mas o Antônio melhorou minhas vendas e ficaram mais lucrativas. Diminuí os problemas e cancelamentos. Eu tive resultado e você também pode ter.",
    link: "https://www.instagram.com/reel/DEpzRYExvBL/?igsh=MWNvejZiN3c2dzBkNQ==",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="relative py-16 lg:py-24">
      <div className="section-divider mb-16 lg:mb-24" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16 px-4"
        >
          <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-2 sm:mt-3">
            Quem confia em nós, <span className="gradient-text">cresce</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.name} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl bg-card border border-border/50 p-8 hover:glow-primary transition-shadow duration-300 h-full flex flex-col"
                  >
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-6 flex-grow">"{t.text}"</p>
                    {t.link && (
                      <a href={t.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm font-medium mb-6 transition-colors border border-primary/30 rounded-full px-4 py-1.5 w-fit hover:bg-primary/10">
                        Ver depoimento
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <div className="mt-auto">
                      <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.business}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="bg-secondary/50 hover:bg-secondary border-none" />
              <CarouselNext className="bg-secondary/50 hover:bg-secondary border-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
