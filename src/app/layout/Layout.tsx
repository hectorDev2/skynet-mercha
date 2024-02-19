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
      <a
        href='https://api.whatsapp.com/send?phone=51957929331&text=Hola%20te%20escribo%20desde%20skynet%20%20%F0%9F%91%80%20'
        target='_blank'
        className='z-[-1]'
      >
        <img
          className='fixed hover:scale-[1.1] transition-all ease-in cursor-pointer w-20 h-20 right-0 bottom-0'
          src='/whatsapp.webp'
        />
      </a>
    </>
  )
}
