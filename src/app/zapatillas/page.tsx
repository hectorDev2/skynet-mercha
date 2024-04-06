import { Layout } from "../layout/Layout";
import { ClientSection } from "../components/shared/landing/ClientSection";
import { About } from "../components/shared/landing/About";
import { products, sliderMale } from "./Data";
import SliderShoes from "./components/SliderShoes";
import { SliderHeroShoes } from "./components/SliderHeroShoes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapatillas ",
};
export default function Shoes() {
  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes shoes={sliderMale} />
        <ClientSection
          image="/shoes/preview.png"
          theme="primary"
          title="Zapatillas Personalizadas"
          color="#309FFF"
        />
        <SliderShoes
          tag="detalles"
          color="#309FFF"
          theme="primary"
          products={products}
        />
        <About
          title="Sobre Nosotros"
          content="Tenemos los mas grandes artistas del sector para confeccionar sus zapatillas personalizadas de la mayor calidad posible"
          image="/shoes/preview.png"
        />
      </div>
    </Layout>
  );
}
