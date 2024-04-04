"use client";
import { Layout } from "../../components/Layout";
import TableComponent from "../../components/Table";
import { useTshirts } from "../../hook/useTshirts";

const Dashboard = () => {
  const { tshirts } = useTshirts();
  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">lista de polos</h2>
      <TableComponent products={tshirts} productTag="tshirts" />
    </Layout>
  );
};

export default Dashboard;
