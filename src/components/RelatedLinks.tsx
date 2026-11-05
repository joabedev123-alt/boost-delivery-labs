import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type RelatedLink = {
  to: string;
  title: string;
  text: string;
};

const RelatedLinks = ({ links }: { links: RelatedLink[] }) => {
  return (
    <section className="border-t border-border/60 py-14">
      <div className="container">
        <h2 className="font-display text-2xl font-semibold">Continue por aqui</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-2 font-display text-xl font-semibold">
                {link.title}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
