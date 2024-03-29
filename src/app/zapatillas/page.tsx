import { Layout } from "../layout/Layout";
import { ClientSection } from "../components/shared/landing/ClientSection";
import { About } from "../components/shared/landing/About";
import { products } from "./Data";
import SliderShoes from "./components/SliderShoes";
import { SliderHeroShoes } from "./components/SliderHeroShoes";

export default function Shoes() {
  return (
    <Layout>
      <div className="my-[150px]">
        <SliderHeroShoes />
        <ClientSection
          image="shoes/preview.png"
          theme="primary"
          title="Zapatillas Personalizadas"
        />
        <SliderShoes tag="detalles" theme="primary" products={products} />
        <About />
      </div>
    </Layout>
  );
}
