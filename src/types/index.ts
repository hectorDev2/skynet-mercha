export interface tShirts {
  id: string;
  name: string;
  category: string;
  price: number;
  colors: {
    id: number;
    name: string;
  }[];
  description: string;
  image: string[];
}
