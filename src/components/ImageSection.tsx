import { motion } from "framer-motion";

const ImageSection = () => {
    return (
        <section className="relative py-16 lg:py-24 noise-bg overflow-hidden flex justify-center items-center">
            <div className="container relative z-10 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-5xl mx-auto flex justify-center"
                >
                    <img
                        src="/logo02-Photoroom.png"
                        alt="AM Consultoria Logo"
                        className="w-full max-w-4xl h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ImageSection;
