"use client";
import { Layout } from "../../components/Layout";
import { useShoes } from "../../hook/useShoes";
import { useTshirts } from "../../hook/useTshirts";
import TableComponent from "../components/Table";

const TableShoes = () => {
  const { shoes } = useShoes();

  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">
        lista de Zapatillas
      </h2>
      <TableComponent products={shoes} type="shoes" />
    </Layout>
  );
};

export default TableShoes;
