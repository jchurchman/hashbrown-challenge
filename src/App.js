import styled from 'styled-components'
import AppHeader from './components/AppHeader'

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 13em;
  left: 0;
  right: 0;
  padding: 2em;
`

function App() {
  return (
    <AppContainer>
      <AppHeader />
      <div>
        This is the AppHeader component
      </div>
    </ AppContainer>
  );
}

export default App;
