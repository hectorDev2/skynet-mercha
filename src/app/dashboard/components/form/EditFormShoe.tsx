"use client";

import Heading from "@/app/components/shared/Heading";
import ImageUpload from "@/app/components/shared/ImageUpload";
import { categoriesTshirt, labels, tag } from "@/db/dataNew";
import { getTShoeId, getTshirtById } from "@/utils/fetch";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormShoePUT } from "../../hook/useFormShoePUT";

interface ProductInterface {
  name: string;
  description: string;
  price: number;
  images: any;
  category: string;
  subcategory: string;
  tag: string;
}

export const EditFormShoe = ({ id }: { id: string }) => {
  const { initForm, register, watch, setImagesValue, onSubmit } =
    useFormShoePUT({
      id,
    });
  const [product, setProduct] = useState<ProductInterface>();
  const images = watch("images");

  useEffect(() => {
    getTShoeId(id).then(({ shoe }: any) => {
      const newShoe = {
        ...shoe,
        images: shoe.images.map((image: any) => image.url),
      };
      setProduct(newShoe);
    });
  }, []);

  useEffect(() => {
    if (!product) {
      return;
    }

    initForm(product);
  }, [product]);

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto mt-[50px]">
      <div className="mb-5">
        <label
          htmlFor="titulo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          titulo
        </label>
        <input
          type="text"
          id="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name"
          {...register("name", {
            required: true,
          })}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          descripcion
        </label>
        <input
          type="description
"
          id="description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          {...register("description", {
            required: true,
          })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          precio
        </label>
        <div className="flex">
          <input
            type="number"
            id="price"
            className="shadow-sm mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            {...register("price", {
              required: true,
            })}
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          categoria
        </label>
        <select
          id="category"
          {...register("category", {
            required: true,
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Selecciona una categoria</option>
          {categoriesTshirt?.map(({ id, category }) => (
            <option key={id} value={id}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label
          htmlFor="tag"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tag
        </label>
        <select
          id="tag"
          {...register("tag", {
            required: true,
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Selecciona Exclusividad</option>
          {tag?.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-5">
        <label
          htmlFor="label"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          label
        </label>
        <select
          id="label"
          {...register("label", {
            required: true,
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Selecciona un label</option>
          {labels?.map((lab, i) => (
            <option key={lab} value={lab}>
              {lab}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-8">
        <Heading
          title="Agregar fotos"
          subtitle="Muestra a tus clientes fotos de la foto"
        />
        <ImageUpload
          onChange={(value) => setImagesValue(value)}
          value={images}
        />
      </div>
      <Button
        color="success"
        style={{
          width: "100%",
          margin: "15px 0",
        }}
        variant="bordered"
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        EDITAR POLO
      </Button>
      <Button
        color="danger"
        style={{
          width: "100%",
          margin: "15px 0",
        }}
        variant="bordered"
        onClick={() => initForm(product)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        cancelar
      </Button>
    </form>
  );
};
