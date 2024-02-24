'use client'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import Link from 'next/link'
import Loading from '../loading'
import { useEffect, useState } from 'react'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true)
    }, 500)
  })

  return (
    <div>
      {showContent && (
        <>
          <Loading />
          <Header />
          {children}
          <Footer />
          <Link
            href='https://api.whatsapp.com/send?phone=51978738423&text=Hola%20te%20escribo%20desde%20skynet%20%20%F0%9F%91%80%20'
            target='_blank'
            className='z-[-1]'
          >
            <img
              className='fixed hover:scale-[1.1] transition-all ease-in cursor-pointer w-20 h-20 right-0 bottom-0'
              src='/whatsapp.webp'
            />
          </Link>
        </>
      )}
    </div>
  )
}
