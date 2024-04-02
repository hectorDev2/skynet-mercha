"use client";
import { Layout } from "../../components/Layout";
import { useJackets } from "../../hook/useJacket";
import TableComponent from "../components/Table";

const TableJacket = () => {
  const { jackets } = useJackets();

  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">lista de Casacas</h2>
      <TableComponent products={jackets} type="shoes" />
    </Layout>
  );
};

export default TableJacket;
