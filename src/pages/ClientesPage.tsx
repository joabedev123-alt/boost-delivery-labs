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
        lead="Relatos de donos e gestores, e parte das marcas atendidas. O portfólio de logos segue em atualização conforme novas lojas entram."
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
