import { motion } from "framer-motion";
import { Target } from "lucide-react";

const ObjectiveSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(15_90%_55%/0.08),transparent_70%)]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-8">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
            Nosso objetivo é simples:
          </h2>
          <p className="text-4xl sm:text-5xl font-display font-bold gradient-text mt-4">
            Fazer você vender mais e com lucro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ObjectiveSection;
