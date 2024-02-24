'use client'

import { useEffect } from 'react'
import { Logo } from '../../shared/Logo'
import { Container } from '../../style'

export function LoadingComponent () {
  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    setTimeout(() => {
      window.document.body.style.overflow = 'auto'
    }, 2000)
  }, [])

  return (
    <Container>
      <Logo />
    </Container>
  )
}

// export const Container = styled('div', {
//   width: '100vw',
//   height: '100vh',
//   display: 'grid',
//   placeItems: 'center',
//   position: 'fixed',
//   background: `url(${Background.src}) no-repeat center`,
//   backgroundSize: 'cover',
//   top: 0,
//   left: 0,
//   backgroundColor: '$black',
//   zIndex: 100000,
//   animation: `${ContainerAnimation} 1s ease 2s forwards`,
//   svg: {
//     maxWidth: '300px'
//   },
//   '.logo-blizzard': {
//     animation: `${LogoAnimation} 2s ease`
//   }
// })
