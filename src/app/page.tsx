import Head from 'next/head'
import { Download } from './components/containers/Download'
import { Hero } from './components/containers/Hero'
import { Layout } from './layout/Layout'
import { Banner } from './components/shared/Banner'
import { ProductContainer } from './components/ProductContainer'

export default async function Home () {
  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Hero />
        <ProductContainer />
        <Banner />
        <Download />
      </main>
    </Layout>
  )
}
