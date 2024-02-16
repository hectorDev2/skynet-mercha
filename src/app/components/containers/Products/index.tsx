import { TShirt } from '@/types'
import Link from 'next/link'
import { CardProduct } from '../../CardProduct'

export function Products ({ tshirts }: { tshirts: TShirt[] }) {
  return (
    <div
      style={{ background: 'hsla(205, 46%, 10%, 1)' }}
      className='py-[100px] px-[100px] '
    >
      <div className='flex text-center justify-evenly'>
        <div className='text-center'>
          <p className='games-label'>Merchandising</p>
          <h2 className='text-4xl'>Modelos Exclusivos</h2>
        </div>
      </div>
      <div className='flex gap-2 py-5'>
        {tshirts?.map((tShirt: TShirt) => (
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
