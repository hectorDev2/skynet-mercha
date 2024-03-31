import { About } from "@/app/components/shared/landing/About";
import { ClientSection } from "@/app/components/shared/landing/ClientSection";
import { products, sliderMale } from "../Data";
import { SliderHeroShoes } from "../components/SliderHeroShoes";
import SliderShoes from "../components/SliderShoes";
import { Layout } from "@/app/layout/Layout";

export default function Shoes() {
  console.log(sliderMale);

  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes shoes={sliderMale} />
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
