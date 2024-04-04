import { AddFormJacket } from "../components/form/AddFormJacket";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <h2 className="text-5xl text-center mt-[100px]">agregar Polera</h2>
      <AddFormJacket />
    </Layout>
  );
};

export default Dashboard;
