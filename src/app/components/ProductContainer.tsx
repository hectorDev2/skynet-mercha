"use client";
import { useFetch } from "@/index";
import { Products } from "./containers/Products/Products";
import ProductsTrending from "./ProductsTrending";

export const ProductContainer = () => {
  const { products } = useFetch();
  console.log(products);

  return (
    <>
      <Products exclusive={true} tshirts={products} />
      <Products tshirts={products} />
      <ProductsTrending products={products} />
    </>
  );
};
