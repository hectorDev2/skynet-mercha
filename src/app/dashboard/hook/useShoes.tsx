import { Shoe } from "@/types";
import { getShoes } from "@/utils/fetch";
import { useEffect, useState } from "react";

export const useShoes = () => {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  useEffect(() => {
    getShoes()
      .then((res: any) => setShoes(res?.shoes?.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return {
    shoes,
  };
};
