import Link from 'next/link'
import React from 'react'

export const Hero = ({
  title = 'title default',
  userLabel = 'user label default',
  subtitle,
  theme,
  children
}: {
  title: string
  userLabel: string
  subtitle: string
  children: React.ReactNode
  theme: string
}) => {
  return (
    <main className='mt-[100px] z-0'>
      <section className='container w-[75%] grid mx-auto lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10'>
        <div className='text-center lg:text-start space-y-6'>
          <main className='text-5xl md:text-6xl font-bold'>
            <h1 className='inline'>
              <span className='inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text'>
                {title}
              </span>
            </h1>
            <h2>
              para{' '}
              <span className=' bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text'>
                la
              </span>
            </h2>

            <h2>{userLabel}</h2>
          </main>
          <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
            {subtitle}
          </p>
          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-${theme} text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-1/3`}
            >
              Consultar
            </button>
            <Link
              href='https://api.whatsapp.com/send?phone=51978738423&text=Hola%20te%20escribo%20desde%20skynet%20%20%F0%9F%91%80%20'
              target='_blank'
              className='w-full md:w-1/3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
            >
              Contacto
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon w-[20px] ml-5 icon-tabler icon-tabler-brand-whatsapp'
                width='44'
                height='44'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='#ffffff'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9' />
                <path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1' />
              </svg>
            </Link>
          </div>
        </div>
        <div className='z-0'>{children}</div>
        <div className='shadow'></div>
      </section>
    </main>
  )
}
