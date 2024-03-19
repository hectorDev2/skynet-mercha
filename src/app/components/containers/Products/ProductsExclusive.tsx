import Link from 'next/link'
import { CardProductEx } from './CardProductEx'

export function ProductsExclusive ({ tshirts }: any) {
  console.log(tshirts)

  const exclusiveTshirts = tshirts?.map((tshirt: any) => {
    if (tshirt.tag == 'exclusivo') {
      return tshirt
    }
    return null
  })

  return (
    <div
      style={{ background: 'hsla(205, 46%, 10%, 1)' }}
      className='py-[50px] px-[10px] md:px-[100px] '
    >
      <div className='flex text-center justify-evenly'>
        <div className='text-center'>
          <p className='games-label text-[var(--primary)]'>Merchandising</p>
          <h2 className='text-4xl'>Modelos Exclusivos</h2>
        </div>
      </div>
      <div className=' flex flex-col justify-center md:flex-row md:flex-wrap items-center gap-2 py-5'>
        {exclusiveTshirts?.map((tshirt: any) => (
          <Link key={tshirt?.id} href={`/productos/${tshirt?.id}`}>
            <CardProductEx
              image={tshirt?.images[0]?.url ?? ''}
              product={tshirt}
            />
          </Link>
        ))}
      </div>
      <div className='w-full py-20 flex justify-center '>
        <Link href='/productos/9'>
          <button>
            VER MAS
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon mx-auto hover:scale-150 animate-ping icon-tabler icon-tabler-caret-down'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#ffffff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M6 10l6 6l6 -6h-12' />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}
