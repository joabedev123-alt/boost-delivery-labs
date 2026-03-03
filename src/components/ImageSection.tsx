import { motion } from "framer-motion";
import imagem01 from "@/assets/imagem01/WhatsApp Image 2026-03-03 at 11.58.14.jpeg";

const ImageSection = () => {
    return (
        <section className="relative py-16 lg:py-24 noise-bg overflow-hidden">
            <div className="section-divider mb-16 lg:mb-24" />
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20"
                >
                    <img
                        src={imagem01}
                        alt="Destaque Boost Delivery"
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ImageSection;
