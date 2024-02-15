import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { AuthButtonServer } from '../components/auth-button-server'

import { Loading } from '../components/containers/Loading'
type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <AuthButtonServer />
      <Loading />
      {children}
      <Footer />
    </>
  )
}
