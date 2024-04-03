import { useEffect, useState } from "react";
import { getTshirts } from "../utils/fetch";

export const useFetchTshirt = () => {
  const [products, setProducts] = useState<any>([]);

  // getTshirts()
  useEffect(() => {
    getTshirts().then((res: any) => {
      setProducts(res.tshirts);
    });
    return () => {
      setProducts([]);
    };
  }, []);

  return {
    products,
  };
};
