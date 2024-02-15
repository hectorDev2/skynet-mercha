import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from './types/database'
import Head from 'next/head'
import { Download } from './components/containers/Download'
import { Loading } from './components/containers/Loading'
import { Hero } from './components/containers/Hero'
import { Products } from './components/containers/Products'
import { Layout } from './layout/Layout'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: tshirts = [] } = await supabase
    .from('tshirts')
    .select('*')
    .order('created_at', { ascending: false })

  console.log(tshirts)

  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Loading />
        <Hero />

        <Products tshirts={tshirts} />
        <Download />
      </main>
    </Layout>
  )
}
