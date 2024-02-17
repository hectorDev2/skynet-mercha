'use client'
import * as Styled from './style'

import diabloBg from '../../../../../public/home/gamer.jpeg'

import hearthstoneBg from '../../../../../public/home/films.jpeg'

import wowBg from '../../../../../public/home/wow.jpeg'

import { useEffect, useMemo, useState } from 'react'
import { Slider } from '../../Slider'

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from 'react-parallax-mouse'
import Link from 'next/link'

export function Hero () {
  const pages = useMemo(
    () => [
      {
        id: 'diablo',
        background: diabloBg.src,
        heading: 'Venta de merchandising',
        text: 'Polos personalizados, buena calidad y gamers',
        url: ''
      },
      {
        id: 'hearthstone',
        background: hearthstoneBg.src,
        heading: 'Peliculas, series y mas!',
        text: 'Skynet tiene una gran variedad de contenido en nuestro pagina web',
        url: 'https://skynet.com.pe/'
      },
      {
        id: 'wow',
        background: wowBg.src,
        heading: 'Servidor de Wow: SKYNET WOW',
        text: 'Juega con tus amigos en este loco mundo abierto',
        url: 'https://www.skynetwow.com/'
      }
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [timer, setTimer] = useState<NodeJS.Timeout>()

  useEffect(() => {
    if (timer != null) {
      clearTimeout(timer)
    }
    const newTimer = setTimeout(() => {
      if (index + 1 === pages.length) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 5000)
    setTimer(newTimer)
  }, [index])

  const handleSelectGame = (id: string) => {
    const gameIndex = pages.findIndex(game => game.id === id)
    if (gameIndex >= 0) {
      setIndex(gameIndex)
    }
  }

  return (
    <Styled.Container>
      <Slider
        gameIdActive={pages[index].id}
        handleSelectGame={handleSelectGame}
      />
      {pages.map((page, i) => (
        <Styled.GameContent key={page.id} active={i === index}>
          {i === index && <Styled.ProgressBar />}
          <MouseParallaxContainer
            containerStyle={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            useWindowMouseEvents
          >
            <MouseParallaxChild
              factorX={0.02}
              factorY={0.01}
              style={{
                backgroundImage: `url(${page.background})`
              }}
              className={Styled.Bg()}
            ></MouseParallaxChild>
          </MouseParallaxContainer>

          <div className='relative ml-[2rem] md:ml-[15rem] pt-[15.7rem] flex justify-between max-w-[108.2rem]'>
            <Styled.LeftSide>
              <div>
                <h1 className='text-xl md:text-5xl  drop-shadow-lg'>
                  {page.heading}
                </h1>
                <p
                  className='text-xs leading-9
 md:text-5xl  drop-shadow-lg'
                >
                  {page.text}
                </p>
              </div>
              <Link target='_blank' href={`${page.url}`}>
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
                  Ver Mas
                </button>
              </Link>
            </Styled.LeftSide>
          </div>
        </Styled.GameContent>
      ))}
    </Styled.Container>
  )
}
