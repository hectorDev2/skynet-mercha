"use client";
import { useFetchTshirt } from "@/hooks/index";
import { Products } from "./Products";

const ProductsPage = ({ exclusive = false }) => {
  const { products } = useFetchTshirt();
  return <Products tshirts={products} exclusive={exclusive} example={false} />;
};

export default ProductsPage;
