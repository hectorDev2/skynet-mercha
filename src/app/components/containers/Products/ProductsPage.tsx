"use client";
import { useFetch } from "@/index";
import { Products } from "./Products";

const ProductsPage = ({ exclusive = false }) => {
  const { products } = useFetch();
  return <Products tshirts={products} exclusive={exclusive} example={false} />;
};

export default ProductsPage;
