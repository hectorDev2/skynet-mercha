'use client'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Content } from '../../components/productId/Content'
import { tShirts } from '@/types'

import { useEffect, useState } from 'react'
import { getTshirtById } from '@/utils/fetch'

export default async function Home ({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<tShirts>()

  const { id } = params

  useEffect(() => {
    getTshirtById(id).then(({ tshirt }) => {
      setProduct(tshirt)
    })
  }, [])

  console.log(product)

  return (
    <>
      <Head>
        <title>Skynet {product?.name}</title>
      </Head>
      <main>
        <Header />
        {product && (
          <div className='text-center mt-[100px] md:mt-[200px] mb-[120px]'>
            <Content tShirt={product} />
            <img
              className='absolute bottom-0 opacity-10 right-0 z-[-1]'
              src={`/categories/${product?.id}.png`}
              alt={`image ${product?.name}`}
            />
          </div>
        )}
        <Footer />
      </main>
    </>
  )
}
