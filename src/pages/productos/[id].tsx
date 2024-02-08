import { Loading } from '@/components/containers/Loading'
import { useRouter } from 'next/router'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { TShirt } from 'src/types'
import { Content } from '@/components/productId/Content'
interface HomeProps {
  tShirt: TShirt
}

export default function Home({ tShirt }: HomeProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Cargando...</div>
  }
  console.log(tShirt)

  return (
    <>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Header />
        <div className="text-center mt-[100px] md:mt-[200px]">
          <Content tShirt={tShirt} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id
  try {
    const response = await fetch(`http://localhost:3000/t-shirts/${productId}`)
    const data: TShirt = await response.json()

    return {
      props: {
        tShirt: data,
      },
    }
  } catch (error) {
    return {
      props: {
        tShirt: [],
      },
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3000/t-shirts')
  const data: TShirt[] = await response.json()

  // Mapea los datos de los productos para obtener un array de objetos con los IDs de los productos
  const productIds = data.map((product) => ({
    params: { id: product.id.toString() }, // Convertimos el ID a string ya que los parámetros de ruta deben ser strings
  }))

  const paths = productIds
  return {
    paths,
    fallback: true,
  }
}
