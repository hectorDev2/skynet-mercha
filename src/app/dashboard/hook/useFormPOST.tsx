"use client";
import { useForm } from "react-hook-form";

export const useFormPOST = () => {
  const { register, setValue, handleSubmit, watch } = useForm();

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

  const resetState = () => {
    setValue("images", []);
    setValue("category", "");
    setValue("name", "");
    setValue("description", "");
    setValue("price", "");
  };

  return {
    register,
    watch,
    setImagesValue,
    onSubmit,
    resetState,
  };
};
