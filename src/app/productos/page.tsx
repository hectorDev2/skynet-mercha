import Head from 'next/head'

import { Layout } from '../layout/Layout'
import { Banner } from '../components/shared/Banner'
import Link from 'next/link'
import VideoBg from '../components/Background/VideoBg'

export default function Products ({ tshirts = [] }) {
  console.log(tshirts)

  return (
    <Layout>
      <Head>
        <title>Skynet M</title>
      </Head>
      <VideoBg />
      <main className='pt-[100px] md:pt-[150px]'>
        <h2 className='text-3xl text-center'>Nuestros Modelos</h2>
        <div className='px-[10px] md:px-[100px]'>
          {tshirts?.map(({ images = [], name, id }) => {
            return (
              <div key={id} className='py-[50px] mb-[120px] relative'>
                <img
                  className='absolute z-[-1] w-[200px] top-[0] filter  opacity-10 right-[-20px]  md:right-[-50px]'
                  src={
                    images[0] ??
                    'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'
                  }
                />

                <h2 className='text-2xl text-[#04ADFF] uppercase'>{name}</h2>
                <div
                  className='flex  overflow-x-scroll gap-5 md:gap-2'
                  key={id}
                >
                  <Link href={`/productos/${id}`}>
                    <div className='flex gap-4'>
                      {images.map((image, i) => (
                        <div
                          style={{
                            background:
                              'linear-gradient(100.71deg, rgb(2, 2, 3) 2.26%, rgba(2, 2, 3, 0) 73.74%);'
                          }}
                          className=' w-[200px]  md:w-[300px]  border-2 rounded-md border-[#04abffaf]'
                          data-aos='fade-right '
                          key={i}
                        >
                          <img src={image} />
                        </div>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}
