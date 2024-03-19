'use client'
import { useEffect, useState } from 'react'
import { About } from '../components/shared/landing/About'
import { ClientSection } from '../components/shared/landing/ClientSection'
import { Features } from '../components/shared/landing/Main'
import { features } from '../escultura/Data'
import { Hero } from '../components/shared/Hero'
import { Layout } from '../layout/Layout'
import { Products } from '../components/containers/Products'
import { getTshirtsParams } from '@/utils/fetch'

const GamerPage = () => {
  const [products, setProducts] = useState<any>()

  // getTshirts()
  useEffect(() => {
    getTshirtsParams(1).then(res => {
      console.log(res)

      setProducts(res.tshirts)
    })
    return () => {
      setProducts([])
    }
  }, [])

  return (
    <Layout>
      <Hero
        title='Polos Gamers'
        userLabel='generacion gamer'
        subtitle='explora nuestra gran variadad de modelos para gamers.'
        theme='secondary'
      >
        <img src='polos/gamer-background.png' alt='pareja polos' />
      </Hero>
      <Features
        theme='secondary'
        subtitle='Nuestras polos divertidos y originales'
        title='Todo tipo de modelos de '
        stringColor='polos para parejas'
        features={features}
      />
      <ClientSection
        image='polos/gamer/gamer-background-2.png'
        theme='secondary'
        title='Clientes satisfechos'
      />
      <Products tshirts={products} color='black' />
      <About />
    </Layout>
  )
}

export default GamerPage
