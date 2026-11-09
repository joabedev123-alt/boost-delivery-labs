import PageIntro from "@/components/PageIntro";
import RelatedLinks from "@/components/RelatedLinks";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";

const ClientesPage = () => {
  return (
    <>
      <PageIntro
        kicker="Clientes"
        title="Quem já conduz a loja com a consultoria"
        lead="Lojas atendidas em Minas Gerais, Pará, Paraná, Mato Grosso do Sul e outros estados. Os relatos trazem nome, loja e cidade."
      />
      <TestimonialsSection />
      <PartnersSection />
      <RelatedLinks
        links={[
          { to: "/a-empresa", title: "A empresa", text: "A trajetória por trás das lojas atendidas." },
          { to: "/contato", title: "Contato", text: "Conte a sua operação para começar uma conversa." },
        ]}
      />
    </>
  );
};

export default ClientesPage;
