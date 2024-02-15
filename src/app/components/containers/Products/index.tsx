import { Container, GameCard, GamesList } from './style'
import Link from 'next/link'

export function Products ({ tshirts }: any) {
  return (
    <Container>
      <div className='flex text-center justify-evenly'>
        <div className='text-center'>
          <p className='games-label'>Merchandising</p>
          <h2 className='text-4xl'>Modelos Exclusivos</h2>
        </div>
      </div>
      <GamesList>
        {tshirts?.map((tShirt: any) => (
          <Link key={tShirt.name} href={`/productos/${tShirt.id}`}>
            <GameCard data-aos='fade-right '>
              <div className='game-image-container transition-transform ease-in  hover:scale-110'>
                <img className='w-[400px]' src={`${tShirt.image[0]}`} alt='' />
                <div className='overlay'></div>
              </div>
              <p className='game-name'>{tShirt.name}</p>
              <p className='game-category'>S ./{tShirt.price}</p>
            </GameCard>
          </Link>
        ))}
      </GamesList>
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
    </Container>
  )
}
