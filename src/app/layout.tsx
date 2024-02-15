import { AOSInit } from '@/utils/aos'
import './globals.css'
import { Providers } from './providers'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <AOSInit />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
