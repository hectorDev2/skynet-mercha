import { getJackets, getShoes } from "@/utils/fetch";
import { Jacket } from "@prisma/client";
import { useEffect, useState } from "react";

export const useJackets = () => {
  const [jackets, setJackets] = useState<Jacket[]>([]);
  useEffect(() => {
    getJackets()
      .then((res: any) => setJackets(res?.jackets?.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return {
    jackets,
  };
};
