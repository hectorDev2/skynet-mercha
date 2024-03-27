"use client";
import { useForm } from "react-hook-form";

export const useSubmitPOST = ({ id }: { id: any }) => {
  const { register, setValue, handleSubmit, watch } = useForm();

  const initForm = (product: any) => {
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("images", product.images);
    setValue("category", product.category);
    setValue("subcategory", product.subcategory);
    setValue("label", product.label);
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, "enviando...");

    const res = await fetch("/api/tshirts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        price: Number(data.price),
      }),
    });
    if (res.ok) {
      window.location.reload();
      alert("polo guardado....");
      resetState();
    } else {
      console.log("error");
    }
  });

  const setImagesValue = (value: any) => {
    setValue("images", value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return {
    initForm,
    register,
    watch,
    setImagesValue,
    onSubmit,
  };
};
function resetState() {
  throw new Error("Function not implemented.");
}
