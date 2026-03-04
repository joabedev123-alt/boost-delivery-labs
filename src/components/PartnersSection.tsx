import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Logo imports
import bifao from "@/assets/Asahi Pizzaria e Restaurante logos/Bifão da Villa logo.png";
import cantinho from "@/assets/Asahi Pizzaria e Restaurante logos/Cantinho do Sushi Logo.jpg";
import chinesinho from "@/assets/Asahi Pizzaria e Restaurante logos/Chinesinho Express Campo Grande.jpg";
import dimas from "@/assets/Asahi Pizzaria e Restaurante logos/Dimas lanches logo.jpg";
import domcarvalho from "@/assets/Asahi Pizzaria e Restaurante logos/Dom Carvalho Pizzaria Logo.jpg";
import japa from "@/assets/Asahi Pizzaria e Restaurante logos/Eu Amo Japa Logo.jpg";
import meux from "@/assets/Asahi Pizzaria e Restaurante logos/Logo Meu X Burguer.jpg";
import mrcheff from "@/assets/Asahi Pizzaria e Restaurante logos/Mister Cheff Pizza Logo.jpg";
import oraburguer from "@/assets/Asahi Pizzaria e Restaurante logos/Ora Burguer logo.png";
import saobeneditto from "@/assets/Asahi Pizzaria e Restaurante logos/Pizzaria São Beneditto logo.jpg";
import recheio from "@/assets/Asahi Pizzaria e Restaurante logos/Recheio do Chef Hamburgueria Logo.jpg";
import wanted from "@/assets/Asahi Pizzaria e Restaurante logos/Wanted Burgueria logo.png";
import sushimotto from "@/assets/Asahi Pizzaria e Restaurante logos/sushi motto logo.png";

const partners = [
    { name: "Bifão da Villa", logo: bifao },
    { name: "Cantinho do Sushi", logo: cantinho },
    { name: "Chinesinho Express", logo: chinesinho },
    { name: "Dimas Lanches", logo: dimas },
    { name: "Dom Carvalho", logo: domcarvalho },
    { name: "Eu Amo Japa", logo: japa },
    { name: "Meu X Burguer", logo: meux },
    { name: "Mister Cheff", logo: mrcheff },
    { name: "Ora Burguer", logo: oraburguer },
    { name: "São Beneditto", logo: saobeneditto },
    { name: "Recheio do Chef", logo: recheio },
    { name: "Wanted Burgueria", logo: wanted },
    { name: "Sushi Motto", logo: sushimotto },
];

const PartnersSection = () => {
    return (
        <section className="py-12 bg-secondary/30 overflow-hidden">
            <div className="container px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-xs sm:text-sm text-primary font-medium uppercase tracking-widest">Nossos Parceiros</span>
                    <h2 className="text-xl sm:text-2xl font-display font-bold mt-2">
                        Empresas que confiam na nossa <span className="gradient-text">gestão</span>
                    </h2>
                </motion.div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4 flex items-center">
                        {partners.map((partner, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                                <div className="flex items-center justify-center p-2 transition-all duration-300 h-32 md:h-40">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default PartnersSection;
