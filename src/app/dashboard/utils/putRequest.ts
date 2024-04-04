export const putRequest = async (data: any, productTag: string, id: string) => {
  return await fetch(`/api/${productTag}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      price: Number(data.price),
    }),
  });
};
