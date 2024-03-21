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
    getTshirtsParams(2).then(res => {
      setProducts(res.tshirts)
    })
    return () => {
      setProducts([])
    }
  }, [])

  return (
    <Layout>
      <Hero
        title='Polos Musica'
        userLabel='generacion Melodia'
        subtitle='explora nuestra gran variadad de modelos para amantes de la musica.'
        theme='secondary'
      >
        <img src='polos/music/music-background.png' alt='pareja polos' />
      </Hero>
      <Features
        theme='secondary'
        subtitle='Nuestras polos divertidos y originales'
        title='Todo tipo de modelos de '
        stringColor='polos para amantes de la musica'
        features={features}
      />
      <ClientSection
        image='polos/music/music-background-2.png'
        theme='secondary'
        title='Clientes satisfechos'
      />
      <Products tshirts={products} color='black' />
      <About />
    </Layout>
  )
}

export default GamerPage
