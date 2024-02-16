import React from 'react'

export const Banner = () => {
  return (
    <>
      <section className='w-full'>
        <div
          className='bg-yellow-50 h-full w-full rounded-primary relative flex flex-col gap-y-8 lg:p-24 p-8'
          style={{
            backgroundImage:
              'url("https://cdn.wallpapersafari.com/87/90/GjYlhA.jpg")',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img
            alt='model'
            loading='lazy'
            decoding='async'
            data-nimg='1'
            className='w-[300px] lg:absolute bottom-0 left-0 order-2'
            style={{ color: 'transparent' }}
            src='mario.png'
          />
          <article className='flex flex-col justify-start items-end order-1'>
            <div className='flex flex-col gap-y-4 z-50  '>
              <h1 className='md:text-6xl drop-shadow-lg text-4xl'>
                Especiales ofertas por lanzamiento
              </h1>
              <p className='flex flex-row gap-x-0.5 items-center text-lg text-[#04ADFF]'>
                Exclusivos para gente gammer
              </p>
              <button
                className='px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4'
                style={{ cursor: ' none' }}
              >
                Descubre nuestros modelos
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
