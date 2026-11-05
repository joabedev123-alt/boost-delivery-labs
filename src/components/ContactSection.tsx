import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de saber mais sobre a consultoria de delivery.");

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
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/60 bg-card p-5 sm:p-8 space-y-4 sm:space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-foreground">Nome</label>
              <Input
                id="contact-name"
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">Telefone</label>
              <Input
                id="contact-phone"
                placeholder="(31) 90000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                maxLength={20}
                className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="contact-store" className="text-sm font-medium text-foreground">Nome da loja</label>
              <Input
                id="contact-store"
                placeholder="Nome da loja"
                value={form.store}
                onChange={(e) => setForm({ ...form, store: e.target.value })}
                required
                maxLength={100}
                className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-city" className="text-sm font-medium text-foreground">Cidade</label>
              <Input
                id="contact-city"
                placeholder="Cidade"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                required
                maxLength={100}
                className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-link" className="text-sm font-medium text-foreground">Link da loja</label>
            <Input
              id="contact-link"
              placeholder="Link da loja no iFood"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              maxLength={255}
              className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-foreground">Mensagem</label>
            <Textarea
              id="contact-message"
              placeholder="O que você precisa resolver na operação"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" className="min-h-11 w-full sm:flex-1 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <Send className="w-4 h-4" />
              Enviar
            </Button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 block">
              <Button type="button" variant="outline" className="min-h-11 w-full cursor-pointer border-border text-foreground hover:bg-secondary gap-2">
                <WhatsAppIcon className="w-4 h-4" />
                Chamar no WhatsApp
              </Button>
            </a>
          </div>
        </form>
  );
};

export default ContactSection;
