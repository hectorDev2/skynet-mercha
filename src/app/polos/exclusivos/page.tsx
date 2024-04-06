import { Hero } from '@/app/components/containers/Hero'
import ProductsPage from '@/app/components/containers/Products/ProductsPage'
import { Layout } from '@/app/layout/Layout'
import Head from 'next/head'

export default async function Home () {
  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main className='my-[120px]'>
        <ProductsPage exclusive={true} />
      </main>
    </Layout>
  )
}
