import styled from 'styled-components'
import useAppHook from './App.hook'
import AppHeader from './components/AppHeader'
import SearchBar from './components/SearchBar'
import TweetBox from './components/TweetBox'

const AppContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 13em;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2em;
  overflow: hidden;
  background-color: #ECEBEB;
`

const SearchTerm = styled.div`
  font-size: 1.25em;
  margin-top: 1em;
  margin-bottom: 1em;
  font-weight: bold;
  min-height: 1.25em;
`

const TweetList = styled.div`
  height: calc(100vh - 24em);
  overflow: scroll;
  ${TweetBox}:first-child {
    margin-top: 0;
  }
`

function App() {
  const {
    searchTerm,
    handleFormSubmit,
    results,
  } = useAppHook()

  return (
    <AppContainer>
      <AppHeader />
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <SearchTerm>
        {
          searchTerm && `Tweets with the "${searchTerm}" hashtag:`
        }
        
      </SearchTerm>
      {
        searchTerm && results.length && (
          <TweetList>
            {
              results.map(({ id, text }) => (
                <TweetBox key={id} text={text} />
              ))
            }
          </TweetList>
        )
      }
    </ AppContainer>
  );
}

export default App;
