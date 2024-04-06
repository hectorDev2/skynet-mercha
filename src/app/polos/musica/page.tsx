import { About } from "../../components/shared/landing/About";
import { ClientSection } from "../../components/shared/landing/ClientSection";
import { Features } from "../../components/shared/landing/Main";
import { features } from "../../escultura/Data";
import { Hero } from "../../components/shared/Hero";
import { Layout } from "../../layout/Layout";
import { Metadata } from "next";
import { ContainerCategoryProducts } from "../../dashboard/components/ContainerCategoryProducts";

export const metadata: Metadata = {
  title: "Polos Musica",
};
const GamerPage = () => {
  return (
    <Layout>
      <Hero
        title="Polos Musica"
        userLabel="generacion Melodia"
        subtitle="explora nuestra gran variadad de modelos para amantes de la musica."
        theme="secondary"
      >
        <img src="/polos/music/music-background.png" alt="pareja polos" />
      </Hero>
      <Features
        theme="secondary"
        subtitle="Nuestras polos divertidos y originales"
        title="Todo tipo de modelos de "
        stringColor="polos para amantes de la musica"
        features={features}
      />
      <ClientSection
        color="#309FFF"
        image="/polos/music/music-background-2.png"
        theme="secondary"
        title="Clientes satisfechos"
      />
      <ContainerCategoryProducts category={2} />
      <About
        title="Sobre Nosotros"
        image="/shoes/preview-woman.png"
        content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
      />
    </Layout>
  );
};

export default GamerPage;
