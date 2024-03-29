import { Layout } from "../layout/Layout";
import { ClientSection } from "../components/shared/landing/ClientSection";
import { About } from "../components/shared/landing/About";
import { products } from "./Data";
import SliderShoes from "./components/SliderShoes";

export default function Shoes() {
  return (
    <Layout>
      <div className="my-[130px]">
        <ClientSection
          image="parejas/carousel/1.png"
          theme="secondary"
          title="Clientes satisfechos"
        />
        <SliderShoes tag="detalles" theme="primary" products={products} />
        <About />
      </div>
    </Layout>
  );
}
