import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/contact";

const platforms = ["iFood", "99Food", "Keeta"] as const;
const pains = ["Vendas baixas", "Margem", "Cancelamentos", "Avaliações", "Cardápio"] as const;

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de saber mais sobre a consultoria de delivery.");

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    store: "",
    city: "",
    link: "",
    stores: "",
    revenue: "",
    message: "",
  });
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  const toggle = (list: string[], value: string, setList: (next: string[]) => void) => {
    setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    const text = [
      `Olá! Meu nome é ${form.name}.`,
      `Telefone: ${form.phone}.`,
      `Loja: ${form.store}. Cidade: ${form.city}.`,
      `Plataformas: ${selectedPlatforms.join(", ") || "não informado"}.`,
      `Lojas ou marcas: ${form.stores || "não informado"}.`,
      `Faturamento mensal no delivery: ${form.revenue || "não informado"}.`,
      `O que mais incomoda: ${selectedPains.join(", ") || "não informado"}.`,
      `Link: ${form.link || "não informado"}.`,
      form.message,
    ].filter(Boolean).join(" ");
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
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-foreground">Plataformas da loja</legend>
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform) => (
                <label key={platform} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border/60 px-3 text-base">
                  <Checkbox
                    checked={selectedPlatforms.includes(platform)}
                    onCheckedChange={() => toggle(selectedPlatforms, platform, setSelectedPlatforms)}
                    className="h-5 w-5"
                  />
                  {platform}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contact-stores" className="text-sm font-medium text-foreground">Quantas lojas ou marcas</label>
              <Input
                id="contact-stores"
                placeholder="Ex.: 1 loja, 2 marcas"
                value={form.stores}
                onChange={(e) => setForm({ ...form, stores: e.target.value })}
                maxLength={40}
                className="min-h-11 bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-revenue" className="text-sm font-medium text-foreground">Faturamento mensal no delivery</label>
              <select
                id="contact-revenue"
                value={form.revenue}
                onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                className="flex h-11 min-h-11 w-full rounded-md border border-border/50 bg-secondary px-3 text-base text-foreground"
              >
                <option value="">Selecione uma faixa</option>
                <option>Até R$ 20 mil</option>
                <option>R$ 20–60 mil</option>
                <option>R$ 60–150 mil</option>
                <option>Acima de R$ 150 mil</option>
              </select>
            </div>
          </div>
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium text-foreground">O que mais incomoda hoje</legend>
            <div className="flex flex-wrap gap-3">
              {pains.map((pain) => (
                <label key={pain} className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border/60 px-3 text-base">
                  <Checkbox
                    checked={selectedPains.includes(pain)}
                    onCheckedChange={() => toggle(selectedPains, pain, setSelectedPains)}
                    className="h-5 w-5"
                  />
                  {pain}
                </label>
              ))}
            </div>
          </fieldset>
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
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
            <Checkbox
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked === true)}
              required
              className="mt-0.5 h-5 w-5"
            />
            <span>Autorizo o uso desses dados para a consultoria retornar pelo WhatsApp sobre a minha loja.</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" disabled={!consent} className="min-h-11 w-full sm:flex-1 cursor-pointer text-primary-foreground gap-2">
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
