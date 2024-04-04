import { AddFormShoe } from "../components/form/AddFormShoe";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="text-5xl text-center mt-[100px]">agregar Zapatilla</h2>
      <AddFormShoe />
    </Layout>
  );
};

export default Dashboard;
