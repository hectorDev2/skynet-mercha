import { Layout } from "../../components/Layout";
import { EditFormJacket } from "../../components/form/EditFormJacket";

const Dashboard = ({ params }: any) => {
  return (
    <Layout>
      <img className=" mx-auto w-[200px]" src="/logo.png" alt="logo png" />
      <h2 className="text-5xl py-2 text-center mt-[20px]">
        Editar polo {params.id}
      </h2>
      <EditFormJacket id={params.id} />
    </Layout>
  );
};

export default Dashboard;
