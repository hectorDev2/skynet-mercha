import { About } from "@/app/components/shared/landing/About";
import { ClientSection } from "@/app/components/shared/landing/ClientSection";
import { products, sliderWoman } from "../Data";
import { SliderHeroShoes } from "../components/SliderHeroShoes";
import { Layout } from "@/app/layout/Layout";
import SliderShoes from "../components/SliderShoes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapatillas Mujer",
};
export default function Shoes() {
  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes shoes={sliderWoman} />
        <ClientSection
          image="/shoes/preview-woman.png"
          theme="secondary"
          color="#F595D3"
          title="Zapatillas Personalizadas"
        />
        <SliderShoes
          color="#F595D3"
          tag="detalles"
          theme="secondary"
          products={products}
        />
        <About
          title="Sobre Nosotros"
          image="/shoes/preview-woman.png"
          content="Emprendimiento de Zapatillas femeninas confeccionadas personalizadas segun el gusto del cliente"
        />
      </div>
    </Layout>
  );
}
