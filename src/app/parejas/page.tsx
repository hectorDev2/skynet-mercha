import { Layout } from '../layout/Layout'
import { Features } from '../components/shared/landing/Main'
import { ClientSection } from '../components/shared/landing/ClientSection'
import DemoSlider from '../components/shared/landing/DemoSlider'
import { Hero } from '../components/shared/Hero'
import { About } from '../components/shared/landing/About'
import { features, products } from './Data'

export default function Pairs () {
  return (
    <Layout>
      <Hero
        title='Polos para parejas'
        userLabel='generacion cool'
        subtitle='explora nuestra gran variadad de modelos de tazas.'
        theme='secondary'
      >
        <img src='parejas/principal.png' alt='pareja polos' />
      </Hero>
      <Features
        theme='secondary'
        subtitle='Nuestras polos divertidos y originales'
        title='Todo tipo de modelos de '
        stringColor='polos para parejas'
        features={features}
      />
      <ClientSection
        image='parejas/carousel/1.png'
        theme='secondary'
        title='Clientes satisfechos'
      />
      <DemoSlider tag='detalles' theme='secondary' products={products} />
      <About />
    </Layout>
  )
}
