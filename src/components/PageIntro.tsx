import { useEffect } from "react";

type PageIntroProps = {
  kicker: string;
  title: string;
  lead: string;
};

const PageIntro = ({ kicker, title, lead }: PageIntroProps) => {
  useEffect(() => {
    document.title = `${title} | Antônio Melo`;
  }, [title]);

  return (
    <header className="border-b border-border/60 py-14 lg:py-20">
      <div className="container max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">{kicker}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{lead}</p>
      </div>
    </header>
  );
};

export default PageIntro;
