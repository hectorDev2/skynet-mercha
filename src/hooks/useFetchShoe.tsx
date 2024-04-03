import { useEffect, useState } from "react";
import { getShoes } from "../utils/fetch";

export const useFetchShoe = () => {
  const [products, setProducts] = useState<any>([]);

  // getTshirts()
  useEffect(() => {
    getShoes().then((res: any) => {
      setProducts(res.shoes);
    });
    return () => {
      setProducts([]);
    };
  }, []);
  console.log(products);

  return {
    products,
  };
};
