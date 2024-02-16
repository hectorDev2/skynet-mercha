import { AOSInit } from '@/utils/aos'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SKYNET MERCHA',
  description: 'Tienda Skynet'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <AOSInit />
      <body>{children}</body>
    </html>
  )
}
export const dynamic = 'force-static'
