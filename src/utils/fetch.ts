export const getTshirts = async (categoryId?: number) => {
  const res = await fetch(`http://localhost:3000/api/tshirts`);
  const resJson = await res.json();
  console.log(resJson);

  return resJson;
};
export const getTshirtsParams = async (categoryId: number) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/tshirts?category=${categoryId}`
    );
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.log(error);
  }
};

export const getTshirtById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tshirts/${id}`);
  const resJson = await res.json();
  return resJson;
};

export const deleteTshirt = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/tshirts/${id}`, {
    method: "DELETE",
  });
  return res.ok;
};
