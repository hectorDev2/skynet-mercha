'use client'
import Image from 'next/image'
import { Container, LeftSide, RightSide } from './style'
import Cards from '../../../assets/icons/cards_group.svg'
import Dots from '../../../assets/icons/dots_group.svg'
import Buy from '../../../assets/icons/buy.svg'
import Download1 from '../../../assets/images/download-1.png'
import Download2 from '../../../assets/images/download-2.png'

export function Download () {
  return (
    <Container>
      <div className='sub-container'>
        <LeftSide>
          <img src='/logo-wow.png' />
          <h2>Juega ahora de nuestro servidor</h2>
          <div className='infos'>
            <div className='info'>
              <Image src={Cards} alt='' />
              <p>experiencia x5</p>
            </div>
            <div className='info'>
              <Image src={Dots} alt='' />
              <p>Comunidad latinoamericana </p>
            </div>
            <div className='info'>
              <Image src={Buy} alt='' />
              <p>Mantenimiento las 24H</p>
            </div>
          </div>
          <a target='_blank' rel='noreferrer' href='https://www.skynetwow.com/'>
            <button className='flex justify-center max-w-[300px] gap-3 cursor-pointer items-center text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-caret-down'
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
                <path d='M6 10l6 6l6 -6h-12' />
              </svg>
              Explorar mundo
            </button>
          </a>
        </LeftSide>
        <RightSide>
          <Image className='img1' src={Download1} alt='' />
          <Image
            className='img2 hidden md:absolute max-w-[647.21px] max-h-[435.75px] right-[5.4rem]  bottom-[-3rem]'
            src={Download2}
            alt=''
          />
        </RightSide>
      </div>
    </Container>
  )
}
