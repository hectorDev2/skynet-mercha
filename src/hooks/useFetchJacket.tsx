import { useEffect, useState } from "react";
import { getJackets } from "../utils/fetch";

export const useFetchJacket = () => {
  const [products, setProducts] = useState<any>([]);

  // getTshirts()
  useEffect(() => {
    getJackets().then((res: any) => {
      setProducts(res.jackets);
    });
    return () => {
      setProducts([]);
    };
  }, []);

  return {
    products,
  };
};
