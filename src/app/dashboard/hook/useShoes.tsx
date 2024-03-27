import { getShoes } from "@/utils/fetch";
import { useEffect, useState } from "react";

export const useShoes = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    getShoes()
      .then((res) => setShoes(res.tshirts.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return {
    shoes,
  };
};
