"use client";
import { useForm } from "react-hook-form";

export const useFormPUT = ({ id }: { id: any }) => {
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
    const res = await fetch(`/api/tshirts/${id}`, {
      method: "PUT",
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
      alert("polo editado...");
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
