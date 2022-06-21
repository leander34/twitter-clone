import React from 'react'
import StickyBox from 'react-sticky-box'
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import { 
  Container, 
  InputWrapper, 
  SearchInput, 
  SearchIcon, 
  Body
} from './styles'
export default function SideBar() {

  return (
    <Container>
      <InputWrapper>
        <SearchInput placeholder='Buscar no twitter'/>
        <SearchIcon />      
      </InputWrapper>
      <StickyBox>
      <Body>
        <List 
          title='Talvez você curta'
          elements={[
          <FollowSuggestion name='leandrinho' nickname='lele' />,
          <FollowSuggestion name='rick' nickname='din' />,
          <FollowSuggestion name='tulio' nickname='tulin' />,
        ]}
        />

        <List 
          title='O que está acontecendo'
          elements={[
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
        ]}
        />

        <List 
          title='O que está acontecendo'
          elements={[
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
        ]}
        />

        <List 
          title='O que está acontecendo'
          elements={[
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
          <News where='Assuntos do mundo no Brasil' 
          what='Bootcamp Rocketseat' />,
        ]}
        />

        
      </Body>
      </StickyBox>
    </Container>
  )
}
