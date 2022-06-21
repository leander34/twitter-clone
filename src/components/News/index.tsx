import React from 'react'
import { Container } from './styles'
interface Props {
  where: string;
  what: string;
}

export default function News({ where, what }: Props) {
  return (
    <Container>
      <span>Assuntos do mundo no Brasil</span>
      <strong>Bootcamp Rocketseat</strong>
    </Container>
  )
}
