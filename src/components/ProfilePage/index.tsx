import React from 'react'
import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton} from './styles'
import Feed from '../Feed'

export default function index() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Leander Silveira</h1>
        <h2>@leander</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de agosto de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}
