"use client";
import { Products } from "@/app/components/containers/Products";
import { useFetchShoe } from "@/hooks/useFetchShoe";

export const ShoeList = () => {
  const { products } = useFetchShoe();
  console.log(products);
  return (
    <>
      <Products title="Zapatillas" tshirts={products} />
    </>
  );
};
