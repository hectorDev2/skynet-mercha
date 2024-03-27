import { getTshirts } from "@/utils/fetch";
import { useEffect, useState } from "react";

export const useTshirts = () => {
  const [tshirts, setTshirts] = useState([]);
  useEffect(() => {
    getTshirts()
      .then((res) => setTshirts(res.tshirts.reverse()))
      .catch((error) => console.log(error));
  }, []);
  return {
    tshirts,
  };
};
