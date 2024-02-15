'use client'
import { useEffect } from 'react'
import { Logo } from '../../shared/Logo'
import { Container } from '../../style'

export function Loading () {
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
