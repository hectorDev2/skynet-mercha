import { Layout } from "../components/Layout";
import { AddForm } from "../components/AddForm";
const cloudinary = require("cloudinary").v2;

const Dashboard = () => {
  // cloudinary.config({
  //   cloud_name: "dfih7mtw6",
  //   api_key: "223439396858958",
  //   api_secret: "FxhvUQNv6adhJ6InJRv8uUjl3FI",
  // });

  // cloudinary.uploader
  //   .destroy("dun8is42uah04wimcagt")
  //   .then((result: any) => console.log(result));

  return (
    <Layout>
      <h2 className="text-5xl text-center mt-[100px]">
        agregar camiseta o polo
      </h2>
      <AddForm />
    </Layout>
  );
};

export default Dashboard;
