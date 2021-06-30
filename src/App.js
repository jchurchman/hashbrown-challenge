import { useState } from 'react'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import SearchBar from './components/SearchBar'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 13em;
  left: 0;
  right: 0;
  padding: 2em;
  background-color: light-gray;
`

const SearchTerm = styled.div`
  font-size: 2em;
  margin-top: 1em;
  font-weight: bold;
`

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleFormSubmit = (term) => {
    setSearchTerm(`#${term}`)
  }
  return (
    <AppContainer>
      <AppHeader />
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <SearchTerm>
        {searchTerm}
      </SearchTerm>
    </ AppContainer>
  );
}

export default App;
