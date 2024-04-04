"use client";
import { Layout } from "../../components/Layout";
import TableComponent from "../../components/Table";
import { useShoes } from "../../hook/useShoes";

const TableShoes = () => {
  const { shoes } = useShoes();
  console.log(shoes);

  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">
        lista de Zapatillas
      </h2>
      <TableComponent productTag="shoes" products={shoes} type="shoes" />
    </Layout>
  );
};

export default TableShoes;
