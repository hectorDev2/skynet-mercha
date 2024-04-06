import { About } from "../components/shared/landing/About";
import { ClientSection } from "../components/shared/landing/ClientSection";
import { Features } from "../components/shared/landing/Main";
import { features } from "../escultura/Data";
import { Hero } from "../components/shared/Hero";
import { Layout } from "../layout/Layout";
import { ContainerCategoryProducts } from "../dashboard/components/ContainerCategoryProducts";

const GamerPage = () => {
  return (
    <Layout>
      <Hero
        title="Polos Gamers"
        userLabel="generacion gamer"
        subtitle="explora nuestra gran variadad de modelos para gamers."
        theme="secondary"
      >
        <img src="polos/gamer-background.png" alt="pareja polos" />
      </Hero>
      <Features
        theme="secondary"
        subtitle="Nuestras polos divertidos y originales"
        title="Todo tipo de modelos de "
        stringColor="polos para parejas"
        features={features}
      />
      <ClientSection
        color="#309FFF"
        image="polos/gamer/gamer-background-2.png"
        theme="secondary"
        title="Clientes satisfechos"
      />
      <ContainerCategoryProducts category={1} />
      <About
        title="Sobre Nosotros"
        image="/shoes/preview-woman.png"
        content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
      />
    </Layout>
  );
};

export default GamerPage;
