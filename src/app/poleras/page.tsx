import { About } from "@/app/components/shared/landing/About";
import { ClientSection } from "@/app/components/shared/landing/ClientSection";
import { Layout } from "@/app/layout/Layout";
import { products, jackets } from "./Data";
import { SliderHeroShoes } from "../zapatillas/components/SliderHeroShoes";
import { Banner } from "../components/shared/Banner";
import SliderJackets from "./components/SliderJacket";
import { JacketList } from "./components/JacketList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poleras",
};
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
        <JacketList />
        <Banner image="/jackets/banner.png" bgImage="/jackets/banner-bg.png">
          <div className="flex flex-col gap-y-4 z-50  ">
            <h1
              style={{ textShadow: "#00000099 2px 5px" }}
              className="md:text-6xl drop-shadow-lg text-4xl"
            >
              Especiales ofertas por lanzamiento
            </h1>
            <p className="flex flex-row gap-x-0.5 items-center text-lg text-[#04ADFF]">
              Exclusivos para gente gammer
            </p>
            <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4">
              Descubre nuestros modelos
            </button>
          </div>
        </Banner>
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
