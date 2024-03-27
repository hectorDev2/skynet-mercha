import { AddForm } from "../components/AddForm";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="text-5xl text-center mt-[100px]">agregar Zapatilla</h2>
      <AddForm />
    </Layout>
  );
};

export default Dashboard;
