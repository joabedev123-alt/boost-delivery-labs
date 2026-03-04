import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
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
import acaiNopeh from "@/assets/Asahi Pizzaria e Restaurante logos/Açaí Nopeh Logo.png";
import chapaMagica from "@/assets/Asahi Pizzaria e Restaurante logos/Chapa Magica logo.jpg";
import duoGelatto from "@/assets/Asahi Pizzaria e Restaurante logos/Duo Gelatto Logo.jpg";
import espetinhoTilias from "@/assets/Asahi Pizzaria e Restaurante logos/Espetinho do Tilias Santa Luzia.jpg";
import guizzaPizzaria from "@/assets/Asahi Pizzaria e Restaurante logos/Guizza Pizzaria Ribeirão Preto.jpg";
import juditeVó from "@/assets/Asahi Pizzaria e Restaurante logos/Judite comida de vó logo.png";
import kameSushi from "@/assets/Asahi Pizzaria e Restaurante logos/Kame Sushi Logo.jpg";
import nossoGastronomia from "@/assets/Asahi Pizzaria e Restaurante logos/Nosso Gastronomia logo.png";
import onlineLanches from "@/assets/Asahi Pizzaria e Restaurante logos/Online Lanches Logo.jpg";
import orionKitchen from "@/assets/Asahi Pizzaria e Restaurante logos/Orion Cloud Kitchens logo.png";
import pandasSaladeria from "@/assets/Asahi Pizzaria e Restaurante logos/Pandas Saladeria.jpg";
import personalHotDog from "@/assets/Asahi Pizzaria e Restaurante logos/Personal Hot Dog Logo.jpg";
import pizzariaMansur from "@/assets/Asahi Pizzaria e Restaurante logos/Pizzaria Mansur Logo.png";
import pizzariaPorto from "@/assets/Asahi Pizzaria e Restaurante logos/Pizzaria do Porto logo.png";
import paoCia from "@/assets/Asahi Pizzaria e Restaurante logos/Pão & Cia logo.jpg";
import rinnusRestaurante from "@/assets/Asahi Pizzaria e Restaurante logos/Rinnus restaurante logo.jpg";
import ruffinusPizzaria from "@/assets/Asahi Pizzaria e Restaurante logos/Ruffinus Pizzaria Logo.png";
import serranosArabe from "@/assets/Asahi Pizzaria e Restaurante logos/Serranos Arabe logo.jpg";
import sevenPizzaria from "@/assets/Asahi Pizzaria e Restaurante logos/Seven Pizzaria Macaé.png";
import trilhasAmazonia from "@/assets/Asahi Pizzaria e Restaurante logos/Trilhas da Amazonia logo.jpg";
import villagiumLogo from "@/assets/Asahi Pizzaria e Restaurante logos/Villagium Logo.jpg";
import pizzaMania from "@/assets/Asahi Pizzaria e Restaurante logos/pizza mania logo.jpg";
import saboresSete from "@/assets/Asahi Pizzaria e Restaurante logos/sabores em sete Logo.jpg";

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
    { name: "Açaí Nopeh", logo: acaiNopeh },
    { name: "Chapa Magica", logo: chapaMagica },
    { name: "Duo Gelatto", logo: duoGelatto },
    { name: "Espetinho do Tilias", logo: espetinhoTilias },
    { name: "Guizza Pizzaria", logo: guizzaPizzaria },
    { name: "Judite comida de vó", logo: juditeVó },
    { name: "Kame Sushi", logo: kameSushi },
    { name: "Nosso Gastronomia", logo: nossoGastronomia },
    { name: "Online Lanches", logo: onlineLanches },
    { name: "Orion Kitchen", logo: orionKitchen },
    { name: "Pandas Saladeria", logo: pandasSaladeria },
    { name: "Personal Hot Dog", logo: personalHotDog },
    { name: "Pizzaria Mansur", logo: pizzariaMansur },
    { name: "Pizzaria do Porto", logo: pizzariaPorto },
    { name: "Pão & Cia", logo: paoCia },
    { name: "Rinnus Restaurante", logo: rinnusRestaurante },
    { name: "Ruffinus Pizzaria", logo: ruffinusPizzaria },
    { name: "Serranos Arabe", logo: serranosArabe },
    { name: "Seven Pizzaria", logo: sevenPizzaria },
    { name: "Trilhas da Amazonia", logo: trilhasAmazonia },
    { name: "Villagium", logo: villagiumLogo },
    { name: "Pizza Mania", logo: pizzaMania },
    { name: "Sabores em Sete", logo: saboresSete },
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

                <div className="max-w-6xl mx-auto px-4 sm:px-12 relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 1500,
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
                        <div className="hidden sm:block">
                            <CarouselPrevious className="bg-secondary/50 hover:bg-secondary border-none -left-4 sm:-left-12" />
                            <CarouselNext className="bg-secondary/50 hover:bg-secondary border-none -right-4 sm:-right-12" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
