import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/5531990858563?text=Olá! Gostaria de saber mais sobre a gestão de delivery.";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    store: "",
    city: "",
    link: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. Loja: ${form.store}. Cidade: ${form.city}. Link: ${form.link}. ${form.message}`;
    window.open(
      `https://wa.me/5531990858563?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado ao WhatsApp.",
    });
  };

  return (
    <section id="contato" className="relative py-24">
      <div className="section-divider mb-24" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(15_90%_55%/0.08),transparent_60%)]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Pare de perder dinheiro por falta de <span className="gradient-text">estratégia</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pronto para crescer de verdade no iFood?
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto gradient-border rounded-2xl bg-card p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Telefone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              maxLength={20}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Nome da loja"
              value={form.store}
              onChange={(e) => setForm({ ...form, store: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
            />
            <Input
              placeholder="Cidade"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              required
              maxLength={100}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Input
            placeholder="Link da loja no iFood"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            maxLength={255}
            className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
          />
          <Textarea
            placeholder="Mensagem (opcional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            rows={4}
            className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground resize-none"
          />
          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit" className="bg-gradient-to-r from-primary to-accent text-primary-foreground gap-2 flex-1">
              <Send className="w-4 h-4" />
              ENVIAR
            </Button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button type="button" variant="outline" className="w-full border-primary/30 text-foreground hover:bg-primary/10 gap-2">
                <MessageCircle className="w-4 h-4" />
                CHAMAR NO WHATSAPP
              </Button>
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
