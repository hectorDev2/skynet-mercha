import { AOSInit } from '@/utils/aos'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import { Loading } from '../components/containers/Loading'
type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <AOSInit />
      <Loading />
      {children}
      <Footer />
    </>
  )
}
