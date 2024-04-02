"use client";
import { Products } from "@/app/components/containers/Products";
import { getTshirtsParams } from "@/utils/fetch";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const ProductsContainer = () => {
  const [products, setProducts] = useState<any>();
  const { id } = useParams();

  // getTshirts()
  useEffect(() => {
    getTshirtsParams(1).then((res: any) => {
      setProducts(
        res?.tshirts?.filter((tshirt: any) => tshirt?.subcategory === id)
      );
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

export default ProductsContainer;
