"use client";
import { Products } from "@/app/components/containers/Products";
import { getTshirtsParams } from "@/utils/fetch";
import { useEffect, useState } from "react";
export const ContainerCategoryProducts = ({
  category,
}: {
  category: number;
}) => {
  const [products, setProducts] = useState<any>();

  // getTshirts()
  useEffect(() => {
    getTshirtsParams(category).then((res) => {
      setProducts(res.tshirts);
    });
    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <>
      <Products tshirts={products} color="black" />
    </>
  );
};
