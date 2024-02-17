import { forwardRef, useMemo } from 'react'
import { Container, Game } from './style'
import Image from 'next/image'

import Diablo from '../../../../public/icons/logo.png'

import Hearthstone from '../../../../public/icons/films.png'
import Wow from '../../assets/game_icons/wow.png'
import Mu from '../../../../public/icons/mu.png'
import Marketing from '../../../../public/icons/marketing.png'

interface IGames {
  id: string
  image: string
}

interface SliderProps {
  gameIdActive: string
  handleSelectGame: (id: string) => void
}

const Slider = forwardRef<null, SliderProps>(
  ({ gameIdActive, handleSelectGame }, ref) => {
    const games = useMemo<IGames[]>(
      () => [
        {
          id: 'diablo',
          image: Diablo.src
        },
        {
          id: 'hearthstone',
          image: Hearthstone.src
        },
        {
          id: 'wow',
          image: Wow.src
        },
        {
          id: 'mu',
          image: Mu.src
        },
        {
          id: 'marketing',
          image: Marketing.src
        }
      ],
      []
    )

    return (
      <div className='hidden md:block'>
        <Container ref={ref}>
          {games.map(game => (
            <Game
              aria-label={`Mudar para ${game.id}`}
              key={game.id}
              active={game.id === gameIdActive}
              onClick={() => handleSelectGame(game.id)}
            >
              <Image
                src={game.image}
                width='48'
                height='48'
                alt=''
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </Game>
          ))}
        </Container>
      </div>
    )
  }
)

Slider.displayName = 'Slider'
export { Slider }
