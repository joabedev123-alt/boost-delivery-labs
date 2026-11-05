import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Página não encontrada | AM Consultoria";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="py-24">
      <div className="container max-w-xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Essa página não existe</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          O endereço não corresponde a nenhuma página da consultoria.
        </p>
        <Link to="/" className="mt-8 inline-flex min-h-11 items-center text-primary hover:underline">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
