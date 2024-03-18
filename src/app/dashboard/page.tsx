import { Layout } from './components/Layout'
import { Form } from './components/Form'
const Dashboard = () => {
  return (
    <Layout>
      <h2 className='text-5xl text-center mt-[100px]'>
        agregar camiseta o polo
      </h2>
      <Form />
    </Layout>
  )
}

export default Dashboard
