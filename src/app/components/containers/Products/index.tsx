import Link from 'next/link'
import { tShirts } from '@/types'
import { CardProduct } from './CardProduct'

export function Products ({ tshirts = [], color = 'hsla(205, 46%, 10%, 1)' }) {
  return (
    <div
      style={{ background: `${color}` }}
      className='py-[100px] px-[10px] md:px-[100px] '
    >
      <div className='flex text-center justify-evenly'>
        <div className='text-center'>
          <p className='games-label text-[var(--primary)]'>Merchandising</p>
          <h2 className='text-4xl'>Modelos Variados</h2>
        </div>
      </div>
      <div className=' flex flex-col justify-center md:flex-row md:flex-wrap items-center gap-2 py-5'>
        {tshirts?.slice(0, 6).map((tShirt: tShirts) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            <CardProduct product={tShirt} />
          </Link>
        ))}
      </div>
      <div className='w-full py-20 flex justify-center '>
        <Link href='/productos'>
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
