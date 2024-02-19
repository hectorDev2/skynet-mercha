/* eslint-disable @next/next/no-img-element */
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
        href: '/category/anime',
        name: 'Polos anime'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://icons.iconarchive.com/icons/3xhumed/mega-games-pack-40/512/Starcraft-2-1-icon.png`}
            alt='categoria star craft image'
          />
        ),
        href: '/category/start-craft',
        name: 'Polos star craft'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/WoW_icon.svg/2048px-WoW_icon.svg.png`}
            alt='categoria anime image'
          />
        ),
        href: '/category/wow',
        name: 'Polos wow'
      },
      {
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Half-Life_lambda_logo.svg/2048px-Half-Life_lambda_logo.svg.png`}
            alt='categoria anime image'
          />
        ),
        href: '/category/half-life',
        name: 'Polos Half Life'
      }
    ],
    []
  )

  const varios = useMemo<IGames[]>(
    () => [
      {
        name: 'Mugs',
        href: '#',
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
        href: '#',
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://www.figurasmranime.cl/wp-content/uploads/2022/05/Fashion-anime-japanese-Naruto-action-figure.png_350x350-copia.png`}
            alt=''
          />
        )
      },
      {
        name: 'Posters',
        href: '#',
        image: (
          <img
            className='w-[100px] md:w-[150px]'
            src={`https://www.chitrakalaart.in/wp-content/uploads/2023/08/Group-4.png`}
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
                  <a href={`${game.href}`}>
                    <Styled.Game>
                      {game.image}
                      <p className='text-sm'>{game.name}</p>
                    </Styled.Game>
                  </a>
                </Fragment>
              ))}
            </>
          )}
          {selectedMenu === 'varios' && (
            <>
              {varios.map(game => (
                <span key={game.name}>
                  <Styled.Game>
                    {game.image}
                    <p className='text-sm'>{game.name}</p>
                  </Styled.Game>
                </span>
              ))}
            </>
          )}
        </Styled.GamesContainer>
      </Styled.Container>
    </>
  )
}
