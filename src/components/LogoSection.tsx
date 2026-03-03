import { motion } from "framer-motion";

const LogoSection = () => {
    return (
        <section className="relative pt-32 pb-4 sm:pt-40 sm:pb-8 flex justify-center items-center z-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="px-4"
            >
                <img
                    src="/logo02.png"
                    alt="AM Consultoria Logo"
                    className="h-32 sm:h-48 md:h-64 lg:h-72 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </motion.div>
        </section>
    );
};

export default LogoSection;
