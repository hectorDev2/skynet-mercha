export const postRequest = async (data: any, productTag: string) => {
  return await fetch(`/api/${productTag}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      price: Number(data.price),
    }),
  });
};
