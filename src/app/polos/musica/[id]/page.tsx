import { features } from "@/app/escultura/Data";
import { Features } from "@/app/components/shared/landing/Main";
import { Layout } from "@/app/layout/Layout";
import ProductsContainer from "../components/ProductsSubcategories";

const GamerPage = () => {
  return (
    <Layout>
      <div className="my-[100px]">
        <ProductsContainer />
        <Features
          theme="secondary"
          subtitle="Nuestras polos divertidos y originales"
          title="Todo tipo de modelos de "
          stringColor="polos para parejas"
          features={features}
        />
      </div>
    </Layout>
  );
};

export default GamerPage;
