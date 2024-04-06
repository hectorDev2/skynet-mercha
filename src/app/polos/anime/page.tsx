import { About } from "../../components/shared/landing/About";
import { ClientSection } from "../../components/shared/landing/ClientSection";
import { Features } from "../../components/shared/landing/Main";
import { features } from "../../escultura/Data";
import { Hero } from "../../components/shared/Hero";
import { Layout } from "../../layout/Layout";
import { ContainerCategoryProducts } from "@/app/dashboard/components/ContainerCategoryProducts";

const Page = () => {
  return (
    <Layout>
      <Hero
        title="Polos Anime"
        userLabel="gente cool y otaku"
        subtitle="explora nuestra gran variadad de modelos de tazas."
        theme="secondary"
      >
        <img src="/polos/anime/anime-background.png" alt="pareja polos" />
      </Hero>
      <Features
        theme="secondary"
        subtitle="Nuestras polos divertidos y originales"
        title="Todo tipo de modelos de "
        stringColor="polos para otakus"
        features={features}
      />
      <ClientSection
        color="#309FFF"
        image="/polos/anime/anime-background-2.png"
        theme="secondary"
        title="Clientes satisfechos"
      />
      <ContainerCategoryProducts category={3} />
      <About
        title="Sobre Nosotros"
        image="/polos//anime/anime-background-1.png"
        content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
      />
    </Layout>
  );
};

export default Page;
