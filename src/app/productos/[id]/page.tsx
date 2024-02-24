import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Loading } from '../../components/containers/Loading'
import { Content } from '../../components/productId/Content'
import { getTshirtId } from '@/db/database'

export default async function Home ({ params }: { params: { id: string } }) {
  const tshirt = getTshirtId(params.id)

  return (
    <>
      <Head>
        <title>Skynet {tshirt?.name}</title>
      </Head>
      <main>
        <Header />
        {tshirt && (
          <div className='text-center mt-[100px] md:mt-[200px] mb-[120px]'>
            <Content tShirt={tshirt} />
            <img
              className='absolute bottom-0 opacity-10 right-0 z-[-1]'
              src={`/categories/${tshirt?.id}.png`}
              alt={`image ${tshirt?.name}`}
            />
          </div>
        )}
        <Footer />
      </main>
    </>
  )
}
