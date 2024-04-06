"use client";
import { Products } from "@/app/components/containers/Products";
import { useFetchJacket } from "@/hooks/useFetchJacket";

export const JacketList = () => {
  const { products } = useFetchJacket();
  console.log(products);

  return <Products title="Poleras" tagProduct="poleras" products={products} />;
};
