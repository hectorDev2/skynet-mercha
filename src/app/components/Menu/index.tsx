/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import * as Styled from './styles'

import { Fragment, ReactElement, useMemo } from 'react'

interface IGames {
  image: ReactElement
  href: string
  name: string
}

interface MenuProps {
  show: boolean
  selectedMenu: 'games' | 'varios' | null
}

export function Menu ({ show, selectedMenu }: MenuProps) {
  const games = useMemo<IGames[]>(
    () => [
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://i5.walmartimages.com/seo/Funko-POP-Animation-One-Piece-Crocodile_bdeb50e4-cb02-4493-91db-a7ad9693e076.dc5dc4e0d7f5b5068d74ea32c4deb693.png`}
            alt='categoria anime image'
          />
        ),
        href: '/productos/1',
        name: 'Polos anime'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://cdn.pixabay.com/photo/2013/07/12/12/16/love-145461_1280.png`}
            alt='categoria parejas image'
          />
        ),
        href: '/parejas',
        name: 'Polos Pareja'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-40/512/Starcraft-2-1-icon.png`}
            alt='categoria star craft image'
          />
        ),
        href: '/productos/7',
        name: 'Polos star craft'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://i.pinimg.com/originals/8a/8b/50/8a8b50da2bc4afa933718061fe291520.jpg`}
            alt='categoria dota 2'
          />
        ),
        href: '/productos/3',
        name: 'Polos Dota 2'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Half-Life_lambda_logo.svg/2048px-Half-Life_lambda_logo.svg.png`}
            alt='categoria anime image'
          />
        ),
        href: '/productos/5',
        name: 'Polos Half Life'
      }
    ],
    []
  )

  const varios = useMemo<IGames[]>(
    () => [
      {
        name: 'Mugs',
        href: '/tazas',
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://www.nespresso.com/static/us/solutions/product/pdp/porcelainmugs/nesp-festive-le-mug-set-2000x2000.png`}
            alt=''
          />
        )
      },
      {
        name: 'Escultura',
        href: '/escultura',
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://www.figurasmranime.cl/wp-content/uploads/2022/05/Fashion-anime-japanese-Naruto-action-figure.png_350x350-copia.png`}
            alt=''
          />
        )
      }
    ],
    []
  )

  return (
    <>
      <Styled.Container show={show} selected={selectedMenu || 'null'}>
        <Styled.GamesContainer selected={selectedMenu || 'games'}>
          {selectedMenu === 'games' && (
            <>
              {games.map(game => (
                <Fragment key={game.name}>
                  <Link href={`${game.href}`}>
                    <Styled.Game>
                      {game.image}
                      <p className='text-sm'>{game.name}</p>
                    </Styled.Game>
                  </Link>
                </Fragment>
              ))}
            </>
          )}
          {selectedMenu === 'varios' && (
            <>
              {varios.map(game => (
                <span key={game.name}>
                  <Link href={`${game.href}`}>
                    <Styled.Game>
                      {game.image}
                      <p className='text-sm'>{game.name}</p>
                    </Styled.Game>
                  </Link>
                </span>
              ))}
            </>
          )}
        </Styled.GamesContainer>
      </Styled.Container>
    </>
  )
}
