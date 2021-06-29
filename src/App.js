import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import SearchBar from './components/SearchBar'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 13em;
  left: 0;
  right: 0;
  padding: 2em;
  background-color: light-gray;
`

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <SearchBar />
    </ AppContainer>
  );
}

export default App;
