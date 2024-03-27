const envUrl = process.env.NEXT_PUBLIC_URL;

export const getTshirts = async () => {
  try {
    const res = await fetch(`${envUrl}/api/tshirts`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return [];
  }
};
export const getTshirtsParams = async (categoryId?: number) => {
  try {
    const res = await fetch(
      `${envUrl}/api/tshirts?category=${categoryId ?? ""}`
    );
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.log(error);
  }
};

export const getTshirtById = async (id: string) => {
  const res = await fetch(`${envUrl}/api/tshirts/${id}`);
  const resJson = await res.json();
  console.log(resJson);

  return resJson;
};

export const deleteTshirt = async (id: string) => {
  const res = await fetch(`api/tshirts/${id}`, {
    method: "DELETE",
  });
  return res.ok;
};

export const getShoes = async () => {
  try {
    const res = await fetch(`${envUrl}/api/shoes`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    return [];
  }
};
