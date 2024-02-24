import Head from 'next/head'
import { Download } from './components/containers/Download'
import { Loading } from './components/containers/Loading'
import { Hero } from './components/containers/Hero'
import { Layout } from './layout/Layout'
import { Banner } from './components/shared/Banner'
import { tShirts } from '@/db/database'
import { Products } from './components/containers/Products'
import { ProductsExclusive } from './components/containers/Products/ProductsExclusive'

export default async function Home () {
  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Hero />
        <ProductsExclusive />
        <Products tshirts={tShirts} />
        <Banner />
        <Download />
      </main>
    </Layout>
  )
}
