import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #ECEBEB;
`

const HeaderBar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4em;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeadingText = styled.h1`
  color: white;
  margin: 0;
`

const StrikeText = styled.span`
  text-decoration: line-through;
  margin: 0 0.35em;
`

const HashbrownTag = styled.img`
  width: auto;
  height: 8em;
  border-radius: 3em;
  margin-top: 5em;
`

const AppHeader = () => {
  return (
    <Header>
      <HeaderBar>
        <HeadingText>
          Get your
          <StrikeText>
            Hashbrowns
          </StrikeText>
          Hashtags here!
        </HeadingText>
      </HeaderBar>
      <HashbrownTag src={"https://media.giphy.com/media/10GUbOX16lS15C/giphy.gif"} alt="hashbrown" />
    </ Header>
  )
}

export default AppHeader