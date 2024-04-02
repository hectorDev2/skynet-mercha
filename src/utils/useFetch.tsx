"use client";
import { useEffect, useState } from "react";
import { getTshirts } from "./fetch";

export const useFetch = () => {
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
