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
                            Nosso foco é <span className="gradient-text">alavancar</span> o seu negócio.
                        </h2>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                A <strong>AM Consultoria</strong> nasceu da paixão por transformar a realidade de donos de delivery. Sabemos das noites mal dormidas, do estresse operacional e da dificuldade em ver o faturamento acompanhando todo o suor do dia a dia.
                            </p>
                            <p>
                                Nossa atuação vai muito além de "apertar botões" nas plataformas. Somos parceiros estratégicos que entram no seu negócio para analisar ponta a ponta: desde a foto do cardápio até a precificação e posicionamento na sua região.
                            </p>
                        </div>

                        <ul className="mt-8 space-y-4">
                            {[
                                "Atendimento consultivo e humanizado",
                                "Foco extremo no aumento de conversões e ROI",
                                "Experiência comprovada com grandes marcas"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="bg-primary/10 rounded-full p-1 shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium text-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
