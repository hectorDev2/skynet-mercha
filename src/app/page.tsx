import Head from 'next/head'
import { Download } from './components/containers/Download'
import { Loading } from './components/containers/Loading'
import { Hero } from './components/containers/Hero'
import { Products } from './components/containers/Products'
import { Layout } from './layout/Layout'
import { Banner } from './components/shared/Banner'
import { tShirts } from '@/db/database'

export default async function Home () {
  // const supabase = createServerComponentClient<Database>({ cookies })

  // const { data: tshirts } = await supabase.from('tshirts').select('*')

  // console.log(tshirts, 'tshirtss')

  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Hero />
        <Products tshirts={tShirts} />
        <Banner />
        <Download />
      </main>
    </Layout>
  )
}
