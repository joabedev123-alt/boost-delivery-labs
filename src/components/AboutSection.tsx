import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp } from "lucide-react";
import imagem02 from "@/assets/imagem02.jpeg";

const AboutSection = () => {
    return (
        <section id="quem-somos" className="relative py-16 lg:py-24 noise-bg overflow-hidden">
            <div className="section-divider mb-16 lg:mb-24" />
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto px-4 sm:px-0">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl -z-10 transform translate-y-8" />
                        <div className="rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
                            <img
                                src={imagem02}
                                alt="Antônio Melo Consultoria"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-card border border-border/50 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-4 glow-primary"
                        >
                            <div className="bg-primary/10 p-3 rounded-full">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="font-display font-bold text-foreground text-lg">Resultados Reais</p>
                                <p className="text-xs text-muted-foreground">Em cada consultoria</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <span className="text-sm text-primary font-medium uppercase tracking-widest block mb-3">Quem Somos</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                            Antônio Melo <span className="gradient-text">Soluções em Delivery</span>
                        </h2>

                        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed lg:overflow-y-auto pr-0 lg:pr-4" style={{ maxHeight: "none", lg: { maxHeight: "400px" } } as any}>
                            <p>
                                A Antônio Melo Soluções em Delivery nasceu da percepção clara de uma oportunidade pouco explorada no mercado brasileiro: a gestão estratégica de plataformas de delivery.
                            </p>
                            <p>
                                Durante minha atuação como executivo na 99 Food, iFood e Hyperlocal Delivery, percebi que ainda não existia a profissão de Gestor de Plataformas. Enquanto as tecnologias evoluíam rapidamente, muitos donos de restaurantes enfrentavam dificuldades para entender os mecanismos das plataformas — seja por falta de conhecimento técnico, seja pela rotina intensa da operação.
                            </p>
                            <p>
                                Foi nesse cenário que enxerguei o futuro: a Gestão de Delivery não era apenas um serviço, mas uma nova especialização estratégica.
                            </p>
                            <p>
                                Decidi aprofundar meus estudos, compreender a fundo cada ferramenta, cada métrica e cada variável que impacta o desempenho de uma loja. O que começou como curiosidade profissional rapidamente se transformou em propósito.
                            </p>
                            <p>
                                Desde então, já são mais de 1.500 lojas atendidas, entre estabelecimentos credenciados e consultorias realizadas. Ao longo dessa trajetória, desenvolvemos estratégias focadas em crescimento sustentável, aumento de faturamento e, principalmente, lucratividade — porque sabemos que o empresário precisa de resultado, não apenas de movimentação.
                            </p>
                            <p>
                                Com o tempo, entendemos que vender mais é apenas parte da equação. A gestão de problemas, cancelamentos, avaliações e crises também exige método, estratégia e agilidade. Por isso, ampliamos nossa estrutura e formamos uma equipe especializada para oferecer uma gestão completa e eficiente.
                            </p>
                            <p>
                                Hoje, entregamos muito mais do que ajustes em cardápio ou campanhas promocionais. Entregamos visão estratégica, acompanhamento diário e decisões orientadas por dados.
                            </p>
                            <p className="font-semibold text-foreground pt-2">
                                Se você quer escalar sua operação, otimizar resultados e transformar seu delivery em uma máquina de crescimento, nós estamos prontos para te ajudar.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
