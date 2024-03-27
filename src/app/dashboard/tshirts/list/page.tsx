import { Layout } from "../../components/Layout";
import TableComponent from "../components/Table";

const Dashboard = () => {
  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">lista de polos</h2>
      <TableComponent />
    </Layout>
  );
};

export default Dashboard;
