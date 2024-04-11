import { Shoe, tShirt } from "@/types";

const envUrl = process.env.NEXT_PUBLIC_URL;

export const getTshirts = async (): Promise<tShirt | []> => {
  try {
    const res = await fetch(`${envUrl}/api/tshirts`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return [];
  }
};

//#region
export const getTshirtsParams = async (
  categoryId?: number
): Promise<tShirt | any> => {
  try {
    const res = await fetch(
      `${envUrl}/api/tshirts?category=${categoryId ?? ""}`
    );
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTshirtById = async (id: string): Promise<tShirt | []> => {
  try {
    const res = await fetch(`${envUrl}/api/tshirts/${id}`);
    const resJson = await res.json();
    console.log(resJson);

    return resJson;
  } catch (error) {
    return [];
  }
};

export const deleteTshirt = async (id: string): Promise<any> => {
  const res = await fetch(`api/tshirts/${id}`, {
    method: "DELETE",
  });
  return res.ok;
};

export const getShoes = async (): Promise<Shoe[] | []> => {
  try {
    const res = await fetch(`${envUrl}/api/shoes`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return [];
  }
};

export const getJackets = async (): Promise<Shoe[] | []> => {
  try {
    const res = await fetch(`${envUrl}/api/jackets`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return [];
  }
};

export const getJacketId = async (id: string): Promise<tShirt | []> => {
  try {
    const res = await fetch(`${envUrl}/api/jackets/${id}`);
    const resJson = await res.json();
    console.log(resJson);

    return resJson;
  } catch (error) {
    return [];
  }
};

export const getTShoeId = async (id: string): Promise<tShirt | []> => {
  try {
    const res = await fetch(`${envUrl}/api/shoes/${id}`);
    const resJson = await res.json();
    console.log(resJson);

    return resJson;
  } catch (error) {
    return [];
  }
};
