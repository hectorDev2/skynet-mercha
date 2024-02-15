import { create } from "zustand";
import { tShirts } from "./database";

export const useStore = create((set) => ({
  tShirts,
  getById: (id: string) => {
    return tShirts.find((tShirt: any) => tShirt.id === id);
  },
  chargeTshirts: (data: any) => {
    set((state: any) => ({
      characters: data,
    }));
  },
}));
