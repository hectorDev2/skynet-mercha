import { About } from "@/app/components/shared/landing/About";
import { ClientSection } from "@/app/components/shared/landing/ClientSection";
import Layout from "@/app/layout";
import { products, sliderWoman } from "../Data";
import { SliderHeroShoes } from "../components/SliderHeroShoes";
import SliderShoes from "../components/SliderShoes";

export default function Shoes() {
  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes shoes={sliderWoman} />
        <ClientSection
          image="/shoes/preview.png"
          theme="primary"
          title="Zapatillas Personalizadas"
        />
        <SliderShoes tag="detalles" theme="primary" products={products} />
        <About />
      </div>
    </Layout>
  );
}
