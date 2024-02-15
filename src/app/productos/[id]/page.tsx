import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Loading } from '../../components/containers/Loading'
import { Content } from '../../components/productId/Content'
import { Database } from '@/app/types/database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home ({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data, error } = await supabase
    .from('tshirts')
    .select()
    .eq('id', params.id)

  if (error) {
    alert('error al traer los datos')
    return
  }
  const tshirt = data[0]

  return (
    <>
      <Head>
        <title>Skynet {tshirt?.name}</title>
      </Head>
      <main>
        <Loading />
        <Header />
        {tshirt && (
          <div className='text-center mt-[100px] md:mt-[200px] mb-[120px]'>
            <Content tShirt={tshirt} />
            <img
              className='absolute bottom-0 opacity-10 right-0 z-[-1]'
              src={`/categories/${tshirt?.id_background}.png`}
              alt={`image ${tshirt?.name}`}
            />
          </div>
        )}
        <Footer />
      </main>
    </>
  )
}
