import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Store } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 noise-bg">
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold gradient-text mb-4">AM Consultoria</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gestão profissional de delivery. Mais vendas, mais lucro, menos dor de cabeça.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/antoniomelo.consultoriabh?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+gest%C3%A3o+de+delivery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors">
                <WhatsAppIcon className="w-4 h-4" />
                (31) 99085-8563
              </a>
              <a href="mailto:antoniomelo.consultoriabh@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                antoniomelo.consultoriabh@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Endereço</h4>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="flex flex-col gap-1">
                <span>Rua Pomba, 485 - Bairro Goiânia</span>
                <span>Belo Horizonte/MG</span>
                <span className="text-xs mt-1">CNPJ: 57.171.178/0001-12</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/antoniomelo.bh?utm_source=qr&igsh=MnF1a3o1OGgzM2Fw" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/1CZDZM4VDH/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/antoniomelocomercial?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0rMo2TknLLTE0YLRSNqhINLNMMjM2MU9LM081SbMyqDAxNbI0SDI3tzAxTTFLM0jzUkrMK8nPy8xXyE3NyVcozs8pPbw8P7VYITVXISU1J7MstagSAImJHJk&q=antonio+melo+solu%C3%A7oes+em+delivery&oq=antoniomelo+s&gs_lcrp=EgZjaHJvbWUqEggBEC4YDRivARjHARiABBiOBTIGCAAQRRg5MhIIARAuGA0YrwEYxwEYgAQYjgUyCQgCEAAYDRiABDIICAMQABgNGB4yCAgEEAAYDRgeMgoIBRAAGAUYDRgeMgoIBhAAGAUYDRgeMgoIBxAAGAUYDRgeMgoICBAAGAUYDRge0gEINDU2MWowajeoAgiwAgHxBQc_YT0OqXmP&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-secondary hover:bg-primary/20 transition-colors group" title="Google Meu Negócio">
                <Store className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AM Consultoria. Todos os direitos reservados.
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="https://camaly.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-secondary/80 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          >
            Produzida com <span className="text-green-500">💚</span> por <span className="font-bold tracking-wide text-primary">CAMALY</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
