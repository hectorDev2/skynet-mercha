"use client";
import { useForm } from "react-hook-form";
import { postRequest } from "../utils/postRequest";

export const useFormJacketPOST = () => {
  const { register, setValue, handleSubmit, watch } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, "enviando...");
    const res: any = await postRequest(data, "jackets");
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
