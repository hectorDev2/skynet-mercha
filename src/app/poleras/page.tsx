import { About } from "@/app/components/shared/landing/About";
import { ClientSection } from "@/app/components/shared/landing/ClientSection";
import { Layout } from "@/app/layout/Layout";
import { products, jackets } from "./Data";
import { SliderHeroShoes } from "../zapatillas/components/SliderHeroShoes";
import SliderShoes from "../zapatillas/components/SliderShoes";
import SliderJackets from "./components/SliderJacket";

export default function Shoes() {
  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes shoes={jackets} />
        <ClientSection
          image="/jackets/preview.png"
          theme="primary"
          title="Casacas Personalizadas"
          color="#309FFF"
        />
        <SliderJackets
          tag="detalles"
          color="#309FFF"
          theme="primary"
          products={products}
        />
        <About
          title="Sobre Nosotros"
          content="Tenemos los mas grandes artistas del sector para confeccionar sus casacas, abrigos  personalizadas de la mayor calidad posible"
          image="/jackets/preview.png"
        />
      </div>
    </Layout>
  );
}
