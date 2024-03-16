'use client'
import Head from 'next/head'
import { Download } from './components/containers/Download'
import { Hero } from './components/containers/Hero'
import { Layout } from './layout/Layout'
import { Banner } from './components/shared/Banner'
import { ProductsExclusive } from './components/containers/Products/ProductsExclusive'
import { useEffect, useState } from 'react'
import { Products } from './components/containers/Products'
import { getTshirts } from '@/utils/fetch'

export default async function Home () {
  const [products, setProducts] = useState<any>()

  // getTshirts()
  useEffect(() => {
    getTshirts().then(res => {
      setProducts(res.tshirts)
    })
    return () => {
      setProducts([])
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <main>
        <Hero />
        <ProductsExclusive />
        <Products tshirts={products} />
        <Banner />
        <Download />
      </main>
    </Layout>
  )
}
