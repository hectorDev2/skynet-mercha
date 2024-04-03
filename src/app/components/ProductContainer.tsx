"use client";
import { useFetchTshirt } from "@/index";
import { Products } from "./containers/Products/Products";
import ProductsTrending from "./ProductsTrending";

export const ProductContainer = () => {
  const { products } = useFetchTshirt();

  return (
    <>
      <ProductsTrending products={products} />
      <Products exclusive={true} tshirts={products} />
      <Products tshirts={products} />
    </>
  );
};
